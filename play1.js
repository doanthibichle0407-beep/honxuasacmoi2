const questions1 = [
  {
    question: "Câu 1: Lan và Điệp là vở cải lương thuộc thể loại nào?",
    options: ["Hài kịch", "Bi kịch", "Chính kịch"],
    answer: 1
  },
  {
    question: "Câu 2: Mối quan hệ giữa Lan và Điệp là gì?",
    options: ["Anh em ruột", "Bạn học", "Người yêu"],
    answer: 2
  },
  {
    question: "Câu 3: Vì sao tình yêu của Lan và Điệp không thành?",
    options: ["Gia đình giàu nghèo cách biệt", "Lan không yêu Điệp", "Điệp phản bội ngay từ đầu"],
    answer: 0
  },
  {
    question: "Câu 4: Điệp là người có tính cách như thế nào?",
    options: ["Bản lĩnh, quyết đoán", "Yếu đuối, nhu nhược", "Tàn nhẫn"],
    answer: 1
  },
  {
    question: "Câu 5: Sau khi bị phụ tình, Lan đã lựa chọn con đường nào?",
    options: ["Tìm người khác", "Trả thù Điệp", "Xuất gia cửa Phật"],
    answer: 2
  },
  {
    question: "Câu 6: Việc Lan đi tu thể hiện điều gì?",
    options: ["Sự trốn tránh", "Giữ trọn tình yêu và lòng tự trọng", "Sự oán hận"],
    answer: 1
  },
  {
    question: "Câu 7: Điệp cưới vợ vì nguyên nhân chính nào?",
    options: ["Vì hết yêu Lan", "Vì áp lực gia đình và lễ giáo", "Vì tham giàu"],
    answer: 1
  },
  {
    question: "Câu 8: Khi Điệp tìm đến chùa thì điều gì đã xảy ra?",
    options: ["Lan từ chối gặp", "Lan đã qua đời", "Lan tha thứ cho Điệp"],
    answer: 1
  },
  {
    question: "Câu 9: Cái chết của Lan để lại điều gì cho Điệp?",
    options: ["Sự nhẹ nhõm", "Sự day dứt, ân hận suốt đời", "Sự căm ghét"],
    answer: 1
  },
  {
    question: "Câu 10: Vở Lan và Điệp phê phán điều gì trong xã hội xưa?",
    options: ["Chiến tranh", "Lễ giáo phong kiến hà khắc", "Sự nghèo đói"],
    answer: 1
  },
  {
    question: "Câu 11: Nhân vật Lan tiêu biểu cho hình ảnh nào?",
    options: ["Người phụ nữ thủy chung, giàu hi sinh", "Người phụ nữ ích kỷ", "Người phụ nữ thực dụng"],
    answer: 0
  },
  {
    question: "Câu 12: Điệp là hình ảnh của kiểu người nào?",
    options: ["Dám sống vì tình yêu", "Bị động, không dám đấu tranh", "Tàn nhẫn vô tình"],
    answer: 1
  },
  {
    question: "Câu 13: Cao trào bi kịch của vở nằm ở đâu?",
    options: ["Khi Lan và Điệp gặp nhau", "Khi Điệp cưới vợ", "Khi Điệp đến chùa muộn màng"],
    answer: 2
  },
  {
    question: "Câu 14: Từ 'phụ tình' trong vở có nghĩa là gì?",
    options: ["Giúp đỡ người yêu", "Bỏ rơi, phản bội tình yêu", "Chăm sóc người yêu"],
    answer: 1
  },
  {
    question: "Câu 15: 'Xuất gia' nghĩa là gì?",
    options: ["Lấy chồng xa", "Rời bỏ gia đình đi tu", "Đi làm ăn xa"],
    answer: 1
  },
  {
    question: "Câu 16: Vì sao Lan không oán trách Điệp?",
    options: ["Vì còn yêu và cảm thông", "Vì sợ Điệp", "Vì đã quên"],
    answer: 0
  },
  {
    question: "Câu 17: Tình yêu của Lan và Điệp được miêu tả như thế nào?",
    options: ["Hời hợt", "Chân thành nhưng dang dở", "Toan tính"],
    answer: 1
  },
  {
    question: "Câu 18: Nỗi đau lớn nhất của Lan là gì?",
    options: ["Nghèo đói", "Bị phản bội trong tình yêu", "Bị gia đình ruồng bỏ"],
    answer: 1
  },
  {
    question: "Câu 19: Khi Lan mất, Điệp nhận ra điều gì?",
    options: ["Tiền quan trọng hơn", "Tình yêu là vô nghĩa", "Giá trị thiêng liêng của tình yêu"],
    answer: 2
  },
  {
    question: "Câu 20: Kết thúc vở Lan và Điệp mang màu sắc gì?",
    options: ["Hạnh phúc", "Hài hước", "Bi thương, day dứt"],
    answer: 2
  },
  {
    question: "Câu 21: 'Lễ giáo phong kiến' là gì?",
    options: ["Luật hiện đại", "Chuẩn mực đạo đức hà khắc thời xưa", "Phong tục vui chơi"],
    answer: 1
  },
  {
    question: "Câu 22: Vì sao Lan được xem là nhân vật bi kịch?",
    options: ["Chết trẻ", "Hi sinh tình yêu mà không được đáp lại", "Nghèo khổ"],
    answer: 1
  },
  {
    question: "Câu 23: Điệp sai lầm lớn nhất ở điểm nào?",
    options: ["Không yêu Lan", "Không dám bảo vệ tình yêu", "Quá giàu"],
    answer: 1
  },
  {
    question: "Câu 24: Tình yêu trong Lan và Điệp mang ý nghĩa gì?",
    options: ["Tạm bợ", "Thiêng liêng nhưng mong manh", "Thực dụng"],
    answer: 1
  },
  {
    question: "Câu 25: Hình ảnh cửa chùa tượng trưng cho điều gì?",
    options: ["Sự trốn chạy", "Sự thanh tịnh và đoạn tuyệt trần thế", "Niềm vui"],
    answer: 1
  },
  {
    question: "Câu 26: Lan chọn im lặng thay vì trách móc vì sao?",
    options: ["Vì cam chịu", "Vì lòng vị tha", "Vì sợ hãi"],
    answer: 1
  },
  {
    question: "Câu 27: Vở Lan và Điệp gợi cho người xem cảm xúc gì?",
    options: ["Vui vẻ", "Xót xa, thương cảm", "Hồi hộp"],
    answer: 1
  },
  {
    question: "Câu 28: Từ 'day dứt' nghĩa là gì?",
    options: ["Vui sướng", "Đau khổ, ám ảnh trong lòng", "Tức giận"],
    answer: 1
  },
  {
    question: "Câu 29: Số phận Lan phản ánh điều gì?",
    options: ["Sự bất công với phụ nữ trong xã hội cũ", "Cuộc sống giàu sang", "Sự may mắn"],
    answer: 0
  },
  {
    question: "Câu 30: Giá trị nhân văn lớn nhất của vở Lan và Điệp là gì?",
    options: ["Ca ngợi quyền lực", "Đề cao tình yêu chân thành và cảm thương số phận phụ nữ", "Khuyên con người sống ích kỷ"],
    answer: 1
  }
];

loadQuiz(questions1);
