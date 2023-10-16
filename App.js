import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () =>{

  return (
    <SafeAreaView >
      <View style={styles.mainCont} >
        <Text style={styles.sectionContainer}>Hello React Native</Text>
        <Text style={styles.sectionContainer}>Hello React Native</Text>
        <Text style={styles.sectionContainer}>Hello React Native</Text>
        <Text style={styles.sectionContainer}>Hello React Native</Text>
        <Text style={styles.sectionContainer}>Hello React Native</Text>
        <Text style={styles.sectionContainer}>Hello React Native</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    fontSize: 18
  },
  mainCont: {
    marginTop: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
