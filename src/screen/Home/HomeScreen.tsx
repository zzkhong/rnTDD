import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store/reducer';
import {setTitle} from './HomeActions';
import {Props} from './HomeTypes';

const HomeScreen = ({navigation}: Props) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const title = useSelector((state: RootState) => state.home.title);

  useEffect(() => {
    setText('useEffect triggered');
  }, []);

  useEffect(() => {
    dispatch(setTitle('RNTDD'));
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Text testID="homeScreen_title">{title}</Text>
      <Text testID="homeScreen_text">{text}</Text>
      <TouchableOpacity
        testID="homeScreen_detailButton"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
