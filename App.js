import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={text.container}>
        <Text>葉司淇</Text>
    </View>
      <View style={text.container}>
        <Text>110619021</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFADC0',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor:  '#DD9BA7'
  },
});

const text = StyleSheet.create({
  container: {
    backgroundColor: '#FFADC0',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor:  '#DD9BA7'
  },
});
