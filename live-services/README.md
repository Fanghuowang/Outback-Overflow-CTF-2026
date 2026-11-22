# Live Service Mirrors

Snapshots of the **live services** for challenges that shipped **no source file**. These are client-side mirrors — the HTML/CSS/JS the browser receives, response headers, and recorded API request/response formats. **Server-side source code is not exposed by these services**, so this is the closest reproducible copy available for local practice.

## Captured services

| Challenge | Live service | Stack | Captured |
|---|---|---|---|
| ChatBot (ai) | `http://infra.hscyber.org:3005` | Werkzeug/Python 3.11 | Homepage, headers, `POST /api/chat` sample reply |
| My First Website (web) | `https://infra.hscyber.org:3013` | nginx | Static HTML page |
| Super Real Headers (web) | `http://infra.hscyber.org:3012` | Werkzeug/Python 3.10 | 403 page (header-gated), robots.txt hint |
| Rogue Rojo (web) | `http://infra.hscyber.org:3010` | Express | Homepage, submit JS, `/health`, `/submit` probes |
| Fetch Quest I (web) | `http://infra.hscyber.org:3001` | Werkzeug/Python 3.11 | Homepage + `url` POST form |
| Ask Athena (web) | `http://infra.hscyber.org:3006` | Werkzeug/Python 3.11 | Homepage, headers |
| Panopticon (web) | `http://infra.hscyber.org:3000` | Grafana | Full front-end bundle (12 JS/CSS/font assets) |
| Crate Expectations (web) | `http://infra.hscyber.org:3020` | Werkzeug/Python 3.11 | Homepage, preview JS, `/api/preview` probe |
| Outback Terminal I (pwn) | `nc infra.hscyber.org 4001` | custom TCP | Connection banner |

## How to use for practice

- Open each `index.html` in a browser to see the exact page the challenge served (note: API calls point at the live host, so they won't work fully offline).
- Read `client-script.js` / `index.html` inline scripts to reconstruct the request format the server expects.
- The `probe_*.txt` files show real request/response pairs from the live endpoints.
- For the pwn banner, see `pwn/Outback Terminal I/banner.txt`.

## Challenges with no live service

These have no downloadable source **and** no live HTTP service — they are pure research/OSINT/meta/chain puzzles:
`Read The Rules`, `Thank The Sponsors`, `Player Feedback`, `DisgruntledDev II/III/IV`, `Hidden In The Streams 2`, `CERT UP`, `Git Blame I–V`, `Where Did My Mate Go? II/III`, `Robotic LARP?`, `Password Cracking`, `Outback Terminal II/III`, `Fetch Quest II/III` (sequels to Fetch Quest I), `Tagged Page`.
