# Writeup: Hardcoded

**Category:** rev · **Points:** 100 · **Status:** solved

**Flag:** `OO{stringz_h1de_m4ny_int3resting_things}`

## Provided file
- `chal` — ELF 64-bit LSB PIE executable, x86-64, dynamically linked, **not stripped**

## Solution

Running the binary only prints a greeting:

```bash
$ chmod +x chal && ./chal
Hello from the outback :)
```

Since the binary is not stripped, symbol names survive. Listing the symbols reveals two global objects:

```bash
$ readelf -sW chal | grep flag
  21: 0000000000004018     8 OBJECT  GLOBAL DEFAULT   25 flag2
  35: 0000000000004020     8 OBJECT  GLOBAL DEFAULT   25 flag
```

`flag` and `flag2` are pointers stored in the `.data` section. Dumping the constant strings shows the two halves:

```bash
$ objdump -s -j .data chal
 4018 1e200000 00000000 28200000 00000000   ...(...........

$ objdump -s -j .rodata chal
 2010 6865206f 75746261 636b203a 29005f74  he outback :)._t
 2020 68696e67 737d0000 4f4f7b73 7472696e  hings}..OO{strin
 2030 677a5f68 3164655f 6d346e79 5f696e74  gz_h1de_m4ny_int
 2040 33726573 74696e67 00                  3resting.
```

- `flag2` → `0x201e` → `_things}`
- `flag` → `0x2028` → `OO{stringz_h1de_m4ny_int3resting`

Concatenate them in order (`flag` then `flag2`):

```
OO{stringz_h1de_m4ny_int3resting_things}
```

A plain `strings chal` also shows both halves (`OO{stringz_h1de_m4ny_int3resting` and `_things}`), so no disassembly is strictly needed — the hint "Not everything a binary contains is something it prints" confirms the static approach.
