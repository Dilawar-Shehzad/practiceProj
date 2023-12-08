import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { dummaData } from './src/utils/DummyData';
const { width, height } = Dimensions.get('screen');

const App = () => { 
  return (
    <View style={{
      paddingTop: 20,
      paddingHorizontal:30
    }}>
     <Text>
  HEELO TEXT!
  </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    fontSize: 12,
    color: 'red',
    marginHorizontal: 20,
  },
  mainCont: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: 'center',
    marginHorizontal: 20,
    height: 40,
    paddingLeft: 12
  },

});

export default App;
