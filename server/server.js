const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { execFile } = require("child_process");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

const PYTHON = process.env.PYTHON || "python3";
const PYTHON_SCRIPT = "analyze.py";

app.post("/upload", upload.single("audio"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No audio file" });
  }

  const audioPath = path.resolve(req.file.path);

  execFile(
    PYTHON,
    [PYTHON_SCRIPT, audioPath],
    { cwd: __dirname },
    (err, stdout, stderr) => {
      // xóa file sau khi xử lý
      fs.unlink(audioPath, () => {});

      if (err) {
        console.error("AI ERROR:", stderr);
        return res.status(500).json({ error: "AI processing error" });
      }

      const score = parseInt(stdout.trim(), 10) || 50;
      res.json({ score });
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 AI server running on port", PORT);
});
