import Card from "./card";
import { Faces } from "./face";
import { Suits } from "./suit";

export default class Deck {
  private cards: Card[] = [];

  public constructor(newDeck = true) {
    if(newDeck) {
      for (const suit in Suits) {
        for (const face in Faces) {
          this.add(new Card(Suits[suit], Faces[face]));
        }
      }
    }
  }

  public add(c: Card) {
    this.cards.push(c);
  }

  public toString(): string {
    return this.cards.toString();
  }

  public cardsRemaining(): number {
    return this.cards.length;
  }

  public shuffle(): void {
    // state of the art is the modified Fisher-Yates algo
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // destructuring is magic - ok, not really
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  public showTopCard(): Card | undefined {
    return this.cards[0];
  }

  public dealOneCard(): Card | undefined {
    return this.cards.shift();
  }
}
