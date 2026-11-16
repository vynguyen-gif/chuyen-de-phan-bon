// Web Audio API Sound Effects
class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }
  playCorrect() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15); // G5
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch(e) {}
  }
  playIncorrect() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.setValueAtTime(200, now + 0.12);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } catch(e) {}
  }
}
const sfx = new SoundFX();

// App State
const state = {
  activeTab: 'practice', // 'practice', 'exam', 'mistakes', 'bookmarks', 'theory'
  selectedLesson: 'all', // 'all', 1, 2, 3
  selectedLevel: 'all', // 'all', 'nhan_biet', 'thong_hieu', 'van_dung'
  shuffleMode: false,
  soundEnabled: true,
  
  // Practice state
  practiceAnswers: {}, // questionId -> chosenOptionIndex
  revealedExplanations: {}, // questionId -> bool
  
  // Exam state
  examActive: false,
  examQuestions: [],
  examAnswers: {}, // questionId -> optionIndex
  examFlags: {}, // questionId -> bool
  examTimeLeft: 0,
  examTimerInterval: null,
  examResult: null,
  examConfig: {
    count: 20,
    lesson: 'all',
    minutes: 20
  },

  // Persistent user data
  wrongQuestions: new Set(),
  bookmarkedQuestions: new Set(),
  historyStats: {
    totalAttempted: 0,
    totalCorrect: 0
  },
  studentInfo: {
    name: '',
    class: '',
    school: ''
  }
};

// LocalStorage helpers
function loadLocalStorage() {
  try {
    const savedWrong = localStorage.getItem('phanbon_wrong_questions');
    if (savedWrong) state.wrongQuestions = new Set(JSON.parse(savedWrong));
    
    const savedBookmarks = localStorage.getItem('phanbon_bookmarks');
    if (savedBookmarks) state.bookmarkedQuestions = new Set(JSON.parse(savedBookmarks));

    const savedStats = localStorage.getItem('phanbon_stats');
    if (savedStats) state.historyStats = JSON.parse(savedStats);

    const savedStudent = localStorage.getItem('phanbon_student');
    if (savedStudent) state.studentInfo = JSON.parse(savedStudent);
  } catch(e) {
    console.warn("Could not load local storage", e);
  }
}

function saveLocalStorage() {
  try {
    localStorage.setItem('phanbon_wrong_questions', JSON.stringify(Array.from(state.wrongQuestions)));
    localStorage.setItem('phanbon_bookmarks', JSON.stringify(Array.from(state.bookmarkedQuestions)));
    localStorage.setItem('phanbon_stats', JSON.stringify(state.historyStats));
    localStorage.setItem('phanbon_student', JSON.stringify(state.studentInfo));
  } catch(e) {}
}

// Utility: Shuffle an array copy
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Filter questions based on current lesson & level
function getFilteredQuestions(scope = 'practice') {
  let list = [...QUESTIONS_DATA];
  
  if (scope === 'mistakes') {
    list = list.filter(q => state.wrongQuestions.has(q.id));
  } else if (scope === 'bookmarks') {
    list = list.filter(q => state.bookmarkedQuestions.has(q.id));
  } else {
    if (state.selectedLesson !== 'all') {
      list = list.filter(q => q.lessonId === parseInt(state.selectedLesson));
    }
    if (state.selectedLevel !== 'all') {
      list = list.filter(q => q.level === state.selectedLevel);
    }
  }

  if (state.shuffleMode && scope === 'practice') {
    // If shuffle is requested, stable seed or randomized
    list = shuffle(list);
  }
  return list;
}

// Render Top Stats Header
function updateTopStats() {
  const answeredCount = Object.keys(state.practiceAnswers).length;
  let correctCount = 0;
  Object.entries(state.practiceAnswers).forEach(([qid, ansIdx]) => {
    const q = QUESTIONS_DATA.find(item => item.id == qid);
    if (q && q.answer === ansIdx) correctCount++;
  });
  const rate = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  
  document.getElementById('statTotalQuestions').innerText = QUESTIONS_DATA.length;
  document.getElementById('statAnswered').innerText = answeredCount;
  document.getElementById('statAccuracy').innerText = `${rate}%`;
  document.getElementById('statMistakesCount').innerText = state.wrongQuestions.size;
  document.getElementById('badgeMistakes').innerText = state.wrongQuestions.size;
  document.getElementById('badgeBookmarks').innerText = state.bookmarkedQuestions.size;
}

// Render Question Card
function createQuestionHTML(q, index, options = {}) {
  const isPractice = options.isPractice !== false;
  const isExam = options.isExam === true;
  const examAnswer = isExam ? state.examAnswers[q.id] : undefined;
  const chosenIndex = isPractice ? state.practiceAnswers[q.id] : examAnswer;
  const isAnswered = chosenIndex !== undefined;
  const isBookmarked = state.bookmarkedQuestions.has(q.id);
  const isWrong = isAnswered && chosenIndex !== q.answer;
  const isCorrect = isAnswered && chosenIndex === q.answer;
  const showExplanation = options.forceShowExplanation || state.revealedExplanations[q.id] || (isPractice && isAnswered);

  let levelBadgeColor = 'bg-blue-100 text-blue-800 border-blue-200';
  if (q.level === 'thong_hieu') levelBadgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-200';
  if (q.level === 'van_dung') levelBadgeColor = 'bg-amber-100 text-amber-800 border-amber-200';

  const optionsHTML = q.options.map((optText, optIdx) => {
    let btnClass = "w-full text-left p-3 sm:p-3.5 rounded-xl border-2 transition-all flex items-start gap-3 relative touch-manipulation active:scale-[0.99] ";
    let iconClass = "inline-flex items-center justify-center w-7 h-7 rounded-lg font-bold text-sm shrink-0 border ";
    let iconContent = String.fromCharCode(65 + optIdx);
    
    if (isExam && !options.examFinished) {
      if (chosenIndex === optIdx) {
        btnClass += "border-emerald-600 bg-emerald-50 text-emerald-950 font-medium shadow-sm";
        iconClass += "bg-emerald-600 text-white border-emerald-600";
      } else {
        btnClass += "border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-800";
        iconClass += "bg-white text-slate-700 border-slate-300";
      }
    } else if (isPractice && isAnswered) {
      // In practice mode and answered
      if (optIdx === q.answer) {
        btnClass += "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-2 ring-emerald-400";
        iconClass += "bg-emerald-500 text-white border-emerald-500";
        iconContent = "✓";
      } else if (chosenIndex === optIdx) {
        btnClass += "border-rose-500 bg-rose-50 text-rose-900 line-through ring-2 ring-rose-400";
        iconClass += "bg-rose-500 text-white border-rose-500";
        iconContent = "✗";
      } else {
        btnClass += "border-slate-200 text-slate-400 opacity-60";
        iconClass += "bg-slate-100 text-slate-400 border-slate-200";
      }
    } else if (options.examFinished) {
      if (optIdx === q.answer) {
        btnClass += "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-2 ring-emerald-400";
        iconClass += "bg-emerald-500 text-white border-emerald-500";
        iconContent = "✓";
      } else if (chosenIndex === optIdx) {
        btnClass += "border-rose-500 bg-rose-50 text-rose-900 line-through ring-2 ring-rose-400";
        iconClass += "bg-rose-500 text-white border-rose-500";
        iconContent = "✗";
      } else {
        btnClass += "border-slate-200 text-slate-500";
        iconClass += "bg-white text-slate-500 border-slate-200";
      }
    } else {
      // Unanswered practice
      btnClass += "border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 text-slate-800 cursor-pointer hover:shadow-sm";
      iconClass += "bg-white text-slate-700 border-slate-300";
    }
    const iconHTML = `<span class="${iconClass}">${iconContent}</span>`;
    const cleanOptText = optText.replace(/^[A-D]\.\s*/, '');

    const clickHandler = isExam 
      ? `selectExamAnswer(${q.id}, ${optIdx})` 
      : (!isAnswered ? `handlePracticeAnswer(${q.id}, ${optIdx})` : '');

    return `
      <button 
        type="button" 
        ${!isExam && isAnswered ? 'disabled' : ''} 
        onclick="${clickHandler}"
        class="${btnClass}"
      >
        ${iconHTML}
        <span class="flex-1 text-base leading-relaxed pt-0.5">${escapeHTML(cleanOptText)}</span>
      </button>
    `;
  }).join('');

  return `
    <div id="qcard-${q.id}" class="bg-white rounded-2xl p-5 md:p-6 border border-slate-200/80 shadow-sm transition-all hover:shadow-md relative">
      <!-- Card header -->
      <div class="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-slate-100">
        <div class="flex items-center flex-wrap gap-2">
          <span class="inline-flex items-center justify-center px-3 py-1 bg-emerald-700 text-white text-xs font-bold rounded-lg tracking-wide">
            CÂU ${index + 1}
          </span>
          <span class="text-xs font-medium px-2.5 py-1 rounded-md border ${levelBadgeColor}">
            ${q.levelName}
          </span>
          <span class="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
            Bài ${q.lessonId}
          </span>
        </div>
        <div class="flex items-center gap-1.5">
          <button 
            type="button" 
            onclick="toggleBookmark(${q.id})" 
            title="Đánh dấu câu hỏi này"
            class="p-2 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition-colors ${isBookmarked ? 'text-amber-500 font-bold' : ''}"
          >
            ${isBookmarked ? '★ Đã lưu' : '☆ Đánh dấu'}
          </button>
          ${isPractice && isAnswered ? `
            <button 
              type="button" 
              onclick="redoPracticeQuestion(${q.id})" 
              title="Làm lại câu này"
              class="p-2 text-xs font-medium rounded-lg text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center gap-1"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              Làm lại
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Question Text -->
      <div class="text-slate-900 font-semibold text-base md:text-lg mb-5 leading-relaxed whitespace-pre-line">
        ${escapeHTML(q.question)}
      </div>

      <!-- Options -->
      <div class="grid grid-cols-1 gap-2.5 mb-4">
        ${optionsHTML}
      </div>

      <!-- Feedback / Explanation -->
      ${showExplanation ? `
        <div class="mt-4 p-4 rounded-xl border ${isWrong ? 'bg-rose-50/70 border-rose-200' : 'bg-emerald-50/70 border-emerald-200'}">
          <div class="flex items-center gap-2 font-bold text-sm mb-1.5 ${isWrong ? 'text-rose-800' : 'text-emerald-800'}">
            <span>${isWrong ? '❌ Chưa chính xác!' : '✅ Chính xác!'}</span>
            <span class="text-xs font-normal text-slate-600">(Đáp án đúng: <b>${String.fromCharCode(65 + q.answer)}</b>)</span>
          </div>
          <div class="text-sm text-slate-700 leading-relaxed whitespace-pre-line pl-1 border-l-2 ${isWrong ? 'border-rose-400' : 'border-emerald-400'}">
            <b>Lời giải chi tiết:</b><br/>${escapeHTML(q.explanation)}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Handlers for Practice Mode
function handlePracticeAnswer(questionId, optIdx) {
  state.practiceAnswers[questionId] = optIdx;
  const q = QUESTIONS_DATA.find(item => item.id === questionId);
  if (!q) return;

  if (optIdx === q.answer) {
    sfx.playCorrect();
    state.wrongQuestions.delete(questionId);
    state.historyStats.totalCorrect++;
  } else {
    sfx.playIncorrect();
    state.wrongQuestions.add(questionId);
  }
  state.historyStats.totalAttempted++;
  saveLocalStorage();
  updateTopStats();
  renderCurrentView();
}

function redoPracticeQuestion(questionId) {
  delete state.practiceAnswers[questionId];
  delete state.revealedExplanations[questionId];
  renderCurrentView();
  updateTopStats();
}

function toggleBookmark(questionId) {
  if (state.bookmarkedQuestions.has(questionId)) {
    state.bookmarkedQuestions.delete(questionId);
  } else {
    state.bookmarkedQuestions.add(questionId);
  }
  saveLocalStorage();
  updateTopStats();
  renderCurrentView();
}

// Reset all practice progress
function resetAllPractice() {
  if (!confirm("Bạn có chắc muốn đặt lại toàn bộ kết quả luyện tập để làm lại từ đầu không?")) return;
  state.practiceAnswers = {};
  state.revealedExplanations = {};
  updateTopStats();
  renderCurrentView();
}

// Render the active view
function renderCurrentView() {
  const container = document.getElementById('viewContent');
  if (!container) return;

  if (state.activeTab === 'practice') {
    renderPracticeTab(container);
  } else if (state.activeTab === 'exam') {
    renderExamTab(container);
  } else if (state.activeTab === 'mistakes') {
    renderMistakesTab(container);
  } else if (state.activeTab === 'bookmarks') {
    renderBookmarksTab(container);
  } else if (state.activeTab === 'theory') {
    renderTheoryTab(container);
  }
}

// 1. PRACTICE TAB
function renderPracticeTab(container) {
  const list = getFilteredQuestions('practice');
  
  let headerHtml = `
    <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm mb-6">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-bold text-slate-800 flex items-center gap-2">
            <span>📚 Luyện Tập Trắc Nghiệm Từng Câu</span>
            <span class="text-sm font-semibold bg-emerald-100 text-emerald-800 px-3 py-0.5 rounded-full">${list.length} câu</span>
          </h2>
          <p class="text-sm text-slate-500 mt-1">Chọn đáp án để biết ngay kết quả và xem lời giải phân tích chi tiết.</p>
        </div>
        <div class="flex items-center flex-wrap gap-2">
          <button onclick="toggleShuffle()" class="px-3.5 py-2 rounded-xl text-xs font-semibold border ${state.shuffleMode ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'} flex items-center gap-1.5 transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            ${state.shuffleMode ? 'Đang Xáo trộn câu' : 'Xáo trộn câu'}
          </button>
          <button onclick="resetAllPractice()" class="px-3.5 py-2 rounded-xl text-xs font-semibold border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 flex items-center gap-1.5 transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            Làm lại từ đầu
          </button>
        </div>
      </div>

      <!-- Filters -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-100">
        <div>
          <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Chọn Bài Học</label>
          <select id="selectLessonFilter" onchange="changeLessonFilter(this.value)" class="w-full text-sm font-medium bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-800 focus:ring-2 focus:ring-emerald-500">
            <option value="all" ${state.selectedLesson === 'all' ? 'selected' : ''}>Tất cả các bài (79 câu)</option>
            <option value="1" ${state.selectedLesson === '1' ? 'selected' : ''}>Bài 1: Giới thiệu chung (23 câu)</option>
            <option value="2" ${state.selectedLesson === '2' ? 'selected' : ''}>Bài 2: Phân bón vô cơ (36 câu)</option>
            <option value="3" ${state.selectedLesson === '3' ? 'selected' : ''}>Bài 3: Phân bón hữu cơ (20 câu)</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Mức Độ Nhận Thức</label>
          <select id="selectLevelFilter" onchange="changeLevelFilter(this.value)" class="w-full text-sm font-medium bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-800 focus:ring-2 focus:ring-emerald-500">
            <option value="all" ${state.selectedLevel === 'all' ? 'selected' : ''}>Tất cả mức độ</option>
            <option value="nhan_biet" ${state.selectedLevel === 'nhan_biet' ? 'selected' : ''}>Mức độ Nhận biết</option>
            <option value="thong_hieu" ${state.selectedLevel === 'thong_hieu' ? 'selected' : ''}>Mức độ Thông hiểu</option>
            <option value="van_dung" ${state.selectedLevel === 'van_dung' ? 'selected' : ''}>Mức độ Vận dụng</option>
          </select>
        </div>

        <div class="sm:col-span-2 flex items-end">
          <div class="w-full bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-2.5 flex items-center justify-between text-xs text-emerald-900">
            <span>💡 <b>Mẹo học:</b> Bấm vào ngôi sao <b>Đánh dấu</b> để lưu các câu cần ôn lại vào mục riêng.</span>
          </div>
        </div>
      </div>
    </div>
  `;

  if (list.length === 0) {
    container.innerHTML = headerHtml + `
      <div class="bg-white rounded-2xl p-12 text-center border border-slate-200">
        <div class="text-4xl mb-3">🔍</div>
        <p class="text-slate-600 font-medium">Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại.</p>
        <button onclick="changeLessonFilter('all'); changeLevelFilter('all');" class="mt-3 text-emerald-700 font-bold hover:underline">
          Đặt lại bộ lọc
        </button>
      </div>
    `;
    return;
  }

  const questionsHtml = list.map((q, idx) => createQuestionHTML(q, idx, { isPractice: true })).join('');
  container.innerHTML = headerHtml + `<div class="space-y-5">${questionsHtml}</div>`;
}

function changeLessonFilter(val) {
  state.selectedLesson = val;
  renderCurrentView();
}

function changeLevelFilter(val) {
  state.selectedLevel = val;
  renderCurrentView();
}

function toggleShuffle() {
  state.shuffleMode = !state.shuffleMode;
  renderCurrentView();
}

// 2. EXAM TAB (THI THỬ TÍNH GIỜ)
function renderExamTab(container) {
  if (state.examActive) {
    renderExamOngoing(container);
  } else if (state.examResult) {
    renderExamSummary(container);
  } else {
    renderExamSetup(container);
  }
}

function renderExamSetup(container) {
  container.innerHTML = `
    <div class="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
      <div class="text-center mb-6">
        <span class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 text-3xl mb-3">
          ⏱️
        </span>
        <h2 class="text-2xl font-black text-slate-800">Chế Độ Thi Thử Tính Giờ</h2>
        <p class="text-sm text-slate-600 mt-1">Mô phỏng bài kiểm tra trắc nghiệm chính thức, có đồng hồ đếm ngược và chấm điểm tự động.</p>
      </div>

      <div class="space-y-5">
        <div>
          <label class="block text-sm font-bold text-slate-700 mb-2">1. Chọn Phạm Vi Kiến Thức</label>
          <select id="examLessonSelect" class="w-full p-3 rounded-xl border border-slate-300 font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500">
            <option value="all">Toàn bộ chuyên đề (Bài 1 + Bài 2 + Bài 3 - 79 câu)</option>
            <option value="1">Bài 1: Giới thiệu chung về phân bón (23 câu)</option>
            <option value="2">Bài 2: Phân bón vô cơ (36 câu)</option>
            <option value="3">Bài 3: Phân bón hữu cơ (20 câu)</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-700 mb-2">2. Chọn Số Lượng Câu Hỏi</label>
          <div class="grid grid-cols-3 gap-3">
            <label class="border-2 rounded-xl p-3 text-center cursor-pointer hover:border-emerald-500 transition-all">
              <input type="radio" name="examCount" value="20" checked class="hidden peer">
              <div class="peer-checked:font-bold peer-checked:text-emerald-700">
                <div class="text-lg font-bold">20 câu</div>
                <div class="text-xs text-slate-500">15 phút</div>
              </div>
            </label>
            <label class="border-2 rounded-xl p-3 text-center cursor-pointer hover:border-emerald-500 transition-all">
              <input type="radio" name="examCount" value="35" class="hidden peer">
              <div class="peer-checked:font-bold peer-checked:text-emerald-700">
                <div class="text-lg font-bold">35 câu</div>
                <div class="text-xs text-slate-500">30 phút</div>
              </div>
            </label>
            <label class="border-2 rounded-xl p-3 text-center cursor-pointer hover:border-emerald-500 transition-all">
              <input type="radio" name="examCount" value="max" class="hidden peer">
              <div class="peer-checked:font-bold peer-checked:text-emerald-700">
                <div class="text-lg font-bold">Tất cả</div>
                <div class="text-xs text-slate-500">60 phút</div>
              </div>
            </label>
          </div>
        </div>

        <div class="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-900 leading-relaxed">
          <b>⚠️ Quy chế thi thử:</b><br/>
          - Câu hỏi và thứ tự các đáp án sẽ được đảo ngẫu nhiên.<br/>
          - Không hiển thị đáp án và lời giải trong quá trình làm bài.<br/>
          - Hết giờ hệ thống sẽ tự động thu bài và hiển thị kết quả phân tích chi tiết.
        </div>

        <button onclick="startExam()" class="w-full py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-lg shadow-lg hover:shadow-xl transition-all transform active:scale-[0.99] flex items-center justify-center gap-2">
          <span>🚀 BẮT ĐẦU LÀM BÀI THI</span>
        </button>
      </div>
    </div>
  `;
}

function startExam() {
  const lessonVal = document.getElementById('examLessonSelect').value;
  const countRadio = document.querySelector('input[name="examCount"]:checked').value;
  
  let pool = [...QUESTIONS_DATA];
  if (lessonVal !== 'all') {
    pool = pool.filter(q => q.lessonId === parseInt(lessonVal));
  }
  
  let targetCount = pool.length;
  let minutes = 45;
  if (countRadio === '20') {
    targetCount = Math.min(20, pool.length);
    minutes = 15;
  } else if (countRadio === '35') {
    targetCount = Math.min(35, pool.length);
    minutes = 30;
  } else {
    minutes = Math.max(30, Math.round(targetCount * 0.9));
  }

  // Shuffle pool and select targetCount
  const shuffledPool = shuffle(pool).slice(0, targetCount);

  state.examActive = true;
  state.examQuestions = shuffledPool;
  state.examAnswers = {};
  state.examFlags = {};
  state.examTimeLeft = minutes * 60;
  state.examResult = null;

  if (state.examTimerInterval) clearInterval(state.examTimerInterval);
  state.examTimerInterval = setInterval(() => {
    state.examTimeLeft--;
    const mins = Math.floor(state.examTimeLeft / 60);
    const secs = state.examTimeLeft % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    const timerElem = document.getElementById('examCountdown');
    const mobileTimerElem = document.getElementById('mobileExamCountdown');
    if (timerElem) {
      timerElem.innerText = timeStr;
      if (state.examTimeLeft < 180) timerElem.classList.add('text-rose-600', 'animate-pulse');
    }
    if (mobileTimerElem) {
      mobileTimerElem.innerText = timeStr;
      if (state.examTimeLeft < 180) mobileTimerElem.classList.add('text-rose-600', 'animate-pulse');
    }
    if (state.examTimeLeft <= 0) {
      clearInterval(state.examTimerInterval);
      submitExam(true);
    }
  }, 1000);

  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderExamOngoing(container) {
  const answeredCount = Object.keys(state.examAnswers).length;
  const total = state.examQuestions.length;
  const mins = Math.floor(state.examTimeLeft / 60);
  const secs = state.examTimeLeft % 60;

  const matrixHTML = state.examQuestions.map((q, idx) => {
    const isAnswered = state.examAnswers[q.id] !== undefined;
    const isFlagged = state.examFlags[q.id];
    let btnClass = "w-8 h-8 rounded-lg text-xs font-bold transition-all border ";
    if (isAnswered) {
      btnClass += "bg-emerald-600 text-white border-emerald-600";
    } else if (isFlagged) {
      btnClass += "bg-amber-400 text-amber-950 border-amber-500 ring-2 ring-amber-300";
    } else {
      btnClass += "bg-white text-slate-700 border-slate-300 hover:bg-slate-100";
    }
    return `
      <button 
        type="button" 
        onclick="scrollToExamQuestion('exam-q-${q.id}')"
        class="${btnClass}"
      >
        ${idx + 1}
      </button>
    `;
  }).join('');

  const questionsHTML = state.examQuestions.map((q, idx) => {
    return `
      <div id="exam-q-${q.id}">
        ${createQuestionHTML(q, idx, { isExam: true, isPractice: false })}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <!-- Mobile Floating Sticky Exam Bar -->
    <div class="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
      <div class="flex items-center gap-1.5">
        <span class="text-[11px] font-bold text-slate-500 uppercase">Còn:</span>
        <span id="mobileExamCountdown" class="text-lg font-black text-emerald-700 font-mono tracking-tight">
          ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}
        </span>
      </div>
      <div class="text-xs text-slate-600 font-medium">
        <b class="text-emerald-700">${answeredCount}</b>/${total}
      </div>
      <div class="flex items-center gap-1.5">
        <button onclick="toggleMobileMatrixModal()" class="px-2.5 py-1.5 bg-slate-100 active:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors">
          📋 Ma trận
        </button>
        <button onclick="submitExam(false)" class="px-3 py-1.5 bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow transition-all">
          Nộp bài
        </button>
      </div>
    </div>

    <!-- Mobile Matrix Drawer Modal -->
    <div id="mobileMatrixModal" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm hidden flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div class="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-5 max-h-[80vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <h4 class="font-bold text-slate-800 text-sm">Danh Sách Câu Hỏi (${answeredCount}/${total})</h4>
          <button onclick="toggleMobileMatrixModal()" class="w-7 h-7 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center text-sm">✕</button>
        </div>
        <div class="grid grid-cols-5 gap-2 overflow-y-auto p-1 max-h-72">
          ${matrixHTML}
        </div>
        <div class="pt-3 mt-3 border-t border-slate-100 flex gap-2">
          <button onclick="toggleMobileMatrixModal()" class="w-full py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl">Đóng</button>
          <button onclick="toggleMobileMatrixModal(); submitExam(false);" class="w-full py-2.5 bg-emerald-700 text-white font-bold text-xs rounded-xl">Nộp Bài</button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-16 lg:pb-0">
      <!-- Questions column (3 cols) -->
      <div class="lg:col-span-3 space-y-4 sm:space-y-5">
        ${questionsHTML}
        
        <div class="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 text-center">
          <p class="text-slate-600 text-sm mb-4">Bạn đã làm <b>${answeredCount} / ${total}</b> câu. Bạn có muốn nộp bài thi ngay?</p>
          <button onclick="submitExam(false)" class="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base rounded-xl shadow-md transition-all">
            📝 NỘP BÀI THI & XEM ĐIỂM
          </button>
        </div>
      </div>

      <!-- Sticky Exam Panel on Desktop (1 col) -->
      <div class="hidden lg:block lg:col-span-1">
        <div class="sticky top-16 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md space-y-4">
          <div class="text-center pb-4 border-b border-slate-100">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Thời gian còn lại</span>
            <div id="examCountdown" class="text-3xl font-black text-emerald-700 font-mono tracking-tight mt-1">
              ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}
            </div>
            <div class="text-xs text-slate-500 mt-1">
              Đã làm: <b class="text-emerald-700">${answeredCount}</b> / ${total} câu
            </div>
          </div>

          <div>
            <div class="text-xs font-bold text-slate-700 uppercase mb-2">Ma Trận Câu Hỏi</div>
            <div class="grid grid-cols-5 gap-1.5 max-h-60 overflow-y-auto p-1 border rounded-xl bg-slate-50">
              ${matrixHTML}
            </div>
          </div>

          <div class="pt-2 border-t border-slate-100 space-y-2">
            <button onclick="submitExam(false)" class="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all shadow">
              Nộp Bài
            </button>
            <button onclick="cancelExam()" class="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all">
              Hủy bài thi
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function toggleMobileMatrixModal() {
  const modal = document.getElementById('mobileMatrixModal');
  if (modal) {
    modal.classList.toggle('hidden');
  }
}

function selectExamAnswer(questionId, optIdx) {
  state.examAnswers[questionId] = optIdx;
  renderCurrentView();
}

function scrollToExamQuestion(elemId) {
  const modal = document.getElementById('mobileMatrixModal');
  if (modal && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
  const elem = document.getElementById(elemId);
  if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function cancelExam() {
  if (!confirm("Bạn có chắc chắn muốn hủy bài thi đang làm không?")) return;
  if (state.examTimerInterval) clearInterval(state.examTimerInterval);
  state.examActive = false;
  state.examQuestions = [];
  state.examAnswers = {};
  renderCurrentView();
}

function submitExam(isAuto = false) {
  if (!isAuto) {
    const unanswered = state.examQuestions.length - Object.keys(state.examAnswers).length;
    let msg = "Bạn có chắc chắn muốn nộp bài thi?";
    if (unanswered > 0) msg = `Bạn vẫn còn ${unanswered} câu chưa trả lời. Bạn có chắc muốn nộp bài ngay?`;
    if (!confirm(msg)) return;
  }

  if (state.examTimerInterval) clearInterval(state.examTimerInterval);
  state.examActive = false;

  let correctCount = 0;
  state.examQuestions.forEach(q => {
    const userAns = state.examAnswers[q.id];
    if (userAns === q.answer) {
      correctCount++;
      state.wrongQuestions.delete(q.id);
    } else if (userAns !== undefined) {
      state.wrongQuestions.add(q.id);
    }
  });

  const total = state.examQuestions.length;
  const score = ((correctCount / total) * 10).toFixed(1);

  state.examResult = {
    total,
    correctCount,
    wrongCount: total - correctCount,
    score,
    questions: state.examQuestions,
    answers: state.examAnswers,
    submittedAt: new Date().toLocaleTimeString('vi-VN')
  };

  saveLocalStorage();
  updateTopStats();
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderExamSummary(container) {
  const res = state.examResult;
  let gradeBadge = "Xuất Sắc 🎉";
  let gradeColor = "text-emerald-700 bg-emerald-50 border-emerald-300";
  if (res.score < 5) {
    gradeBadge = "Cần Cố Gắng Nhiều Hơn 💪";
    gradeColor = "text-rose-700 bg-rose-50 border-rose-300";
  } else if (res.score < 7) {
    gradeBadge = "Đạt Khá 👍";
    gradeColor = "text-amber-700 bg-amber-50 border-amber-300";
  } else if (res.score < 8.5) {
    gradeBadge = "Giỏi 🌟";
    gradeColor = "text-teal-700 bg-teal-50 border-teal-300";
  }

  const reviewQuestionsHTML = res.questions.map((q, idx) => {
    return createQuestionHTML(q, idx, { 
      isExam: true, 
      examFinished: true,
      forceShowExplanation: true 
    });
  }).join('');

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Result Banner Card -->
      <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-md text-center max-w-3xl mx-auto">
        <h2 class="text-2xl font-black text-slate-800">KẾT QUẢ BÀI THI</h2>
        <p class="text-xs text-slate-500 mt-1">Nộp bài lúc ${res.submittedAt}</p>

        <div class="my-6 flex items-center justify-center">
          <div class="w-32 h-32 rounded-full border-8 border-emerald-500 flex flex-col items-center justify-center shadow-inner">
            <span class="text-3xl font-black text-slate-800">${res.score}</span>
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-widest">Thang 10</span>
          </div>
        </div>

        <div class="inline-block px-4 py-1.5 rounded-full border font-bold text-sm mb-6 ${gradeColor}">
          Xếp loại: ${gradeBadge}
        </div>

        <div class="grid grid-cols-3 gap-3 max-w-md mx-auto text-center border-t border-b border-slate-100 py-4 mb-6">
          <div>
            <div class="text-xs text-slate-500 uppercase font-semibold">Số câu đúng</div>
            <div class="text-xl font-bold text-emerald-600">${res.correctCount} / ${res.total}</div>
          </div>
          <div>
            <div class="text-xs text-slate-500 uppercase font-semibold">Tỉ lệ đúng</div>
            <div class="text-xl font-bold text-teal-600">${Math.round((res.correctCount / res.total) * 100)}%</div>
          </div>
          <div>
            <div class="text-xs text-slate-500 uppercase font-semibold">Số câu sai</div>
            <div class="text-xl font-bold text-rose-600">${res.wrongCount}</div>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <button onclick="state.examResult = null; renderCurrentView();" class="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow transition-all">
            🔄 Thi Lại Đề Khác
          </button>
          <button onclick="switchTab('mistakes')" class="px-6 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-sm rounded-xl transition-all">
            ⚠️ Ôn Lại Câu Làm Sai (${state.wrongQuestions.size})
          </button>
        </div>
      </div>

      <!-- Detailed Review List -->
      <div class="max-w-4xl mx-auto space-y-4">
        <h3 class="text-lg font-bold text-slate-800 px-1 flex items-center justify-between">
          <span>Chi tiết từng câu hỏi & Lời giải:</span>
          <span class="text-xs text-slate-500">Màu xanh: Đáp án đúng | Màu đỏ gạch: Đáp án bạn chọn sai</span>
        </h3>
        <div class="space-y-4">
          ${reviewQuestionsHTML}
        </div>
      </div>
    </div>
  `;
}

// 3. MISTAKES TAB (ÔN LẠI CÂU SAI)
function renderMistakesTab(container) {
  const list = getFilteredQuestions('mistakes');
  
  if (list.length === 0) {
    container.innerHTML = `
      <div class="max-w-2xl mx-auto bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm">
        <div class="text-5xl mb-4">🎉</div>
        <h3 class="text-2xl font-bold text-slate-800">Tuyệt Vời! Không Có Câu Nào Bị Sai!</h3>
        <p class="text-slate-600 text-sm mt-2 max-w-md mx-auto">
          Bạn chưa làm sai câu nào hoặc đã sửa đúng hết các câu sai trong sổ tay luyện tập!
        </p>
        <button onclick="switchTab('practice')" class="mt-6 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow transition-all text-sm">
          Tiếp tục luyện tập các bài khác
        </button>
      </div>
    `;
    return;
  }

  const questionsHtml = list.map((q, idx) => createQuestionHTML(q, idx, { isPractice: true })).join('');

  container.innerHTML = `
    <div class="space-y-5">
      <div class="bg-rose-50 border border-rose-200 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-bold text-rose-900 flex items-center gap-2">
            <span>⚠️ Sổ Tay Ôn Lại Câu Sai</span>
            <span class="text-xs font-bold bg-rose-200 text-rose-800 px-2.5 py-0.5 rounded-full">${list.length} câu cần khắc phục</span>
          </h2>
          <p class="text-xs text-rose-700 mt-1">Khi bạn làm lại đúng một câu ở đây, câu đó sẽ tự động được xóa khỏi danh sách sai!</p>
        </div>
        <button onclick="clearMistakes()" class="px-4 py-2 bg-white text-rose-700 border border-rose-300 hover:bg-rose-100 rounded-xl text-xs font-bold transition-all">
          Xóa toàn bộ câu sai
        </button>
      </div>

      <div class="space-y-5">
        ${questionsHtml}
      </div>
    </div>
  `;
}

function clearMistakes() {
  if (!confirm("Bạn có muốn làm trống toàn bộ danh sách câu hỏi sai không?")) return;
  state.wrongQuestions.clear();
  saveLocalStorage();
  updateTopStats();
  renderCurrentView();
}

// 4. BOOKMARKS TAB (ĐÁNH DẤU)
function renderBookmarksTab(container) {
  const list = getFilteredQuestions('bookmarks');

  if (list.length === 0) {
    container.innerHTML = `
      <div class="max-w-2xl mx-auto bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm">
        <div class="text-5xl mb-4">⭐</div>
        <h3 class="text-2xl font-bold text-slate-800">Chưa Có Câu Hỏi Nào Được Đánh Dấu</h3>
        <p class="text-slate-600 text-sm mt-2 max-w-md mx-auto">
          Khi đang luyện tập, bấm vào nút <b>☆ Đánh dấu</b> ở góc phải câu hỏi để lưu lại các câu cần chú ý vào đây.
        </p>
        <button onclick="switchTab('practice')" class="mt-6 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow transition-all text-sm">
          Quay lại Luyện Tập
        </button>
      </div>
    `;
    return;
  }

  const questionsHtml = list.map((q, idx) => createQuestionHTML(q, idx, { isPractice: true })).join('');

  container.innerHTML = `
    <div class="space-y-5">
      <div class="bg-amber-50 border border-amber-200 p-5 rounded-2xl flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold text-amber-900 flex items-center gap-2">
            <span>⭐ Danh Sách Câu Hỏi Trọng Tâm Đã Lưu</span>
            <span class="text-xs font-bold bg-amber-200 text-amber-800 px-2.5 py-0.5 rounded-full">${list.length} câu</span>
          </h2>
          <p class="text-xs text-amber-700 mt-1">Các câu hỏi do bạn tự gắn dấu sao để ôn tập kỹ lưỡng.</p>
        </div>
      </div>

      <div class="space-y-5">
        ${questionsHtml}
      </div>
    </div>
  `;
}

// 5. THEORY TAB (TÓM TẮT LÝ THUYẾT ĐẦY ĐỦ CẢ 3 BÀI)
function renderTheoryTab(container) {
  const lessonCards = LESSONS_DATA.map(lesson => `
    <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
      <div class="flex items-center gap-3 pb-3 border-b border-slate-100 mb-4">
        <span class="px-3 py-1 bg-emerald-700 text-white font-black text-sm rounded-lg">${lesson.badge}</span>
        <h3 class="text-lg font-bold text-slate-800">${lesson.title}</h3>
      </div>
      <div class="prose prose-emerald max-w-none text-slate-700 leading-relaxed text-sm theory-content">
        ${lesson.summary}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="space-y-6">
      <div class="bg-gradient-to-r from-emerald-800 to-teal-800 text-white rounded-3xl p-6 md:p-8 shadow-md">
        <h2 class="text-2xl font-black mb-2 flex items-center gap-2">
          <span>📖 Sổ Tay Tóm Tắt Lý Thuyết Trọng Tâm</span>
        </h2>
        <p class="text-emerald-100 text-sm max-w-2xl leading-relaxed">
          Tổng hợp toàn bộ kiến thức cốt lõi về Khái niệm, Phân loại, Công thức hóa học, Quy trình sản xuất và Cách bảo quản phân bón vô cơ & hữu cơ theo Chương trình Hóa học mới.
        </p>
      </div>

      <!-- Quick Comparison Table (Ủ nóng vs Ủ nguội & Các loại supephotphat) -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm overflow-x-auto">
        <h4 class="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
          <span>⚡ Bảng So Sánh Quan Trọng Thường Gặp Trong Đề Thi</span>
        </h4>
        <table class="w-full text-left text-sm border-collapse border border-slate-200 rounded-lg">
          <thead>
            <tr class="bg-slate-50 text-slate-700">
              <th class="p-3 border border-slate-200">Tiêu chí</th>
              <th class="p-3 border border-slate-200 font-bold text-emerald-800">Phương pháp Ủ NÓNG</th>
              <th class="p-3 border border-slate-200 font-bold text-teal-800">Phương pháp Ủ NGUỘI</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-slate-600">
            <tr>
              <td class="p-3 font-semibold bg-slate-50/50">Nhiệt độ ủ</td>
              <td class="p-3">Khoảng <b>60°C</b> (hiếu khí, vi sinh vật tỏa nhiệt mạnh)</td>
              <td class="p-3">Khoảng <b>30 – 35°C</b> (yếm khí, nén chặt)</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50/50">Thời gian ủ</td>
              <td class="p-3">Nhanh hơn: <b>1 – 3 tháng</b></td>
              <td class="p-3">Lâu hơn: <b>5 – 6 tháng</b></td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50/50">Hàm lượng Đạm (N)</td>
              <td class="p-3 text-rose-600">Hàm lượng đạm thấp hơn (do nhiệt độ cao làm phân hủy thoát khí NH₃)</td>
              <td class="p-3 text-emerald-700 font-semibold">Hàm lượng đạm cao hơn, giữ nguyên chất lượng tốt hơn</td>
            </tr>
          </tbody>
        </table>

        <!-- Superphosphate comparison -->
        <table class="w-full text-left text-sm border-collapse border border-slate-200 rounded-lg mt-4">
          <thead>
            <tr class="bg-slate-50 text-slate-700">
              <th class="p-3 border border-slate-200">Loại Phân Lân</th>
              <th class="p-3 border border-slate-200">Thành phần chính</th>
              <th class="p-3 border border-slate-200">Quy trình & Lưu ý</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-slate-600">
            <tr>
              <td class="p-3 font-bold text-slate-800">Superphosphate ĐƠN</td>
              <td class="p-3">Ca(H₂PO₄)₂ và <b>CaSO₄</b></td>
              <td class="p-3">Sản xuất 1 giai đoạn: Quặng apatite + H₂SO₄ đặc. Lẫn CaSO₄ ít tan, bón nhiều làm chai cứng đất.</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-slate-800">Superphosphate KÉP</td>
              <td class="p-3 font-semibold text-emerald-700">Chỉ có Ca(H₂PO₄)₂</td>
              <td class="p-3">Sản xuất 2 giai đoạn: Loại bỏ CaSO₄. Hàm lượng P₂O₅ cao gấp đôi, không làm chai đất. Không bón cho đất chua.</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-slate-800">Phân lân nung chảy</td>
              <td class="p-3">Hỗn hợp phosphate, silicat Ca & Mg</td>
              <td class="p-3">Nung trên 1000°C: quặng apatite + đá xà vân + than cốc. Thích hợp cho đất chua, núi bạc màu.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="space-y-6">
        ${lessonCards}
      </div>
    </div>
  `;
}

// Switch active top tab
function switchTab(tabName) {
  state.activeTab = tabName;
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.className = "nav-tab-btn px-4 py-2.5 rounded-xl font-bold text-sm bg-emerald-700 text-white shadow-sm transition-all flex items-center gap-2";
    } else {
      btn.className = "nav-tab-btn px-4 py-2.5 rounded-xl font-semibold text-sm text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all flex items-center gap-2";
    }
  });
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Student Header Details Save
function setupStudentHeader() {
  const nameInput = document.getElementById('studentName');
  const classInput = document.getElementById('studentClass');
  const schoolInput = document.getElementById('studentSchool');

  if (nameInput) {
    nameInput.value = state.studentInfo.name || '';
    nameInput.addEventListener('input', (e) => {
      state.studentInfo.name = e.target.value;
      saveLocalStorage();
    });
  }
  if (classInput) {
    classInput.value = state.studentInfo.class || '';
    classInput.addEventListener('input', (e) => {
      state.studentInfo.class = e.target.value;
      saveLocalStorage();
    });
  }
  if (schoolInput) {
    schoolInput.value = state.studentInfo.school || '';
    schoolInput.addEventListener('input', (e) => {
      state.studentInfo.school = e.target.value;
      saveLocalStorage();
    });
  }
}

// Toggle Sound
function toggleSound() {
  sfx.enabled = !sfx.enabled;
  const btn = document.getElementById('btnSoundToggle');
  if (btn) {
    btn.innerHTML = sfx.enabled 
      ? '🔊 Âm thanh: Bật' 
      : '🔇 Âm thanh: Tắt';
  }
}

// Print Questions / Test generator
function printTestSheet() {
  window.print();
}

// Initialization on load
document.addEventListener('DOMContentLoaded', () => {
  loadLocalStorage();
  setupStudentHeader();
  updateTopStats();
  renderCurrentView();
});
