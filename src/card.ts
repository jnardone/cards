import { Face, faceName, faceCompare } from "./face";
import { Suit, suitName } from "./suit";

export default class Card {
  public constructor(public suit: Suit, public face: Face) {
  }

  public toString() {
    return `${faceName(this.face)} of ${suitName(this.suit)}`;
  }

  // compares face values, irrespective of suit
  public compareFace(c: Card): number {
    return faceCompare(this.face, c.face);
  }

  // compares suits
  public compareSuit(c:Card): boolean {
    return this.suit === c.suit;
  }
}
