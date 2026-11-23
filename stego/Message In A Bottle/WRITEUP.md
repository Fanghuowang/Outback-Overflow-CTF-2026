# Writeup: Message In A Bottle

**Category:** stego · **Points:** 100 · **Status:** solved (flag confirmed by solver)

**Flag:** `oo{fr0m_s0und_t0_p1x3ls_158b8e3d}`

## Provided files
- `waves.wav` — 16-bit mono PCM, 44100 Hz
- `beach.jpg` — 1600x1000 JPEG

## Solution

The hint "one of them is the key to the other" points at the audio file as the key to the image.

### 1. The audio reveals the password
Rendering `waves.wav` as a spectrogram shows text embedded in the frequency domain:

```
steghide pw: tideaf7d
```

```python
import wave, numpy as np, matplotlib.pyplot as plt
w = wave.open('waves.wav','rb')
data = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16)
plt.specgram(data, Fs=44100, cmap='gray')
plt.savefig('spectrogram.png', dpi=150)
```

### 2. Use the password to extract from the JPEG
```bash
steghide extract -sf beach.jpg -p tideaf7d -xf shell.png
```
This yields `shell.png`.

### 3. Read the flag from the blue channel LSBs
The flag is embedded in the least-significant bits of the **blue channel** of `shell.png`:

```python
from PIL import Image
import numpy as np
arr = np.array(Image.open('shell.png'))
bits = (arr[:,:,2] & 1).flatten()          # blue channel = index 2
data = np.packbits(bits).tobytes()
print(data[:200])                          # -> oo{fr0m_s0und_t0_p1x3ls_158b8e3d}
```

The flag text ("from sound to pixels") describes the whole chain: audio → password → steghide → pixel LSBs.

## The shell game (decoy flags)

This challenge was seeded with multiple fake flags to mislead. All of the following are **decoys**:

| Location | Decoy |
|---|---|
| `beach.jpg` EXIF `ImageDescription` | `oo{s4nd_1n_th3_p1x3ls_162acc0f}` |
| `waves.wav` LIST/INFO/ICMT metadata | `oo{t1d3s_c4rry_s3cr3ts_14f33658}` |
| `shell.png` tEXt comment | `oo{sh3ll_g4m3_w0n_e8af0d64}` |
| `shell.png` red channel LSB | `oo{b1ts_4nd_b0ttl3s_6a6f7c0d}` |
| Challenge description hidden HTML span | `oo{w4sh3d_4sh0r3_ff201651}` |
| Challenge description Unicode tag chars | `oo{m3ss4g3_1n_4_b0ttl3_3aab9540}` |

The correct one is the **blue** channel LSB flag.
