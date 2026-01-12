const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const uploadFolder = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e6);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

app.post("/upload", upload.single("audio"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Không có file audio" });
  }

  console.log("✅ Audio uploaded:", req.file.filename);

  const score = Math.floor(Math.random() * 40) + 60; 
  res.json({ score });
});

app.use("/uploads", express.static(uploadFolder));

app.listen(PORT, () => {
  console.log(`🚀 Karaoke AI server đang chạy tại http://localhost:${PORT}`);
});
