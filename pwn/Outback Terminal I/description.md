# Outback Terminal I

- **Category:** pwn
- **Points:** 100
- **Difficulty tags:** easy
- **Author:** digitalsurf
- **Solves:** 109

## Connection info

nc infra.hscyber.org 4001

## Description

OutbackCorp's IT team set up a remote management terminal so technicians can run basic network diagnostics without SSH access. It's supposed to be locked down to just a few safe commands.

Supposed to be.

Flag format: `OO{...}`

## Hints

- The ping command takes your input and passes it straight to the system. What happens if you add a little something extra after the IP?
- In a Linux shell, the semicolon ; lets you run multiple commands on one line.
