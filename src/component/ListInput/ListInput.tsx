import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  onAddItem: (item: string) => void;
}

const ListInput: React.FC<Props> = ({onAddItem}) => {
  const [input, setInput] = useState('');

  return (
    <View style={styles.root}>
      <Text testID="listInput_text">{input}</Text>
      <TextInput
        testID="listInput_textInput"
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
  },
});

export default ListInput;
