// DỮ LIỆU ĐẦY ĐỦ 79 CÂU HỎI VÀ LÝ THUYẾT - CHUYÊN ĐỀ 1: PHÂN BÓN
const LESSONS_DATA = [
  {
    id: 1,
    title: "Bài 1: Giới thiệu chung về phân bón",
    badge: "Bài 1",
    totalQuestions: 23,
    summary: `
      <h4>I. Khái niệm và phân loại</h4>
      <p><b>1. Khái niệm:</b> Phân bón là sản phẩm có chức năng cung cấp nguyên tố dinh dưỡng hoặc có tác dụng cải tạo đất để tăng năng suất và chất lượng cho cây trồng.</p>
      <ul>
        <li><b>Đa lượng:</b> N, P, K</li>
        <li><b>Trung lượng:</b> Ca, Mg, S, Si</li>
        <li><b>Vi lượng:</b> B, Cu, Fe, Mo, Co, Mn, Zn, Cl, Na,... (viết tắt là TE)</li>
      </ul>
      <p><b>2. Phân loại:</b> Phân bón vô cơ và Phân bón hữu cơ.</p>
      <p><b>3. Nhu cầu phân bón:</b> Phải bón đúng loại phân, đúng liều lượng, đúng lúc và đúng cách (4 đúng).</p>
      <h4>II. Độ dinh dưỡng của phân bón</h4>
      <ul>
        <li><b>Phân đạm:</b> Cung cấp N (dạng NH₄⁺, NO₃⁻). Độ dinh dưỡng = % khối lượng N.</li>
        <li><b>Phân lân:</b> Cung cấp P (dạng PO₄³⁻). Độ dinh dưỡng = % khối lượng P₂O₅.</li>
        <li><b>Phân kali:</b> Cung cấp K (dạng K⁺). Độ dinh dưỡng = % khối lượng K₂O.</li>
        <li><b>Phân NPK:</b> Cung cấp N, P, K. Tỉ lệ ghi trên bao bì biểu thị: %N - %P₂O₅ - %K₂O.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "Bài 2: Phân bón vô cơ",
    badge: "Bài 2",
    totalQuestions: 36,
    summary: `
      <h4>I. Phân loại phân bón vô cơ</h4>
      <ul>
        <li><b>Phân đơn dinh dưỡng:</b> Phân đạm (N), Phân lân (P), Phân kali (K).</li>
        <li><b>Phân đa dinh dưỡng:</b>
          <ul>
            <li><i>Phân hỗn hợp (NPK,...):</i> Tạo thành bằng cách phối trộn cơ học các loại phân khác nhau.</li>
            <li><i>Phân phức hợp (Ammophos,...):</i> Tạo thành bằng các phản ứng hóa học.</li>
          </ul>
        </li>
      </ul>
      <h4>II. Vai trò các nguyên tố</h4>
      <ul>
        <li><b>Nitrogen (N):</b> Thành phần protein, diệp lục; kích thích sinh trưởng thân, cành, lá, tăng củ quả hạt.</li>
        <li><b>Phosphorus (P):</b> Cấu tạo ATP; tăng cường phát triển bộ rễ, kích thích đẻ nhánh nảy chồi, chống chịu hạn.</li>
        <li><b>Potassium (K):</b> Chuyển hóa đường, bột, xơ; tăng khả năng chịu rét, chống chịu sâu bệnh và hạn hán.</li>
      </ul>
      <h4>III. Quy trình sản xuất & Sử dụng</h4>
      <ul>
        <li><b>Bón lót:</b> Bón trước khi gieo trồng nhằm cải tạo đất và nuôi cây con.</li>
        <li><b>Bón thúc:</b> Bón trong thời kì cây đang sinh trưởng mạnh.</li>
        <li><b>Đạm SA:</b> 2NH₃ + H₂SO₄ → (NH₄)₂SO₄. Không bón cho đất chua.</li>
        <li><b>Đạm Nitrate:</b> NH₃ + HNO₃ → NH₄NO₃.</li>
        <li><b>Đạm Urea:</b> 2NH₃ + CO₂ → (NH₂)₂CO + H₂O (46% N).</li>
        <li><b>Supephotphat đơn (1 giai đoạn):</b> Ca₃(PO₄)₂ + 2H₂SO₄ → Ca(H₂PO₄)₂ + 2CaSO₄ (chứa CaSO₄ làm chai cứng đất).</li>
        <li><b>Supephotphat kép (2 giai đoạn):</b> Ca₃(PO₄)₂ + 3H₂SO₄ → 3CaSO₄ + 2H₃PO₄; sau đó Ca₃(PO₄)₂ + 4H₃PO₄ → 3Ca(H₂PO₄)₂.</li>
        <li><b>Phân lân nung chảy:</b> 4Ca₅(PO₄)₃F + 3SiO₂ → 6Ca₃(PO₄)₂ + 2CaSiO₂ + SiF₄ (thích hợp đất chua, bạc màu).</li>
        <li><b>Phân Ammophos:</b> Gồm MAP (NH₄H₂PO₄) và DAP ((NH₄)₂HPO₄).</li>
        <li><i>Lưu ý:</i> Không bón đạm chung với vôi vì sinh ra khí NH₃ bay mất, làm mất tác dụng đạm.</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Bài 3: Phân bón hữu cơ",
    badge: "Bài 3",
    totalQuestions: 20,
    summary: `
      <h4>I. Phân loại phân bón hữu cơ</h4>
      <ul>
        <li><b>Phân hữu cơ truyền thống:</b> Phân chuồng (chất thải gia súc/gia cầm), phân xanh (cành, lá tươi), phân rác (rơm, rạ, vỏ lạc, bã mía).</li>
        <li><b>Phân hữu cơ sinh học:</b> Rác hữu cơ, than bùn, mùn cưa chế biến bằng vi sinh vật.</li>
        <li><b>Phân hữu cơ khoáng:</b> Chứa ≥ 15% chất hữu cơ và 8% - 18% chất vô cơ (N, P, K).</li>
      </ul>
      <h4>II. Phương pháp ủ phân truyền thống</h4>
      <ul>
        <li><b>Ủ nóng:</b> Nhiệt độ 60°C, thời gian 1 - 3 tháng. Hàm lượng đạm thấp do bay hơi NH₃.</li>
        <li><b>Ủ nguội:</b> Nhiệt độ 30 - 35°C, nén chặt, thời gian 5 - 6 tháng. Giữ được lượng đạm cao hơn, chất lượng tốt hơn.</li>
      </ul>
      <h4>III. Ưu nhược điểm</h4>
      <ul>
        <li><b>Ưu điểm chung:</b> Cải tạo đất, tăng độ mùn, làm đất tơi xốp, giữ ẩm, chống xói mòn.</li>
        <li><b>Nhược điểm:</b> Phân giải chậm, hàm lượng dinh dưỡng thấp, cồng kềnh, phân tươi tiềm ẩn mầm bệnh và hạt cỏ dại.</li>
      </ul>
    `
  }
];

const QUESTIONS_DATA = [
  // ==================== BÀI 1 (23 CÂU) ====================
  {
    id: 1,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Phân bón là sản phẩm có chức năng cung cấp (1)………….hoặc có tác dụng (2)……….để tăng năng suất và chất lượng cây trồng. Cụm từ thích hợp điền vào chỗ trống (1), (2) lần lượt là",
    options: [
      "A. nguyên tố dinh dưỡng, cải tạo đất.",
      "B. nguyên tố vi lượng, cải tạo đất.",
      "C. dinh dưỡng, phát triển đất.",
      "D. nguyên tố đa lượng, thêm chất cho đất."
    ],
    answer: 0,
    explanation: "Theo định nghĩa SGK: Phân bón là sản phẩm có chức năng cung cấp nguyên tố dinh dưỡng hoặc có tác dụng cải tạo đất để tăng năng suất và chất lượng cho cây trồng."
  },
  {
    id: 2,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Nhóm nguyên tố đa lượng gồm các nguyên tố nào?",
    options: [
      "A. N, P, K.",
      "B. Ca, Mg, S, Si.",
      "C. B, Cu, Fe, Cl, Mn, Ni, Zn....",
      "D. N, Ca, B, Cu."
    ],
    answer: 0,
    explanation: "Nhóm nguyên tố đa lượng thiết yếu gồm Nitrogen (N), Phosphorus (P), Potassium (K)."
  },
  {
    id: 3,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Nhóm nguyên tố trung lượng gồm các nguyên tố nào?",
    options: [
      "A. Ca, Ba, S.",
      "B. Ca, Mg, S, Si.",
      "C. B, Cu, Fe, Cl, Mn, Ni, Zn....",
      "D. N, P, K."
    ],
    answer: 1,
    explanation: "Nhóm nguyên tố dinh dưỡng trung lượng gồm có: Calcium (Ca), Magnesium (Mg), Sulfur (S), Silicon (Si)."
  },
  {
    id: 4,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Nhóm nguyên tố vi lượng gồm các nguyên tố nào?",
    options: [
      "A. N, P, K.",
      "B. Ca, Mg, S.",
      "C. B, Cu, Fe, Mo, Mn, Zn....",
      "D. N, Ca, B, Cu."
    ],
    answer: 2,
    explanation: "Nhóm nguyên tố vi lượng (TE - Trace Elements) cây cần với lượng rất nhỏ gồm: B, Cu, Fe, Mo, Co, Mn, Zn, Cl, Na,..."
  },
  {
    id: 5,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Phân bón được phân loại thành",
    options: [
      "A. phân bón vô cơ và phân bón hữu cơ.",
      "B. phân đạm, phân lân, phân kali.",
      "C. phân chuồng, phân xanh, phân rác.",
      "D. phân vi sinh và phân khoáng."
    ],
    answer: 0,
    explanation: "Phân bón được chia thành hai nhóm lớn là phân bón vô cơ và phân bón hữu cơ."
  },
  {
    id: 6,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Phân đạm cung cấp cho cây trồng nguyên tố nào sau đây?",
    options: [
      "A. Nitrogen.",
      "B. Phosphorus.",
      "C. Potassium.",
      "D. Copper."
    ],
    answer: 0,
    explanation: "Phân đạm cung cấp nguyên tố dinh dưỡng Nitrogen (N) cho cây trồng dưới dạng NH₄⁺ hoặc NO₃⁻."
  },
  {
    id: 7,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Phân lân cung cấp cho cây trồng nguyên tố nào sau đây?",
    options: [
      "A. Potassium.",
      "B. Phosphorus.",
      "C. Nitrogen.",
      "D. Iron."
    ],
    answer: 1,
    explanation: "Phân lân cung cấp nguyên tố Phosphorus (P) cho cây trồng dưới dạng ion phosphate (PO₄³⁻, H₂PO₄⁻,...)."
  },
  {
    id: 8,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Phân kali cung cấp cho cây trồng nguyên tố nào sau đây?",
    options: [
      "A. Phosphorus.",
      "B. Nitrogen.",
      "C. Potassium.",
      "D. Silver."
    ],
    answer: 2,
    explanation: "Phân kali cung cấp nguyên tố dinh dưỡng Potassium (K) cho cây trồng dưới dạng ion K⁺."
  },
  {
    id: 9,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Phân đạm cung cấp cho cây trồng nguyên tố nitrogen dưới dạng ion",
    options: [
      "A. NH₄⁺ và SO₄²⁻.",
      "B. NO₃⁻ và K⁺.",
      "C. NH₄⁺ và NO₃⁻.",
      "D. NO₃⁻ và NO₂⁻."
    ],
    answer: 2,
    explanation: "Cây trồng hấp thụ nitrogen chủ yếu dưới 2 dạng ion là ammonium (NH₄⁺) và nitrate (NO₃⁻)."
  },
  {
    id: 10,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Độ dinh dưỡng của phân đạm được tính bằng phần trăm khối lượng của",
    options: [
      "A. N",
      "B. N₂O",
      "C. NO₃⁻",
      "D. NH₄⁺"
    ],
    answer: 0,
    explanation: "Độ dinh dưỡng của phân đạm được đánh giá bằng % khối lượng nguyên tố Nitrogen (N)."
  },
  {
    id: 11,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Độ dinh dưỡng của phân kali được tính bằng phần trăm khối lượng của",
    options: [
      "A. K₂O",
      "B. K",
      "C. KCl",
      "D. KOH"
    ],
    answer: 0,
    explanation: "Độ dinh dưỡng của phân kali được quy đổi và đánh giá bằng % khối lượng K₂O tương ứng."
  },
  {
    id: 12,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Độ dinh dưỡng của phân lân được tính bằng phần trăm khối lượng của",
    options: [
      "A. P",
      "B. P₂O₃",
      "C. H₃PO₄",
      "D. P₂O₅"
    ],
    answer: 3,
    explanation: "Độ dinh dưỡng của phân lân được quy đổi và đánh giá bằng % khối lượng phosphorus pentoxide (P₂O₅)."
  },
  {
    id: 13,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Công thức hóa học của phân đạm ammonium nitrate là",
    options: [
      "A. HNO₃",
      "B. NH₄Cl",
      "C. H₃PO₄",
      "D. NH₄NO₃"
    ],
    answer: 3,
    explanation: "Ammonium nitrate tạo từ ion NH₄⁺ và NO₃⁻ có công thức hóa học là NH₄NO₃."
  },
  {
    id: 14,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Công thức hóa học của phân đạm ammonium sulfate là",
    options: [
      "A. (NH₄)₂SO₄.",
      "B. NH₄Cl",
      "C. CaSO₄",
      "D. NH₄NO₃"
    ],
    answer: 0,
    explanation: "Ammonium sulfate (còn gọi là phân SA) có công thức là (NH₄)₂SO₄."
  },
  {
    id: 15,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Công thức hóa học của phân lân calcium dihydrogenphosphate là",
    options: [
      "A. Ca(H₂PO₄)₂.",
      "B. Mg₃(PO₄)₂.",
      "C. CaSO₄.",
      "D. CaHPO₄."
    ],
    answer: 0,
    explanation: "Gốc dihydrogenphosphate là H₂PO₄⁻ (hóa trị I), Ca hóa trị II => Ca(H₂PO₄)₂."
  },
  {
    id: 16,
    lessonId: 1,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Tro thực vật được sử dụng như một loại phân bón cung cấp nguyên tố kali cho cây chứa muối potassium carbonate. Công thức hóa học của potassium carbonate là",
    options: [
      "A. KCl",
      "B. KOH",
      "C. NaCl",
      "D. K₂CO₃"
    ],
    answer: 3,
    explanation: "Potassium carbonate có công thức là K₂CO₃."
  },
  {
    id: 17,
    lessonId: 1,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Chất không sử dụng làm phân bón hóa học là",
    options: [
      "A. NaNO₃.",
      "B. NH₄H₂PO₄.",
      "C. KNO₃.",
      "D. BaSO₄."
    ],
    answer: 3,
    explanation: "BaSO₄ là chất kết tủa cực kì khó tan, không phân li ra ion dinh dưỡng cho cây hấp thụ, đồng thời hợp chất Ba độc hại nên không dùng làm phân bón."
  },
  {
    id: 18,
    lessonId: 1,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phát biểu nào sai khi nói về vai trò của phân bón?",
    options: [
      "A. Cung cấp nguyên tố dinh dưỡng cho cây trồng.",
      "B. Góp phần cải tạo đất để nâng cao năng suất cây trồng.",
      "C. Tăng chất lượng cho cây trồng.",
      "D. Gây thoái hóa đất."
    ],
    answer: 3,
    explanation: "Vai trò của phân bón là cung cấp dinh dưỡng, nâng cao năng suất và chất lượng, cải tạo đất. Gây thoái hóa đất chỉ là tác hại khi con người bón sai quy cách, lạm dụng phân bón, không phải là vai trò của phân bón."
  },
  {
    id: 19,
    lessonId: 1,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phát biểu nào sau đây là đúng?",
    options: [
      "A. Phân lân cung cấp nitrogen hoá hợp cho cây dưới dạng ion nitrate (NO₃⁻) và ion ammonium (NH₄⁺).",
      "B. Phân bón hữu cơ là loại phân bón không phổ biến ở Việt Nam.",
      "C. Phân hỗn hợp chứa nitrogen, phosphorus, potassium được gọi chung là phân NPK.",
      "D. Phân urea có công thức là (NH₄)₂CO₃."
    ],
    answer: 2,
    explanation: "A sai vì phân đạm mới cung cấp N. B sai vì phân hữu cơ rất phổ biến ở VN. D sai vì urea là (NH₂)₂CO. C đúng: phân hỗn hợp chứa N, P, K được gọi là phân NPK."
  },
  {
    id: 20,
    lessonId: 1,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Để phân biệt phân đạm ammonium chloride và calcium nitrate có thể dùng thuốc thử nào sau đây?",
    options: [
      "A. NaOH.",
      "B. H₂SO₄.",
      "C. CaCl₂.",
      "D. HCl."
    ],
    answer: 0,
    explanation: "Dùng dd NaOH: Phân đạm NH₄Cl sinh ra khí ammonia có mùi khai bay ra (NH₄⁺ + OH⁻ → NH₃↑ + H₂O); còn Ca(NO₃)₂ không có hiện tượng gì đặc trưng."
  },
  {
    id: 21,
    lessonId: 1,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Một loại phân NPK có độ dinh dưỡng được ghi trên bao bì là 20-20-15. Các con số 20-20-15 có ý nghĩa là",
    options: [
      "A. % N = 20%, % P₂O₅ = 20%, % K₂O = 15%.",
      "B. % N = 20%, % P = 20%, % K = 15%.",
      "C. mN = 20g, mP = 20g, mK = 15g.",
      "D. mN = 20g, mP₂O₅ = 20g, mK₂O = 15g."
    ],
    answer: 0,
    explanation: "Quy ước tỉ lệ dinh dưỡng trên bao bì NPK x-y-z tương ứng là: % khối lượng N - % khối lượng P₂O₅ - % khối lượng K₂O. Vậy 20-20-15 nghĩa là 20% N, 20% P₂O₅, 15% K₂O."
  },
  {
    id: 22,
    lessonId: 1,
    level: "van_dung",
    levelName: "Vận dụng",
    question: "Trong các loại phân bón sau: NH₄Cl, (NH₂)₂CO, (NH₄)₂SO₄, NH₄NO₃, loại có hàm lượng đạm cao nhất là",
    options: [
      "A. NH₄Cl",
      "B. NH₄NO₃",
      "C. (NH₂)₂CO",
      "D. (NH₄)₂SO₄"
    ],
    answer: 2,
    explanation: "Tính % khối lượng N trong từng chất:\n- NH₄Cl: (14 / 53.5) × 100% ≈ 26.17%\n- (NH₂)₂CO: (28 / 60) × 100% ≈ 46.67% (Cao nhất!)\n- (NH₄)₂SO₄: (28 / 132) × 100% ≈ 21.21%\n- NH₄NO₃: (28 / 80) × 100% = 35.00%\n=> Urea (NH₂)₂CO có hàm lượng đạm cao nhất (xấp xỉ 46%)."
  },
  {
    id: 23,
    lessonId: 1,
    level: "van_dung",
    levelName: "Vận dụng",
    question: "[CD - CĐHT] Cho các phát biểu:\n(a) Phân bón có vai trò cung cấp các nguyên tố dinh dưỡng cho cây trồng và góp phần cải tạo đất.\n(b) Việc lựa chọn phân bón cần dựa vào nhu cầu dinh dưỡng của mỗi loại cây trồng, ở các giai đoạn sinh trưởng khác nhau và đặc điểm của mỗi loại đất.\n(c) Phân bón hữu cơ là phân bón chứa các hợp chất hữu cơ mà con người tổng hợp được.\n(d) Hiện nay, ở Việt Nam, lượng phân bón vô cơ được sử dụng nhiều hơn lượng phân bón hữu cơ.\nSố phát biểu đúng là",
    options: [
      "A. 1.",
      "B. 2.",
      "C. 3.",
      "D. 4."
    ],
    answer: 2,
    explanation: "Có 3 phát biểu đúng là (a), (b), (d).\n(c) sai vì phân bón hữu cơ có nguồn gốc từ các chất hữu cơ tự nhiên như chất thải người, động vật, thực vật, than bùn, rác hữu cơ... chứ không phải là con người tổng hợp nhân tạo."
  },

  // ==================== BÀI 2 (36 CÂU) ====================
  {
    id: 24,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "[KNTT - CĐHT] Nguyên tố nào không phải là nguyên tố dinh dưỡng thiết yếu cho cây trồng?",
    options: [
      "A. Nitrogen.",
      "B. Platinium.",
      "C. Phosphorus.",
      "D. Potassium."
    ],
    answer: 1,
    explanation: "Platinium (Bạch kim - Pt) là kim loại quý trơ, không phải là nguyên tố dinh dưỡng cho cây trồng."
  },
  {
    id: 25,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "[CTST - CĐHT] Các loại phân lân đều cung cấp cho cây trồng nguyên tố dinh dưỡng nào?",
    options: [
      "A. Potassium.",
      "B. Phosphorus.",
      "C. Carbon.",
      "D. Nitrogen."
    ],
    answer: 1,
    explanation: "Phân lân cung cấp cho cây trồng nguyên tố dinh dưỡng phosphorus (P)."
  },
  {
    id: 26,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Phân bón nào sau đây cung cấp nguyên tố nitrogen và phosphorus cho cây trồng?",
    options: [
      "A. Potassium chloride.",
      "B. Calcium dihydrogen phosphate.",
      "C. Ammonium sulfate.",
      "D. Ammonium dihydrogen phosphate."
    ],
    answer: 3,
    explanation: "Ammonium dihydrogen phosphate (NH₄H₂PO₄) chứa cả nguyên tố N (trong ion NH₄⁺) và nguyên tố P (trong ion H₂PO₄⁻)."
  },
  {
    id: 27,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Trong các loại phân bón hoá học sau loại nào là phân đạm?",
    options: [
      "A. KCl.",
      "B. Ca₃(PO₄)₂.",
      "C. K₂SO₄.",
      "D. (NH₂)₂CO."
    ],
    answer: 3,
    explanation: "(NH₂)₂CO (urea) là phân đạm vì cung cấp nguyên tố nitrogen."
  },
  {
    id: 28,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Trong các loại phân bón hoá học sau loại nào là phân đạm?",
    options: [
      "A. KCl.",
      "B. (NH₄)₂SO₄.",
      "C. K₂SO₄.",
      "D. (NH₄)₂HPO₄."
    ],
    answer: 1,
    explanation: "(NH₄)₂SO₄ là phân đạm đơn (phân SA), chỉ cung cấp đa lượng N. Còn (NH₄)₂HPO₄ là phân phức hợp (cung cấp cả N và P)."
  },
  {
    id: 29,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Trong các loại phân bón hoá học sau loại nào là phân lân?",
    options: [
      "A. Ca(H₂PO₄)₂.",
      "B. NH₄NO₃",
      "C. K₂SO₄.",
      "D. (NH₄)₂HPO₄."
    ],
    answer: 0,
    explanation: "Ca(H₂PO₄)₂ cung cấp nguyên tố dinh dưỡng lân (P) và là thành phần của phân supephotphat."
  },
  {
    id: 30,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Trong các loại phân bón hoá học sau loại nào là phân kali?",
    options: [
      "A. CaCl₂",
      "B. (NH₄)₂SO₄.",
      "C. K₂SO₄.",
      "D. Ca(H₂PO₄)₂."
    ],
    answer: 2,
    explanation: "K₂SO₄ cung cấp nguyên tố kali (K) cho cây trồng."
  },
  {
    id: 31,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Trong các loại phân bón hoá học sau loại nào là phân phức hợp?",
    options: [
      "A. KCl.",
      "B. (NH₄)₂SO₄.",
      "C. K₂SO₄.",
      "D. (NH₄)₂HPO₄."
    ],
    answer: 3,
    explanation: "(NH₄)₂HPO₄ (DAP) được sản xuất bằng phản ứng hóa học giữa NH₃ và H₃PO₄ nên là phân bón phức hợp."
  },
  {
    id: 32,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Phân bón nào sau đây là phân bón hỗn hợp?",
    options: [
      "A. (NH₄)₂HPO₄ và NH₄H₂PO₄.",
      "B. (NH₄)₂HPO₄ và KNO₃.",
      "C. Ca(H₂PO₄)₂ và CaSO₄.",
      "D. KCl và K₂CO₃."
    ],
    answer: 1,
    explanation: "Hỗn hợp phối trộn cơ học giữa (NH₄)₂HPO₄ và KNO₃ (phân nitrophoska) là phân bón hỗn hợp chứa đầy đủ N, P, K."
  },
  {
    id: 33,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Thành phần chính của phân đạm urea là",
    options: [
      "A. NH₄Cl",
      "B. NH₄NO₃",
      "C. KNO₃.",
      "D. (NH₂)₂CO."
    ],
    answer: 3,
    explanation: "Thành phần chính của urea là carbamide: (NH₂)₂CO."
  },
  {
    id: 34,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Thành phần chính của superphosphate kép là",
    options: [
      "A. Ca(H₂PO₄)₂ và CaSO₄.",
      "B. CaHPO₄.",
      "C. Ca₃(PO₄)₂.",
      "D. Ca(H₂PO₄)₂."
    ],
    answer: 3,
    explanation: "Superphosphate kép được sản xuất qua 2 giai đoạn, loại bỏ thạch cao CaSO₄, nên thành phần chính chỉ chứa Ca(H₂PO₄)₂."
  },
  {
    id: 35,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Thành phần chính của phân bón phức hợp ammophos là",
    options: [
      "A. NH₄H₂PO₄ và (NH₄)₂HPO₄.",
      "B. NH₄NO₃ và Ca(H₂PO₄)₂.",
      "C. Ca₃(PO₄)₂ và (NH₄)₂HPO₄.",
      "D. NH₄H₂PO₄ và Ca(H₂PO₄)₂."
    ],
    answer: 0,
    explanation: "Ammophos là hỗn hợp của monoammonium phosphate (MAP: NH₄H₂PO₄) và diammonium phosphate (DAP: (NH₄)₂HPO₄)."
  },
  {
    id: 36,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Tro thực vật là loại phân kali nào sau đây?",
    options: [
      "A. K₂CO₃.",
      "B. KCl.",
      "C. KNO₃.",
      "D. K₂SO₄."
    ],
    answer: 0,
    explanation: "Tro bếp/tro thực vật sau khi đốt chứa lượng lớn muối K₂CO₃, dùng để bón cung cấp kali và khử bớt chua cho đất."
  },
  {
    id: 37,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "[KNTT – CĐHT] Quy trình Haber-Bosch được sử dụng để sản xuất",
    options: [
      "A. nitric acid.",
      "B. ammonia.",
      "C. ammonium nitrate.",
      "D. urea."
    ],
    answer: 1,
    explanation: "Quy trình Haber-Bosch tổng hợp khí ammonia (NH₃) trực tiếp từ N₂ và H₂ ở nhiệt độ, áp suất cao và có xúc tác sắt."
  },
  {
    id: 38,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "[KNTT – CĐHT] Nguyên liệu nitrogen được sử dụng trong các nhà máy sản xuất phân bón được lấy từ",
    options: [
      "A. không khí.",
      "B. oxide của nitrogen.",
      "C. khí lò cốc.",
      "D. ammonia."
    ],
    answer: 0,
    explanation: "Khí nitrogen (N₂) trong công nghiệp được chưng cất phân đoạn từ không khí lỏng (nguồn vô tận, chiếm ~78% thể tích không khí)."
  },
  {
    id: 39,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Khi cho CO₂ tác dụng với NH₃ ở nhiệt độ và áp suất thích hợp thu được loại đạm nào sau đây?",
    options: [
      "A. Ammonium sulfate.",
      "B. Calcium ammonium nitrate.",
      "C. Ammonium nitrate.",
      "D. Đạm urea."
    ],
    answer: 3,
    explanation: "Phương trình sản xuất urea: 2NH₃ + CO₂ (to, P) → (NH₂)₂CO + H₂O."
  },
  {
    id: 40,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Vai trò nào sau đây là của nguyên tố dinh dưỡng nitrogen đối với cây trồng?",
    options: [
      "A. Kích thích sinh trưởng, tăng hàm lượng protein cho thực vật, giúp cây phát triển nhanh, cho nhiều củ, quả, hạt.",
      "B. Tăng cường sự phát triển đầy đủ của rễ, tăng khả năng chịu hạn, kích thích sự đẻ nhánh, nảy chồi, hình thành mầm hoa, phát triển quả non.",
      "C. Thúc đẩy quá trình tạo chất đường, chất bột, chất xơ, chất dầu, tăng khả năng chịu rét, chống sâu bệnh và chịu hạn của cây…",
      "D. Giúp cây trồng phát triển khỏe mạnh, chống sâu bệnh hại và đạt năng suất cao."
    ],
    answer: 0,
    explanation: "Nitrogen kích thích sinh trưởng, cấu tạo nên protein, diệp lục, giúp cây phát triển nhanh, sum sê, cho nhiều củ quả hạt."
  },
  {
    id: 41,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Vai trò nào sau đây là của nguyên tố dinh dưỡng phosphorus đối với cây trồng?",
    options: [
      "A. Kích thích sinh trưởng, tăng hàm lượng protein cho thực vật, giúp cây phát triển nhanh, cho nhiều củ, quả, hạt.",
      "B. Tăng cường sự phát triển đầy đủ của rễ, tăng khả năng chịu hạn, kích thích sự đẻ nhánh, nảy chồi, hình thành mầm hoa, phát triển quả non.",
      "C. Thúc đẩy quá trình tạo chất đường, chất bột, chất xơ, chất dầu, tăng khả năng chịu rét, chống sâu bệnh và chịu hạn của cây…",
      "D. Giúp cây trồng phát triển khỏe mạnh, chống sâu bệnh hại và đạt năng suất cao."
    ],
    answer: 1,
    explanation: "Phosphorus giúp phát triển hệ rễ khỏe mạnh, kích thích đẻ nhánh nảy chồi, tạo ATP chuyển hóa năng lượng, chịu hạn."
  },
  {
    id: 42,
    lessonId: 2,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Vai trò nào sau đây là của nguyên tố dinh dưỡng potassium đối với cây trồng?",
    options: [
      "A. Kích thích sinh trưởng, tăng hàm lượng protein cho thực vật, giúp cây phát triển nhanh, cho nhiều củ, quả, hạt.",
      "B. Tăng cường sự phát triển đầy đủ của rễ, tăng khả năng chịu hạn, kích thích sự đẻ nhánh, nảy chồi, hình thành mầm hoa, phát triển quả non.",
      "C. Thúc đẩy quá trình tạo chất đường, chất bột, chất xơ, chất dầu, tăng khả năng chịu rét, chống sâu bệnh và chịu hạn của cây…",
      "D. Giúp cây trồng phát triển khỏe mạnh, chống sâu bệnh hại và đạt năng suất cao."
    ],
    answer: 2,
    explanation: "Potassium kích thích tạo đường bột xơ, điều hòa nước, tăng khả năng chống rét, chống chịu sâu bệnh và hạn hán."
  },
  {
    id: 43,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "[CTST - CĐHT] Trong dân gian lưu truyền kinh nghiệm “mưa rào mà có sấm sét là có thêm đạm trời rất tốt cho cây trồng”. \"Đạm trời\" chứa thành phần nguyên tố dinh dưỡng nào?",
    options: [
      "A. Phosphorus.",
      "B. Silicon.",
      "C. Potassium.",
      "D. Nitrogen."
    ],
    answer: 3,
    explanation: "Khi có sấm sét (nhiệt độ > 3000°C), N₂ + O₂ → 2NO, sau đó biến đổi thành HNO₃ theo nước mưa ngấm vào đất tạo ion NO₃⁻ cung cấp đạm (Nitrogen) tự nhiên cho cây."
  },
  {
    id: 44,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phân bón nào sau đây không thích hợp cho đất chua?",
    options: [
      "A. KCl.",
      "B. (NH₂)₂CO.",
      "C. Ca(H₂PO₄)₂.",
      "D. (NH₄)₂SO₄."
    ],
    answer: 3,
    explanation: "(NH₄)₂SO₄ khi hòa tan trong nước bị thủy phân tạo môi trường acid (NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺), làm tăng độ chua của đất nên không được bón cho đất chua."
  },
  {
    id: 45,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phân bón nào sau đây làm tăng độ chua của đất?",
    options: [
      "A. KCl.",
      "B. NaNO₃.",
      "C. K₂SO₄.",
      "D. NH₄Cl"
    ],
    answer: 3,
    explanation: "NH₄Cl chứa cation acid NH₄⁺, thủy phân tạo ion H⁺ làm tăng nồng độ axit, tăng độ chua của đất."
  },
  {
    id: 46,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Chất nào sau đây được dùng để khử chua đất trong nông nghiệp?",
    options: [
      "A. Vôi sống.",
      "B. Muối ăn.",
      "C. Đá vôi.",
      "D. Thạch cao."
    ],
    answer: 0,
    explanation: "Vôi sống (CaO) hoặc vôi tôi (Ca(OH)₂) có tính bazo mạnh, tác dụng trung hòa các ion acid H⁺ trong đất để khử chua nhanh chóng."
  },
  {
    id: 47,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phân đạm urea không được trộn với chất nào sau đây để bón cho đất trồng?",
    options: [
      "A. Phân vi lượng.",
      "B. Ca(H₂PO₄)₂.",
      "C. Ca(OH)₂.",
      "D. KCl."
    ],
    answer: 2,
    explanation: "Trong đất urea thủy phân thành (NH₄)₂CO₃. Nếu có mặt Ca(OH)₂ (vôi) sẽ xảy ra phản ứng: (NH₄)₂CO₃ + Ca(OH)₂ → CaCO₃↓ + 2NH₃↑ + 2H₂O làm bay hơi mất nitrogen, giảm tác dụng của phân."
  },
  {
    id: 48,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Không nên bón phân đạm cùng với vôi vì ở trong nước",
    options: [
      "A. phân đạm làm kết tủa vôi.",
      "B. phân đạm phản ứng với vôi tạo khí NH₃ làm mất tác dụng của đạm.",
      "C. phân đạm phản ứng với vôi và toả nhiệt làm cây trồng bị chết vì nóng.",
      "D. cây trồng không thể hấp thụ được đạm khi có mặt của vôi."
    ],
    answer: 1,
    explanation: "Phân đạm (ion NH₄⁺) gặp môi trường kiềm từ vôi sẽ phản ứng: NH₄⁺ + OH⁻ → NH₃↑ + H₂O, khí NH₃ bay hơi làm thất thoát dinh dưỡng đạm."
  },
  {
    id: 49,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "[CTST - CĐHT] Cách làm nào sau đây là đúng trong việc khử chua bằng vôi và bón phân đạm cho lúa?",
    options: [
      "A. Bón đạm và vôi cùng lúc.",
      "B. Bón đạm trước rồi vài ngày sau mới bón vôi khử chua.",
      "C. Bón vôi khử chua trước rồi vài ngày sau mới bón đạm.",
      "D. Bón vôi khử chua trước rồi bón đạm ngay sau khi bón vôi."
    ],
    answer: 2,
    explanation: "Cần bón vôi trước vài ngày để khử chua, sau khi vôi ngấm và trung hòa độ acid trong đất xong mới tiến hành bón đạm, tránh thất thoát đạm dưới dạng khí NH₃."
  },
  {
    id: 50,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phát biểu nào sau đây là đúng?",
    options: [
      "A. Thành phần chính của superphosphate kép gồm hai muối Ca(H₂PO₄)₂ và CaSO₄.",
      "B. Urea có công thức là (NH₂)₂CO.",
      "C. Superphosphate đơn chỉ có Ca(H₂PO₄)₂.",
      "D. Phân lân cung cấp nitrogen cho cây trồng."
    ],
    answer: 1,
    explanation: "A sai vì kép không có CaSO₄. C sai vì đơn có cả Ca(H₂PO₄)₂ và CaSO₄. D sai vì phân lân cung cấp P. B đúng: Urea là (NH₂)₂CO."
  },
  {
    id: 51,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phát biểu nào sau đây không đúng?",
    options: [
      "A. Phân ammophos cung cấp nguyên tố dinh dưỡng nitrogen, phosphorus và potassium.",
      "B. Phân kali cung cấp nguyên tố dinh dưỡng potassium.",
      "C. Không nên bón phân đạm ammonium nitrate cho đất chua.",
      "D. Tất cả các loại phân đạm đều dễ tan."
    ],
    answer: 0,
    explanation: "A sai vì Ammophos là hỗn hợp NH₄H₂PO₄ và (NH₄)₂HPO₄ chỉ chứa 2 nguyên tố dinh dưỡng là N và P, không chứa potassium (K)."
  },
  {
    id: 52,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phát biểu nào sau đây không đúng?",
    options: [
      "A. Phân vi lượng cung cấp các nguyên tố dinh dưỡng N, P, K cho cây trồng.",
      "B. Cây trồng chỉ cần một lượng rất nhỏ phân vi lượng.",
      "C. Phân vi lượng được đưa vào đất cùng với phân bón vô cơ hoặc phân bón hữu cơ.",
      "D. Dùng quá lượng phân vi lượng sẽ có hại cho cây."
    ],
    answer: 0,
    explanation: "A sai vì N, P, K là các nguyên tố đa lượng, không phải là vi lượng."
  },
  {
    id: 53,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phát biểu nào sau đây đúng?",
    options: [
      "A. Ammophos là hỗn hợp các muối (NH₄)₂HPO₄ và KNO₃.",
      "B. Bón nhiều phân đạm ammonium sẽ làm đất chua.",
      "C. Quặng phosphorite có thành phần chính là Ca(H₂PO₄)₂.",
      "D. Có bón phân đạm kèm khử chua đất bằng vôi tôi."
    ],
    answer: 1,
    explanation: "B đúng: Muối ammonium thủy phân tạo H⁺ làm tăng độ chua của đất. A sai (Ammophos gồm MAP và DAP). C sai (quặng phosphorite là Ca₃(PO₄)₂). D sai (không bón đạm kèm vôi)."
  },
  {
    id: 54,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phát biểu nào sau đây không đúng?",
    options: [
      "A. Nguyên liệu chính để sản xuất phân urea là carbon dioxide và ammonia.",
      "B. Phân bón SA là chất rắn dạng hạt mịn màu trắng ngà hoặc xám xanh.",
      "C. Phân phức hợp ammophos là hỗn hợp của DAP, MAP và TAP.",
      "D. Trước khi bón phân superphosphate người ta thường xử lí đất bằng vôi."
    ],
    answer: 2,
    explanation: "C không đúng: Phân phức hợp ammophos chỉ gồm MAP (NH₄H₂PO₄) và DAP ((NH₄)₂HPO₄), không có TAP (triammonium phosphate vì TAP kém bền)."
  },
  {
    id: 55,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Nguyên liệu để sản xuất phân bón urea là chất X và chất Y, nguyên liệu để sản xuất phân bón SA là chất X và chất Z. Các chất X, Y, Z lần lượt là",
    options: [
      "A. Ammonia, carbon dioxide, phosphoric acid đặc.",
      "B. Ammonia, carbon dioxide, sulfuric acid đặc.",
      "C. Ammonia, sulfuric acid đặc, carbon dioxide.",
      "D. Carbon dioxide, ammonia, sulfuric acid đặc."
    ],
    answer: 1,
    explanation: "X chung là ammonia (NH₃). Urea sản xuất từ NH₃ + CO₂ (Y là CO₂). Phân SA sản xuất từ NH₃ + H₂SO₄ đặc (Z là H₂SO₄)."
  },
  {
    id: 56,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Để sản xuất phân lân nung chảy, người ta nung hỗn hợp X ở nhiệt độ trên 1000°C trong lò đứng. Sản phẩm nóng chảy từ lò đi ra được làm nguội nhanh bằng nước để khối chất bị vỡ thành các hạt vụn, sau đó sấy khô và nghiền thành bột. X gồm",
    options: [
      "A. apatite: Ca₅F(PO₄)₃, đá vôi: CaCO₃ và than cốc: C",
      "B. phosphorite: Ca₃(PO₄)₂, đá vôi: CaCO₃ và than cốc: C",
      "C. apatite: Ca₅F(PO₄)₃, đá xà vân: MgSiO₃ và than cốc: C",
      "D. phosphorite: Ca₃(PO₄)₂, cát: SiO₂ và than cốc: C"
    ],
    answer: 2,
    explanation: "Hỗn hợp nguyên liệu nung chảy gồm quặng apatite, đá xà vân (chứa magie silicat MgSiO₃) và than cốc."
  },
  {
    id: 57,
    lessonId: 2,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Cho các phản ứng sau:\n(1) Ca₃(PO₄)₂ + 3H₂SO₄ đặc → 3CaSO₄ + 2H₃PO₄\n(2) Ca₃(PO₄)₂ + 2H₂SO₄ đặc → 2CaSO₄ + Ca(H₂PO₄)₂\n(3) Ca₃(PO₄)₂ + 4H₃PO₄ → 3Ca(H₂PO₄)₂\n(4) Ca₃(OH)₂ + 2H₂SO₄ đặc → Ca(H₂PO₄)₂ + 2H₂O\nNhững phản ứng xảy ra trong quá trình điều chế superphosphate kép từ Ca₃(PO₄)₂ là",
    options: [
      "A. (2), (3).",
      "B. (1), (3).",
      "C. (2), (4).",
      "D. (1), (4)."
    ],
    answer: 1,
    explanation: "Quá trình sản xuất superphosphate kép gồm 2 giai đoạn:\n- Giai đoạn 1: Điều chế axit photphoric: Ca₃(PO₄)₂ + 3H₂SO₄ → 3CaSO₄↓ + 2H₃PO₄ (phản ứng 1)\n- Giai đoạn 2: Axit tác dụng tiếp quặng apatite: Ca₃(PO₄)₂ + 4H₃PO₄ → 3Ca(H₂PO₄)₂ (phản ứng 3)."
  },
  {
    id: 58,
    lessonId: 2,
    level: "van_dung",
    levelName: "Vận dụng",
    question: "Cho các phát biểu sau:\n(a) Phân đạm ammonium chloride là loại phân bón đơn dinh dưỡng đa lượng.\n(b) Độ dinh dưỡng của phân kali được đánh giá bằng phần trăm khối lượng của potassium.\n(c) Phân superphosphate không nên bón cho loại đất chua.\n(d) Tro thực vật cũng là một loại phân kali vì có chứa potassium carbonate.\n(e) Phân NPK là loại phân phức hợp.\nSố nhận phát biểu đúng là",
    options: [
      "A. 2.",
      "B. 3.",
      "C. 4.",
      "D. 5."
    ],
    answer: 1,
    explanation: "Các phát biểu đúng gồm: (a), (c), (d) => Có 3 phát biểu đúng.\n- (b) sai vì độ dinh dưỡng phân kali đánh giá bằng % khối lượng K₂O.\n- (e) sai vì phân NPK là phân hỗn hợp (trộn cơ học)."
  },
  {
    id: 59,
    lessonId: 2,
    level: "van_dung",
    levelName: "Vận dụng",
    question: "Các nhận xét sau:\n(a) Phân đạm ammonium không nên bón cho loại đất chua;\n(b) Độ dinh dưỡng của phân lân được đánh giá bằng phần trăm khối lượng phosphorus;\n(c) Thành phần chính của superphosphate kép là Ca(H₂PO₄)₂.CaSO₄;\n(d) Người ta dùng loại phân bón chứa nguyên tố potassium để tăng cường sức chống bệnh, chống rét và chịu hạn cho cây;\n(e) Tro thực vật cũng là một loại phân kali vì có chứa K₂CO₃;\n(f) Ammophos là một loại phân bón phức hợp.\nSố nhận xét sai là",
    options: [
      "A. 4.",
      "B. 3.",
      "C. 2.",
      "D. 1."
    ],
    answer: 2,
    explanation: "Có 2 nhận xét sai là (b) và (c):\n- (b) sai vì độ dinh dưỡng phân lân tính theo % P₂O₅.\n- (c) sai vì thành phần chính superphosphate kép chỉ là Ca(H₂PO₄)₂, không có CaSO₄."
  },

  // ==================== BÀI 3 (20 CÂU) ====================
  {
    id: 60,
    lessonId: 3,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Phân hữu cơ gồm",
    options: [
      "A. Phân chuồng, phân xanh, phân rác.",
      "B. Phân đạm, phân lân, phân kali.",
      "C. Phân truyền thống, phân sinh học, phân khoáng.",
      "D. Phân đa lượng, trung lượng, vi lượng."
    ],
    answer: 2,
    explanation: "Theo sơ đồ phân loại lớn trong SGK, phân bón hữu cơ gồm 3 nhóm chính: Phân hữu cơ truyền thống, Phân hữu cơ sinh học, và Phân hữu cơ khoáng."
  },
  {
    id: 61,
    lessonId: 3,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Phân hữu cơ truyền thống gồm",
    options: [
      "A. Phân chuồng, phân xanh, phân rác.",
      "B. Phân đạm, phân lân, phân kali.",
      "C. Phân truyền thống, phân sinh học, phân khoáng.",
      "D. Phân đa lượng, trung lượng, vi lượng."
    ],
    answer: 0,
    explanation: "Phân hữu cơ truyền thống bao gồm 3 loại quen thuộc từ ngàn đời: Phân chuồng, phân xanh và phân rác."
  },
  {
    id: 62,
    lessonId: 3,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Loại phân nào sau đây là phân hữu cơ?",
    options: [
      "A. Phân đạm.",
      "B. Phân chuồng.",
      "C. Phân phức hợp.",
      "D. Phân kali."
    ],
    answer: 1,
    explanation: "Phân chuồng có nguồn gốc từ chất thải động vật chăn nuôi nên là phân hữu cơ."
  },
  {
    id: 63,
    lessonId: 3,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Loại phân nào sau đây không phải phân hữu cơ?",
    options: [
      "A. Phân chuồng.",
      "B. Phân rác.",
      "C. Phân phức hợp.",
      "D. Phân xanh."
    ],
    answer: 2,
    explanation: "Phân phức hợp (như ammophos) là phân bón vô cơ."
  },
  {
    id: 64,
    lessonId: 3,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Loại phân bón nào sau đây không thuộc phân hữu cơ truyền thống?",
    options: [
      "A. Phân chuồng.",
      "B. Phân rác.",
      "C. Phân sinh học.",
      "D. Phân xanh."
    ],
    answer: 2,
    explanation: "Phân hữu cơ sinh học là nhóm riêng được sản xuất qua công nghệ sinh học, không thuộc nhóm truyền thống."
  },
  {
    id: 65,
    lessonId: 3,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Thành phần chủ yếu của phân chuồng gồm",
    options: [
      "A. phân, nước tiểu của gia súc, gia cầm.",
      "B. các loại rơm, cỏ làm chuồng bị hoai mục.",
      "C. đất mùn bên dưới lớp phân gia súc, gia cầm.",
      "D. thức ăn thừa của gia súc, gia cầm."
    ],
    answer: 0,
    explanation: "Phân chuồng có thành phần chính là chất thải (phân, nước tiểu) của gia súc, gia cầm kèm chất độn chuồng."
  },
  {
    id: 66,
    lessonId: 3,
    level: "nhan_biet",
    levelName: "Nhận biết",
    question: "Bón nhiều phân superphosphate đơn sẽ làm cho đất bị chai cứng. Thành phần chính gây ra hiện tượng này là",
    options: [
      "A. Ca(H₂PO₄)₂.",
      "B. Ca₃(PO₄)₂.",
      "C. CaSO₄.",
      "D. CaHPO₄."
    ],
    answer: 2,
    explanation: "Superphosphate đơn có chứa lượng lớn CaSO₄ (thạch cao ít tan), tồn đọng lâu năm trong đất làm đất bị chai cứng, rắn chắc."
  },
  {
    id: 67,
    lessonId: 3,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "[CD – CĐHT] Loại rác nào sau đây không thể sử dụng làm phân rác tại nhà?",
    options: [
      "A. Rơm, rạ, lá cây khô.",
      "B. Giấy, bã mía, mùn cưa.",
      "C. Túi nylon, xương động vật.",
      "D. Vỏ trái cây, vỏ các loại củ."
    ],
    answer: 2,
    explanation: "Túi nylon là nhựa khó phân hủy (hàng trăm năm), xương động vật cứng khó hoai mục trong điều kiện ủ rác thông thường tại nhà."
  },
  {
    id: 68,
    lessonId: 3,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "[CTST - CĐHT] Nhóm phân bón nào sau đây chủ yếu được dùng để bón lót?",
    options: [
      "A. Phân bón hữu cơ, phân xanh, phân đạm.",
      "B. Phân xanh, phân kali, phân NPK.",
      "C. Phân rác, phân xanh, phân chuồng.",
      "D. Phân DAP, phân lân, phân xanh, phân bón sinh học."
    ],
    answer: 2,
    explanation: "Các loại phân hữu cơ truyền thống (phân chuồng, phân xanh, phân rác) phân giải rất chậm nên chủ yếu dùng bón lót trước khi gieo trồng."
  },
  {
    id: 69,
    lessonId: 3,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Nhược điểm của phân xanh là",
    options: [
      "A. phải chặt nhiều cây xanh để làm phân bón.",
      "B. hiệu quả chậm và quá trình phân hủy sinh ra khí độc.",
      "C. dễ làm cho đất bị chai cứng do không hấp thu được nước.",
      "D. hàm lượng dinh dưỡng thấp, cần nhiều nhân công để khai thác."
    ],
    answer: 1,
    explanation: "Phân xanh vùi tươi vào đất phân hủy chậm, trong điều kiện yếm khí sinh ra một số chất/khí độc hại (H₂S, CH₄...) có thể gây nghẹt rễ cây con nếu chưa hoai mục."
  },
  {
    id: 70,
    lessonId: 3,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Ưu điểm của phân hữu cơ truyền thống là",
    options: [
      "A. làm đất tơi xốp, tăng độ phì nhiêu và chất mùn cho đất.",
      "B. có hiệu quả tức thì, nhanh chóng và bền vững.",
      "C. có nguồn tại chỗ, dễ khai thác và sử dụng.",
      "D. luôn an toàn với người trồng cây và người sử dụng sản phẩm."
    ],
    answer: 0,
    explanation: "Ưu điểm vượt trội của phân hữu cơ truyền thống là làm đất tơi xốp, bổ sung lượng mùn dồi dào, giữ ẩm và cải tạo kết cấu đất."
  },
  {
    id: 71,
    lessonId: 3,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phân rác gồm",
    options: [
      "A. rơm, rạ, lá cây, phế phẩm nông nghiệp,…",
      "B. chất thải hữu cơ từ người và động vật.",
      "C. các loại phân bón đã hết hạn sử dụng.",
      "D. các loại phân bón bị lỗi trong quá trình sản xuất."
    ],
    answer: 0,
    explanation: "Phân rác được tạo từ rơm, rạ, thân lá bắp/đậu, vỏ lạc, bã mía, rác hữu cơ thực vật ủ hoai."
  },
  {
    id: 72,
    lessonId: 3,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Loại rác thải nào sau đây có thể dùng làm phân rác?",
    options: [
      "A. Rác thải y tế.",
      "B. Rác thải từ phân bón, thuốc trừ sâu.",
      "C. Rác thải công nghiệp.",
      "D. Các phụ phẩm từ thân, lá, rễ cây đã bỏ đi."
    ],
    answer: 3,
    explanation: "Các phụ phẩm hữu cơ nông nghiệp (thân lá rễ cây bỏ đi) rất thích hợp ủ làm phân rác hữu cơ an toàn."
  },
  {
    id: 73,
    lessonId: 3,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Loại phân bón nào sau đây đảm bảo được sự cân bằng giữa phân hữu cơ và phân vô cơ?",
    options: [
      "A. Phân chuồng.",
      "B. Phân hữu cơ sinh học.",
      "C. Phân rác.",
      "D. Phân hữu cơ khoáng."
    ],
    answer: 3,
    explanation: "Phân hữu cơ khoáng kết hợp cả thành phần chất hữu cơ (≥ 15%) và các khoáng chất vô cơ (8-18% N, P, K), kết hợp ưu điểm của cả hai loại."
  },
  {
    id: 74,
    lessonId: 3,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Phân hữu cơ phù hợp với giai đoạn bón lót vì nguyên nhân nào sau đây?",
    options: [
      "A. phân hủy chậm nên phát huy tác dụng chậm.",
      "B. bón số lượng lớn giữ ẩm tốt cho đất.",
      "C. chứa hàm lượng dinh dưỡng lớn nên cây hấp thu đến hết giai đoạn phát triển.",
      "D. phù hợp với mọi loại đất và cây trồng."
    ],
    answer: 0,
    explanation: "Các chất hữu cơ cần thời gian cho vi sinh vật phân giải thành ion khoáng dễ hấp thu, do đó cần bón lót trước để kịp cung cấp dưỡng chất khi cây bén rễ."
  },
  {
    id: 75,
    lessonId: 3,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Bón loại phân nào sau đây làm cho đất bị chua?",
    options: [
      "A. urea.",
      "B. superphosphate đơn và kép.",
      "C. potassium nitrate.",
      "D. ammonium sulfate."
    ],
    answer: 3,
    explanation: "(NH₄)₂SO₄ là muối của bazo yếu và acid mạnh, khi thủy phân tạo H⁺ làm tăng độ chua của đất mạnh mẽ."
  },
  {
    id: 76,
    lessonId: 3,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Đặc điểm nào không có ở phân hữu cơ?",
    options: [
      "A. Hiệu quả chậm, không làm hại đất.",
      "B. Chậm phân giải, cần ủ cho hoai mục.",
      "C. Bón liên tục nhiều năm làm cho đất hóa chua.",
      "D. Chứa nhiều nguyên tố dinh dưỡng nhưng tỉ lệ dinh dưỡng thấp."
    ],
    answer: 2,
    explanation: "Phân hữu cơ giúp cải tạo đất, duy trì độ đệm pH, làm đất tơi xốp phì nhiêu chứ không làm cho đất hóa chua."
  },
  {
    id: 77,
    lessonId: 3,
    level: "thong_hieu",
    levelName: "Thông hiểu",
    question: "Việc lạm dụng phân bón gây hậu quả tiêu cực nào sau đây?",
    options: [
      "A. Làm đất bị chai cứng, xơ hóa từ đó hiệu quả trồng trọt sẽ giảm đáng kể.",
      "B. Làm được nhiều vụ, năng suất cao dẫn đến giá thành sản phẩm rẻ.",
      "C. Hàm lượng dinh dưỡng cao, làm cây dễ bị thối rễ và chết.",
      "D. Sản lượng cao dẫn đến thái độ con người trở nên lười biếng hơn, ít chăm sóc cây trồng hơn."
    ],
    answer: 0,
    explanation: "Lạm dụng phân bón hóa học trong thời gian dài tiêu diệt hệ vi sinh vật có ích, làm đất chai cứng, xơ hóa, chua hóa và giảm sút năng suất cây trồng."
  },
  {
    id: 78,
    lessonId: 3,
    level: "van_dung",
    levelName: "Vận dụng",
    question: "Cho các phát biểu sau đây:\n(a) Phân bón hữu cơ không gây ra hiện tượng phú dưỡng như phân bón vô cơ.\n(b) Quá trình khoáng hóa an toàn đối với môi trường.\n(c) Phân bón hữu cơ có thể làm đất nghèo dinh dưỡng.\n(d) Vi sinh vật trong phân bón hữu cơ là các loài không gây bệnh trên người và động vật.\nSố phát biểu sai là",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    answer: 2,
    explanation: "Có 3 phát biểu sai gồm (a), (b), (d):\n- (a) sai vì nếu bón thừa trôi vào nguồn nước vẫn gây phú dưỡng.\n- (b) sai vì quá trình phân hủy/khoáng hóa kị khí có thể sinh khí độc (CH₄, H₂S, NH₃).\n- (d) sai vì nếu chưa ủ hoai mục kĩ, phân có thể chứa vi khuẩn gây bệnh như E. coli, Salmonella, trứng giun sán."
  },
  {
    id: 79,
    lessonId: 3,
    level: "van_dung",
    levelName: "Vận dụng",
    question: "Cách bảo quản phân bón hữu cơ gồm:\n(a) Không để phân bón bị ẩm, ướt.\n(b) Không để trộn lẫn các loại phân bón hữu cơ với nhau.\n(c) Không để trộn lẫn các phân bón vô cơ với các phân bón hữu cơ.\n(d) Lưu trữ gần khu vực chăn nuôi để tiện cho việc bảo quản và sử dụng.\n(e) Lưu trữ phù hợp với thời gian sống của vi sinh vật.\nSố phát biểu đúng là",
    options: [
      "A. 1",
      "B. 3",
      "C. 4",
      "D. 5"
    ],
    answer: 2,
    explanation: "Có 4 phát biểu đúng là (a), (b), (c), (e).\nPhát biểu (d) sai vì phân bón cần lưu trữ tách biệt, xa khu vực chăn nuôi và nhà ở để tránh lây nhiễm mầm bệnh."
  }
];
