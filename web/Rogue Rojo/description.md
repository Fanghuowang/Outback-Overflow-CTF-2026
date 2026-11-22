# Rogue Rojo

- **Category:** web
- **Points:** 225
- **Difficulty tags:** hard
- **Author:** digitalsurf
- **Solves:** 4

## Connection info

http://infra.hscyber.org:3010

## Description

A Roblox developer left their `rojo serve` dev server running on localhost and will click any link you send them.

The flag is buried somewhere in their project source. Steal it.

The dev server API lives on port `34872`, the same port Rojo always uses. It only listens on loopback, so you can't hit it directly. But the developer has a browser...

> **Real-world context:** CVE-2026-97875 (discovered by digitalsurf), the Rojo dev server (< 7.7.0) binds to localhost but performs no Host or Origin header validation, allowing DNS rebinding from any web page. Same bug class hit rmcp and dynoxide the same quarter. CVSS 8.1.

Flag format: `OO{...}`

## Hints

- The service only listens on localhost — but the bot has a browser.
- The API checks who you are, not where you're from... actually, it doesn't check where you're from at all.
- Look into DNS rebinding. Services like rbndr.us let you set up a hostname that alternates between two IPs.
