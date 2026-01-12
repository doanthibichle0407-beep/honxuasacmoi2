const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { execFile } = require("child_process");
const path = require("path");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("audio"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No audio" });
  }

  const audioPath = path.resolve(req.file.path);

  execFile(
    "python",
    ["analyze.py", audioPath],
    { cwd: __dirname },
    (err, stdout) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "AI error" });
      }

      const score = parseInt(stdout.trim());
      res.json({ score });
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("🚀 AI server running on port", PORT)
);
