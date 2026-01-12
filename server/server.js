const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static("public"));

const upload = multer({
  dest: path.join(__dirname, "uploads")
});

app.post("/upload", upload.single("audio"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No audio" });
  }

  const score = Math.floor(Math.random() * 40) + 60;
  res.json({ score });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Karaoke AI server chạy tại port", PORT);
});
