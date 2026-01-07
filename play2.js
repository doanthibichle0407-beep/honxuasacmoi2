const questions2 = [
  {
    question: "Câu 1: Vở cải lương Tiếng trống Mê Linh lấy bối cảnh lịch sử thời kỳ nào?",
    options: ["Thời Trần", "Thời Bắc thuộc", "Thời Lê sơ"],
    answer: 1
  },
  {
    question: "Câu 2: Nhân dân trong vở phải chịu ách cai trị của ai?",
    options: ["Quan lại Việt", "Thái thú Tô Định", "Vua Nam Việt"],
    answer: 1
  },
  {
    question: "Câu 3: Tô Định được khắc họa là nhân vật như thế nào?",
    options: ["Nhân từ", "Tàn bạo, áp bức", "Do dự"],
    answer: 1
  },
  {
    question: "Câu 4: Trưng Trắc là nhân vật trung tâm của vở, đại diện cho điều gì?",
    options: ["Quyền lực phong kiến", "Tinh thần yêu nước và ý chí quật cường", "Sự cam chịu"],
    answer: 1
  },
  {
    question: "Câu 5: Chồng của Trưng Trắc là ai?",
    options: ["Thi Sách", "Trưng Nhị", "Lạc tướng Chu Diên"],
    answer: 0
  },
  {
    question: "Câu 6: Thi Sách bị giết vì lý do gì?",
    options: ["Phản bội đất nước", "Chống lại ách cai trị của Tô Định", "Tranh giành quyền lực"],
    answer: 1
  },
  {
    question: "Câu 7: Cái chết của Thi Sách đã dẫn đến điều gì?",
    options: ["Sự khuất phục của Trưng Trắc", "Sự bùng nổ của cuộc khởi nghĩa", "Sự hòa giải"],
    answer: 1
  },
  {
    question: "Câu 8: Trưng Trắc lập bàn thờ tế sống Thi Sách nhằm mục đích gì?",
    options: ["Than khóc riêng tư", "Biến đau thương thành lời thề cứu nước", "Thực hiện nghi lễ mê tín"],
    answer: 1
  },
  {
    question: "Câu 9: Nhân vật Trưng Nhị có vai trò gì?",
    options: ["Người em gái đồng hành, chiến đấu cùng Trưng Trắc", "Người phản bội", "Nhân vật phụ không quan trọng"],
    answer: 0
  },
  {
    question: "Câu 10: Tiếng trống Mê Linh vang lên tượng trưng cho điều gì?",
    options: ["Lễ hội", "Hiệu lệnh khởi nghĩa", "Tang lễ"],
    answer: 1
  },
  {
    question: "Câu 11: Cuộc khởi nghĩa trong vở hướng tới mục tiêu nào?",
    options: ["Giành quyền lực cá nhân", "Đánh đuổi quân xâm lược, giành độc lập", "Mở rộng lãnh thổ"],
    answer: 1
  },
  {
    question: "Câu 12: Trưng Trắc phải giằng xé giữa hai điều gì?",
    options: ["Danh vọng và tiền bạc", "Tình riêng và nghĩa nước", "Gia đình và bạn bè"],
    answer: 1
  },
  {
    question: "Câu 13: Chiến thắng của nghĩa quân mang ý nghĩa gì?",
    options: ["Kết thúc hoàn toàn chiến tranh", "Khẳng định sức mạnh và ý chí dân tộc", "Chỉ là thắng lợi tạm thời"],
    answer: 1
  },
  {
    question: "Câu 14: Sau chiến thắng, Trưng Trắc làm gì?",
    options: ["Rút lui về ở ẩn", "Lên ngôi vua", "Nhường quyền cho người khác"],
    answer: 1
  },
  {
    question: "Câu 15: Hình ảnh Trưng Trắc lên ngôi thể hiện điều gì?",
    options: ["Quyền lực cá nhân", "Vai trò người phụ nữ trong lịch sử dân tộc", "Sự độc đoán"],
    answer: 1
  },
  {
    question: "Câu 16: Từ 'Bắc thuộc' trong vở có nghĩa là gì?",
    options: ["Đất nước độc lập", "Thời kỳ bị phương Bắc đô hộ", "Thời kỳ hòa bình"],
    answer: 1
  },
  {
    question: "Câu 17: 'Ách cai trị' dùng để chỉ điều gì?",
    options: ["Sự quản lý nhẹ nhàng", "Sự thống trị hà khắc, áp bức", "Luật pháp công bằng"],
    answer: 1
  },
  {
    question: "Câu 18: 'Khởi nghĩa' là gì?",
    options: ["Nổi dậy có tổ chức chống lại kẻ thống trị", "Chuyển giao quyền lực hòa bình", "Lễ hội dân gian"],
    answer: 0
  },
  {
    question: "Câu 19: 'Nghĩa quân' trong vở là ai?",
    options: ["Quân xâm lược", "Nhân dân đứng lên chiến đấu vì chính nghĩa", "Lính đánh thuê"],
    answer: 1
  },
  {
    question: "Câu 20: Cảm hứng chủ đạo của vở Tiếng trống Mê Linh là gì?",
    options: ["Lãng mạn", "Bi tráng, hào hùng", "Hài hước"],
    answer: 1
  },
  {
    question: "Câu 21: Vở diễn đề cao giá trị nào?",
    options: ["Chủ nghĩa cá nhân", "Lòng yêu nước và tinh thần đoàn kết", "Sự phục tùng"],
    answer: 1
  },
  {
    question: "Câu 22: Hình ảnh người phụ nữ trong vở được khắc họa như thế nào?",
    options: ["Yếu đuối", "Anh hùng, bản lĩnh", "Phụ thuộc"],
    answer: 1
  },
  {
    question: "Câu 23: Bi kịch riêng của Trưng Trắc là gì?",
    options: ["Mất chồng", "Mất quyền lực", "Bị phản bội"],
    answer: 0
  },
  {
    question: "Câu 24: Bi kịch riêng ấy được chuyển hóa thành điều gì?",
    options: ["Nỗi tuyệt vọng", "Động lực cứu nước", "Sự buông xuôi"],
    answer: 1
  },
  {
    question: "Câu 25: Nhân vật Tô Định đại diện cho điều gì?",
    options: ["Công lý", "Bạo quyền xâm lược", "Trí tuệ"],
    answer: 1
  },
  {
    question: "Câu 26: 'Tế sống' nghĩa là gì?",
    options: ["Thờ cúng khi người còn sống", "Chôn sống", "Làm lễ cưới"],
    answer: 0
  },
  {
    question: "Câu 27: 'Giang sơn' trong vở được hiểu là gì?",
    options: ["Gia đình", "Đất nước, non sông", "Tình yêu đôi lứa"],
    answer: 1
  },
  {
    question: "Câu 28: Vì sao vở diễn mang màu sắc bi tráng?",
    options: ["Vì kết thúc buồn", "Vì kết hợp đau thương và hào khí anh hùng", "Vì không có chiến thắng"],
    answer: 1
  },
  {
    question: "Câu 29: Thông điệp lịch sử lớn nhất của vở là gì?",
    options: ["Sức mạnh quân sự", "Ý chí độc lập của dân tộc Việt", "Sự thỏa hiệp"],
    answer: 1
  },
  {
    question: "Câu 30: Giá trị nhân văn của Tiếng trống Mê Linh nằm ở đâu?",
    options: ["Ca ngợi bạo lực", "Tôn vinh con người dám hi sinh vì cộng đồng", "Đề cao cá nhân"],
    answer: 1
  }
];

loadQuiz(questions2);
function playAt(sec) {
  const yt = document.getElementById("ytPlayer");
  const videoID = "QCxrNuiJkcs"; // ID video Tiếng Trống Mê Linh
  yt.src = `https://www.youtube.com/embed/${videoID}?start=${sec}&autoplay=1&rel=0&modestbranding=1`;
}
function toggleHighlights() {
  document.getElementById("hlBox").classList.toggle("collapsed");
}
