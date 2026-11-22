# Ask Athena

- **Category:** web
- **Points:** 50
- **Difficulty tags:** medium
- **Author:** digitalsurf
- **Solves:** 88

## Connection info

http://infra.hscyber.org:3006

## Description

OutbackCorp just rolled out "Athena", an internal AI assistant that answers employee questions using the company wiki. The dev team was pretty proud of it — until someone noticed it's reachable from the outside.

They swear the important endpoints are locked down. Maybe they missed one.

> **Real-world context:** This vulnerability class was found on a global bank's bug bounty program affecting an internal AI knowledge base, rated high severity and paid out $1,500.

Flag format: `OO{...}`

## Hints

- Check if the API documents itself. Most modern APIs do.
- Not every endpoint checks for a login. Try talking to the AI directly.
