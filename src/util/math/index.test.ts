import {add, addWithTrack} from '.';

// Simple Functionality Test
test('#1 - add', () => {
  expect(add(1, 2)).toEqual(3);
});

// If we assume that the track function is sending statistics to analytics
// we won't want it to be called as it may break the unit testing
// thus, we can mock the function at here using jest.mock
jest.mock('util/analytics');

test('#2 - addWithTrack', () => {
  expect(addWithTrack(1, 2)).toBeDefined();
  expect(addWithTrack(1, 2)).toEqual(3);
});
