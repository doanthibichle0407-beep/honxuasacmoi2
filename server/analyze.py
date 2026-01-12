import sys
import librosa
import numpy as np

audio_path = sys.argv[1]

y, sr = librosa.load(audio_path, sr=None)

pitches, magnitudes = librosa.piptrack(y=y, sr=sr)

pitch_values = []
for i in range(pitches.shape[1]):
    index = magnitudes[:, i].argmax()
    pitch = pitches[index, i]
    if pitch > 0:
        pitch_values.append(pitch)

if len(pitch_values) == 0:
    print(50)
    sys.exit()

pitch_std = np.std(pitch_values)
score = max(60, min(100, int(100 - pitch_std)))

print(score)
