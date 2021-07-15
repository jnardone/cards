import Card from "../src/card"

describe('card', () => {
  it('creates a card', () => {
    const c = new Card('Clubs', 'K');
    expect(c).toBeTruthy();
    expect(c.face).toEqual('K');
    expect(c.suit).toEqual('Clubs');
    expect(c.toString()).toEqual('King of Clubs');
  });

  it('card value comparison', () => {
    const c1 = new Card('Clubs', '5');
    const c2 = new Card('Spades', 'Q');
    const c3 = new Card('Diamonds', '5');
    const c4 = new Card('Clubs', '2');
    expect(c1.compareFace(c2)).toEqual(-1);
    expect(c1.compareFace(c3)).toEqual(0);
    expect(c1.compareFace(c4)).toEqual(1);
    expect(c1.compareSuit(c2)).toEqual(false);
    expect(c1.compareSuit(c4)).toEqual(true);
  })
})
