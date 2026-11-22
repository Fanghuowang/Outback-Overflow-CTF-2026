# Live Service Mirrors

The 31 challenges that shipped **no source file** — 9 of them have live services. Their client-side captures (HTML/CSS/JS, response headers, and observed API formats) live in a `live/` subfolder inside each matching challenge folder. **Server-side source is not exposed**, so these are the closest reproducible copies for local practice.

## Captured services

| Challenge | Folder | Live service | Stack | Captured |
|---|---|---|---|---|
| ChatBot | `ai/ChatBot/live/` | `http://infra.hscyber.org:3005` | Werkzeug/Python 3.11 | Homepage, headers, `POST /api/chat` sample reply |
| My First Website | `web/My First Website/live/` | `https://infra.hscyber.org:3013` | nginx | Static HTML page |
| Super Real Headers | `web/Super Real Headers/live/` | `http://infra.hscyber.org:3012` | Werkzeug/Python 3.10 | 403 page (header-gated), robots.txt hint |
| Rogue Rojo | `web/Rogue Rojo/live/` | `http://infra.hscyber.org:3010` | Express | Homepage, submit JS, `/health`, `/submit` probes |
| Fetch Quest I | `web/Fetch Quest I/live/` | `http://infra.hscyber.org:3001` | Werkzeug/Python 3.11 | Homepage + `url` POST form |
| Ask Athena | `web/Ask Athena/live/` | `http://infra.hscyber.org:3006` | Werkzeug/Python 3.11 | Homepage, headers |
| Panopticon | `web/Panopticon/live/` | `http://infra.hscyber.org:3000` | Grafana | Full front-end bundle (12 JS/CSS/font assets) |
| Crate Expectations | `web/Crate Expectations/live/` | `http://infra.hscyber.org:3020` | Werkzeug/Python 3.11 | Homepage, preview JS, `/api/preview` probe |
| Outback Terminal I | `pwn/Outback Terminal I/live/` | `nc infra.hscyber.org 4001` | custom TCP | Connection banner |

## How to use for practice

- Open the `index.html` in any `live/` folder to see the exact page served (API calls still point at the live host, so full interactivity requires the live service).
- Read `client-script.js` / inline scripts to reconstruct the request format the server expects.
- `probe_*.txt` files show real request/response pairs from live endpoints.
- `response-headers.json` captures the response headers.
- The pwn banner is in `pwn/Outback Terminal I/live/banner.txt`.

## Challenges with no service

These have no source file **and** no live service — pure research/OSINT/meta/chain puzzles:
`Read The Rules`, `Thank The Sponsors`, `Player Feedback`, `DisgruntledDev II/III/IV`, `Hidden In The Streams 2`, `CERT UP`, `Git Blame I–V`, `Where Did My Mate Go? II/III`, `Robotic LARP?`, `Password Cracking`, `Outback Terminal II/III`, `Fetch Quest II/III` (sequels to Fetch Quest I), `Tagged Page`.
