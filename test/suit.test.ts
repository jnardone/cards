import { suitName } from "../src/suit";

it('suit prints string', () => {
  const s = 'Diamonds';
  expect(suitName(s)).toEqual('Diamonds');
});
