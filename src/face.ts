export const Faces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'] as const;
export type Face = typeof Faces[number];

const names: { [key in Face]: string } = {
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '10': '10',
  'J': 'Jack',
  'Q': 'Queen',
  'K': 'King',
  'A': 'Ace'
}

const values: { [key in Face]: number } = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14
}


export function faceName(f: Face): string {
  return names[f];
}

export function faceValue(f: Face): number {
  return values[f];
}

export function faceCompare(f1: Face, f2: Face): number {
  return Math.sign(values[f1] - values[f2]);
}
