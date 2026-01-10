import sys
import librosa
import numpy as np

# Nhận đường dẫn file audio từ Node
audio_path = sys.argv[1]

# Load audio
y, sr = librosa.load(audio_path)

# Trích xuất cao độ (pitch)
pitches, magnitudes = librosa.piptrack(y=y, sr=sr)

# Lấy pitch có biên độ lớn nhất mỗi frame
pitch_values = []
for i in range(pitches.shape[1]):
    index = magnitudes[:, i].argmax()
    pitch = pitches[index, i]
    if pitch > 0:
        pitch_values.append(pitch)

# Nếu không có pitch → điểm thấp
if len(pitch_values) == 0:
    print(50)
    sys.exit()

# Độ ổn định cao độ (độ lệch chuẩn)
pitch_std = np.std(pitch_values)

# Quy đổi ra điểm (càng ổn định càng cao)
score = max(60, min(100, int(100 - pitch_std)))

print(score)
