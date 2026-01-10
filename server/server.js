const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

const upload = multer({
  dest: "C:/karaoke_upload"
});

app.post("/upload", upload.single("audio"), (req, res) => {
  const score = Math.floor(Math.random() * 40) + 60;
  res.json({ score });
});

app.listen(3000, () => {
  console.log("🚀 Karaoke AI server đang chạy tại http://localhost:3000");
});
