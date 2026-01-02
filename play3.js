const questions3 = [
  {
    question: "Câu 1: Vở cải lương Đời Cô Lựu lấy bối cảnh xã hội nào?",
    options: ["Nam Bộ thời Pháp thuộc", "Nam Bộ thời Mỹ", "Nam Bộ sau 1975"],
    answer: 0
  },
  {
    question: "Câu 2: Nhân vật trung tâm của vở là ai?",
    options: ["Hai Thành", "Cô Lựu", "Minh Luân"],
    answer: 1
  },
  {
    question: "Câu 3: Hai Thành có thân phận xã hội gì?",
    options: ["Địa chủ", "Tá điền", "Công chức"],
    answer: 1
  },
  {
    question: "Câu 4: Hội đồng Thăng đại diện cho tầng lớp nào?",
    options: ["Nông dân", "Địa chủ", "Công nhân"],
    answer: 1
  },
  {
    question: "Câu 5: Hội đồng Thăng đã dùng mưu gì để hãm hại Hai Thành?",
    options: ["Vu khống trộm cắp", "Gài súng lục và truyền đơn", "Đầu độc"],
    answer: 1
  },
  {
    question: "Câu 6: Hai Thành bị kết án bao nhiêu năm tù?",
    options: ["10 năm", "15 năm", "20 năm"],
    answer: 2
  },
  {
    question: "Câu 7: Hai Thành bị đày đi đâu?",
    options: ["Phú Quốc", "Côn Đảo", "Hỏa Lò"],
    answer: 1
  },
  {
    question: "Câu 8: Vì sao Cô Lựu phải làm vợ Hội đồng Thăng?",
    options: ["Vì giàu sang", "Vì bị ép buộc, mất đường sống", "Vì phản bội Hai Thành"],
    answer: 1
  },
  {
    question: "Câu 9: Con trai của Hai Thành và Cô Lựu tên là gì?",
    options: ["Minh Luân", "Kim Anh", "Hai Luân"],
    answer: 0
  },
  {
    question: "Câu 10: Ai đã bí mật nhận nuôi Minh Luân?",
    options: ["Cô Lựu", "Vợ chồng ông Hương", "Hội đồng Thăng"],
    answer: 1
  },
  {
    question: "Câu 11: Từ 'tá điền' trong vở có nghĩa là gì?",
    options: ["Người cày ruộng thuê cho địa chủ", "Người buôn bán nhỏ", "Người làm quan"],
    answer: 0
  },
  {
    question: "Câu 12: 'Hội đồng' thời Pháp thuộc là người như thế nào?",
    options: ["Quan triều đình", "Địa chủ giàu có", "Lính Pháp"],
    answer: 1
  },
  {
    question: "Câu 13: 'Truyền đơn' trong vở dùng để làm gì?",
    options: ["Quảng cáo buôn bán", "Kêu gọi chống chính quyền", "Thư riêng"],
    answer: 1
  },
  {
    question: "Câu 14: 'Tịch thu tài sản' nghĩa là gì?",
    options: ["Bán tài sản", "Nhà nước lấy toàn bộ tài sản", "Chia tài sản"],
    answer: 1
  },
  {
    question: "Câu 15: 'Đày đi Côn Đảo' thể hiện điều gì?",
    options: ["Hình phạt tù khắc nghiệt", "Đi làm ăn xa", "Đi học bắt buộc"],
    answer: 0
  },
  {
    question: "Câu 16: 'Tư trang' là gì?",
    options: ["Tiền mặt", "Đồ trang sức cá nhân", "Giấy tờ"],
    answer: 1
  },
  {
    question: "Câu 17: 'Cầm đồ' nghĩa là gì?",
    options: ["Bán đồ", "Mang đồ thế chấp lấy tiền", "Cho mượn đồ"],
    answer: 1
  },
  {
    question: "Câu 18: 'Cô nhi viện' là nơi nào?",
    options: ["Nhà nuôi trẻ mồ côi", "Nhà tù", "Bệnh viện"],
    answer: 0
  },
  {
    question: "Câu 19: 'Vượt ngục' có nghĩa là gì?",
    options: ["Được thả tự do", "Trốn khỏi nhà tù", "Chuyển trại"],
    answer: 1
  },
  {
    question: "Câu 20: 'Biệt tích' nghĩa là gì?",
    options: ["Đi xa", "Mất tích không rõ tung tích", "Qua đời"],
    answer: 1
  },
  {
    question: "Câu 21: Bi kịch lớn nhất của Cô Lựu là gì?",
    options: ["Nghèo khổ", "Bị hiểu lầm là phản bội", "Không có con"],
    answer: 1
  },
  {
    question: "Câu 22: Vì sao Minh Luân từ chối nhận tiền?",
    options: ["Không cần tiền", "Tự trọng và thương mẹ", "Sợ bị lộ thân phận"],
    answer: 1
  },
  {
    question: "Câu 23: Ai là người bắn Minh Luân?",
    options: ["Hội đồng Thăng", "Chồng Kim Anh", "Cảnh sát"],
    answer: 1
  },
  {
    question: "Câu 24: Minh Luân giết Hội đồng Thăng vì lý do gì?",
    options: ["Vì tiền", "Vì thù hận dồn nén", "Vì bị ép buộc"],
    answer: 1
  },
  {
    question: "Câu 25: Kim Anh là con của ai?",
    options: ["Hai Thành", "Hội đồng Thăng", "Minh Luân"],
    answer: 1
  },
  {
    question: "Câu 26: Chi tiết Kim Anh phát điên thể hiện điều gì?",
    options: ["Bi kịch lan sang thế hệ sau", "Sự trừng phạt của pháp luật", "Cái ác chiến thắng"],
    answer: 0
  },
  {
    question: "Câu 27: Nhân vật ông bà Hương tượng trưng cho điều gì?",
    options: ["Quyền lực", "Tình người của dân nghèo", "Sự thỏa hiệp"],
    answer: 1
  },
  {
    question: "Câu 28: Cái chết của Hội đồng Thăng cho thấy điều gì?",
    options: ["Công lý hoàn toàn được thực thi", "Bạo lực sinh ra bạo lực", "Bi kịch chấm dứt"],
    answer: 1
  },
  {
    question: "Câu 29: Vì sao Cô Lựu chấp nhận bị bắt?",
    options: ["Trốn tránh sự thật", "Cứu chồng và con", "Tuân theo luật pháp"],
    answer: 1
  },
  {
    question: "Câu 30: Giá trị nhân văn lớn nhất của vở là gì?",
    options: ["Đề cao tiền tài", "Bảo vệ phẩm giá con người", "Tôn vinh trả thù"],
    answer: 1
  }
];

loadQuiz(questions3);
