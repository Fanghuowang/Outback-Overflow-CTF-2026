# Predictable Logs

- **Category:** crypto
- **Points:** 75
- **Difficulty tags:** hard
- **Author:** max
- **Solves:** 91

## Description

We recovered an encrypted audit log from a legacy service. Every record is encrypted with AES-256-CBC, which is supposed to be super secured..., right?
The last record holds the flag.

Can you decrypt it?

Files: `logs.jsonl`, `generate.py`

Flag format: `OO{...}`

## Hints

- Where do the IVs come from? Python's `random` module is not a CSPRNG.
- MT19937 has 624 32-bit words of state. How many IV words do you get for free?
- Untemper the IV words, clone the generator, then work out which outputs became the key for record 157.

## Provided files

- logs.jsonl
- generate.py
