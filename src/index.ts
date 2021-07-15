import Deck from "./deck";

const d = new Deck();

console.log('New deck: ' + d.toString());

d.shuffle();

console.log('Shuffled: ' + d.toString());

let prev;
do {
  const c = d.dealOneCard();
  if (!c) {
    break;
  }
  console.log(c.toString());
  if (prev) {
    console.log(c.compareFace(prev), c.compareSuit(prev));
  }
  prev = c;
} while(true);
