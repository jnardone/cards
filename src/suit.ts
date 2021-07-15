export const Suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'] as const;
export type Suit = typeof Suits[number];

export function suitName(s: Suit): string {
  // in this case our enum-type thing is also our value but would not have to be
  return s;
}
