# Panopticon

- **Category:** web
- **Points:** 60
- **Difficulty tags:** medium
- **Author:** digitalsurf
- **Solves:** 52

## Connection info

http://infra.hscyber.org:3000

## Description

My boss's fancy new dashboard watches the whole network. He swears it's locked down. Funny thing about things that watch everything....

Flag format: `OO{...}`

## Hints

- What is it, and exactly which version? A thing can't lie about its own health.
- The plugin path handler is a little too trusting about where "up" ends. Mind how your HTTP client treats ../ before it ever leaves your machine.
- You can read files, but you can't list them. So where does a running process keep the things it was told at birth? /proc remembers.
