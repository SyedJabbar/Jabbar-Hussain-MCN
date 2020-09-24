import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={styles.innerView}
          onStartShouldSetResponder={() => alert('Hello Pakistan')}>
          <Text style={styles.paragraph}>
             Click Me Please</Text></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
    backgroundColor: 'white',
    padding: 8,
  },
  innerView: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: 'blue',
    marginTop: 200,
    marginBottom: 200,
    marginLeft: 5,
    marginRight: 5,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
