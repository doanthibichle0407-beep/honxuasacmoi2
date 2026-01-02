const questions4 = [
  {
    question: "Câu 1: Lan và Điệp là vở cải lương thuộc thể loại nào?",
    options: ["Hài kịch", "Bi kịch tình yêu", "Sử thi lịch sử"],
    answer: 1
  },
  {
    question: "Câu 2: Nhân vật trung tâm của vở là ai?",
    options: ["Lan và Điệp", "Chỉ có Lan", "Chỉ có Điệp"],
    answer: 0
  },
  {
    question: "Câu 3: Mối quan hệ giữa Lan và Điệp là gì?",
    options: ["Anh em", "Bạn bè", "Người yêu"],
    answer: 2
  },
  {
    question: "Câu 4: Vì sao tình yêu Lan – Điệp không thể đến được với nhau?",
    options: ["Do chiến tranh", "Do lễ giáo và hoàn cảnh nghèo khó", "Do phản bội bạn bè"],
    answer: 1
  },
  {
    question: "Câu 5: Điệp là người như thế nào trong tình yêu?",
    options: ["Kiên quyết bảo vệ tình yêu", "Bản lĩnh, mạnh mẽ", "Yếu đuối, không dám đấu tranh"],
    answer: 2
  },
  {
    question: "Câu 6: Khi Điệp cưới vợ, Lan rơi vào trạng thái nào?",
    options: ["Oán hận dữ dội", "Đau khổ nhưng vẫn giữ nghĩa xưa", "Vui vẻ chấp nhận"],
    answer: 1
  },
  {
    question: "Câu 7: Quyết định xuất gia của Lan thể hiện điều gì?",
    options: ["Trốn tránh cuộc đời", "Sự buông xuôi hoàn toàn", "Hi sinh và giữ trọn tình nghĩa"],
    answer: 2
  },
  {
    question: "Câu 8: Lan tìm đến cửa Phật nhằm mục đích gì?",
    options: ["Tìm danh lợi", "Quên đi mối tình đầu", "Chôn giấu nỗi đau và giữ lòng thanh sạch"],
    answer: 2
  },
  {
    question: "Câu 9: Hình ảnh Lan trong chùa gợi lên cảm xúc gì?",
    options: ["Thanh thản", "Bi thương, xót xa", "Vui mừng"],
    answer: 1
  },
  {
    question: "Câu 10: Khi nào Điệp thực sự tỉnh ngộ?",
    options: ["Khi vừa cưới vợ", "Khi tìm đến chùa gặp Lan", "Ngay từ đầu"],
    answer: 1
  },
  {
    question: "Câu 11: Cuộc gặp gỡ cuối cùng của Lan và Điệp diễn ra ở đâu?",
    options: ["Nhà Lan", "Chùa", "Ngoài chợ"],
    answer: 1
  },
  {
    question: "Câu 12: Vì sao cuộc gặp gỡ ấy được xem là quá muộn?",
    options: ["Vì Lan không còn yêu Điệp", "Vì Lan đã qua đời", "Vì Điệp không nhận ra Lan"],
    answer: 1
  },
  {
    question: "Câu 13: Cái chết của Lan để lại điều gì cho Điệp?",
    options: ["Sự thanh thản", "Niềm vui", "Sự day dứt và ân hận suốt đời"],
    answer: 2
  },
  {
    question: "Câu 14: Bi kịch lớn nhất của Lan là gì?",
    options: ["Mất gia đình", "Bị phản bội tiền bạc", "Mất tình yêu và tuổi xuân"],
    answer: 2
  },
  {
    question: "Câu 15: Bi kịch của Điệp chủ yếu xuất phát từ đâu?",
    options: ["Số phận ngẫu nhiên", "Sự hèn yếu, thiếu bản lĩnh", "Âm mưu của kẻ xấu"],
    answer: 1
  },
  {
    question: "Câu 16: Vở Lan và Điệp lên án điều gì trong xã hội cũ?",
    options: ["Chiến tranh", "Lễ giáo phong kiến hà khắc", "Thiên tai"],
    answer: 1
  },
  {
    question: "Câu 17: Từ 'phụ tình' trong vở có nghĩa là gì?",
    options: ["Giữ trọn lời thề", "Quên đi kỷ niệm", "Bội bạc, không giữ lời yêu"],
    answer: 2
  },
  {
    question: "Câu 18: 'Xuất gia' nghĩa là gì?",
    options: ["Đi xa làm ăn", "Vào chùa tu hành", "Lập gia đình"],
    answer: 1
  },
  {
    question: "Câu 19: 'Cửa Phật' được hiểu là gì?",
    options: ["Cổng chùa", "Nơi tu hành, nương tựa tinh thần", "Nhà riêng"],
    answer: 1
  },
  {
    question: "Câu 20: Tình cảm của Lan dành cho Điệp có đặc điểm gì?",
    options: ["Ích kỷ", "Chân thành, thủy chung", "Thay đổi nhanh chóng"],
    answer: 1
  },
  {
    question: "Câu 21: Lan chọn im lặng và hi sinh vì điều gì?",
    options: ["Vì sợ dư luận", "Vì không muốn làm gánh nặng cho Điệp", "Vì ghét Điệp"],
    answer: 1
  },
  {
    question: "Câu 22: Hình ảnh Lan tiêu biểu cho số phận nào?",
    options: ["Người phụ nữ hạnh phúc", "Người phụ nữ trong xã hội cũ bị chà đạp", "Người phụ nữ quyền lực"],
    answer: 1
  },
  {
    question: "Câu 23: Điệp đại diện cho kiểu người nào?",
    options: ["Dám đấu tranh", "Cam chịu hoàn cảnh", "Thiếu bản lĩnh trước áp lực xã hội"],
    answer: 2
  },
  {
    question: "Câu 24: Cao trào bi kịch của vở nằm ở đâu?",
    options: ["Lúc Lan và Điệp yêu nhau", "Lúc Lan xuất gia", "Lúc Điệp tìm đến chùa thì Lan đã qua đời"],
    answer: 2
  },
  {
    question: "Câu 25: Giá trị nhân đạo của vở Lan và Điệp là gì?",
    options: ["Ca ngợi sự giàu sang", "Xót thương cho số phận con người", "Đề cao quyền lực"],
    answer: 1
  },
  {
    question: "Câu 26: 'Lễ giáo phong kiến' là gì?",
    options: ["Phong tục cưới hỏi", "Hệ thống quy tắc hà khắc ràng buộc con người", "Luật pháp hiện đại"],
    answer: 1
  },
  {
    question: "Câu 27: 'Mối tình đầu' trong vở mang ý nghĩa gì?",
    options: ["Nhẹ nhàng, thoáng qua", "Sâu nặng, khó quên", "Không quan trọng"],
    answer: 1
  },
  {
    question: "Câu 28: Vì sao vở diễn lấy đi nhiều nước mắt khán giả?",
    options: ["Vì kết thúc bất ngờ", "Vì bi kịch tình yêu đầy day dứt", "Vì có yếu tố hài"],
    answer: 1
  },
  {
    question: "Câu 29: Thông điệp chính của vở Lan và Điệp là gì?",
    options: ["Hãy cam chịu số phận", "Dám sống cho tình yêu và trách nhiệm", "Tiền bạc là trên hết"],
    answer: 1
  },
  {
    question: "Câu 30: Kết cục của vở Lan và Điệp mang màu sắc nào?",
    options: ["Viên mãn", "Bi thương và tiếc nuối", "Hài hước"],
    answer: 1
  }
];

loadQuiz(questions4);
