import { faceName, faceValue, faceCompare } from "../src/face";

it('face translates name', () => {
  const f = 'Q';
  expect(faceName(f)).toEqual('Queen');
});

it('face translates value', () => {
  const f = 'Q';
  expect(faceValue(f)).toEqual(12);
});

describe('face comparison', () => {
  it('less than', () => {
    const f1 = '4';
    const f2 = '10';
    expect(faceCompare(f1, f2)).toEqual(-1);
  });

  it('same', () => {
    const f1 = 'J';
    const f2 = 'J';
    expect(faceCompare(f1, f2)).toEqual(0);
  });

  it('less than', () => {
    const f1 = '3';
    const f2 = '2';
    expect(faceCompare(f1, f2)).toEqual(1);
  });
})
