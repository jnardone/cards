import Card from "../src/card";
import Deck from "../src/deck"

describe('deck tests', () => {
  it('creates new deck', () => {
    const d = new Deck();
    expect(d).toBeTruthy();
    expect(d.cardsRemaining()).toEqual(52);
    // first card in unshuffled deck
    expect(d.showTopCard()).toEqual(new Card('Clubs','2'));
  })

  it('shuffles deck',() => {
    const sd = new Deck();
    sd.shuffle();
    const d = new Deck();
    // a little bogus -- it is POSSIBLE a shuffled deck could come out exactly
    // like an unshuffled one, but we'll take that chance most of the time.
    expect(d.toString()).not.toEqual(sd.toString());
  })

  it('deals a card and removes it', () => {
    const d = new Deck();
    expect(d.cardsRemaining()).toEqual(52);
    const c = d.dealOneCard();
    expect(d.cardsRemaining()).toEqual(51);
  })

  it('returns undefined when no more cards', () => {
    const d = new Deck();
    for (let i=0; i<51; i++) {
      d.dealOneCard();
    }
    expect(d.cardsRemaining()).toEqual(1);
    const c1 = d.dealOneCard();
    expect(c1).toBeTruthy();
    expect(d.cardsRemaining()).toEqual(0);

    const c2 = d.dealOneCard();
    expect(c2).toBeFalsy();
    expect(d.cardsRemaining()).toEqual(0);
  })
})
