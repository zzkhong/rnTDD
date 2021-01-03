import React from 'react';
import {act, create} from 'react-test-renderer';
import {ListInput} from '.';

const tree = create(<ListInput />);

// Snapshot Test (UI Rendering Matching Test)
// If updates are expected (such as background color change)
// Just run `yarn test -u` to update the snapshots
test('#1 - ListInput Snapshot', () => {
  expect(tree).toMatchSnapshot();
});

// State Change
test('#2 - ListInput state input', () => {
  // Grab TextInput and trigger onChangeText
  const textInput = tree.root.findByProps({testID: 'listInput_textInput'})
    .props;
  act(() => textInput.onChangeText('New Input'));

  // Expect Text to have same value as input
  const text = tree.root.findByProps({testID: 'listInput_text'}).props;
  expect(text.children).toEqual('New Input');
  expect(text.children).not.toEqual('');
});
