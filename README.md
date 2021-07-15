## deck of cards classes

This repo contains a set of Typescript classes to represent a deck of cards.  There is functionality to
- populate new deck
- shuffle deck
- deal cards from deck
- compare cards' suits and values
- add cards to an existing/empty deck (e.g. a "discard" deck/pile)

### installation
Requires node 12+ (tested on node 14)

Clone repo then
`npm ci` to install bits and dependencies

### run tests
`npm run test` will execute unit tests

`npm run dev` runs the dev harness; it creates a deck, shuffles it, then deals all the cards out, and logs some output based on whether the current card is the same face and same suit as the previous card.

