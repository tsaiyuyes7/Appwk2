import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Header from './src/component/Header.js'
import BandList from './src/component/Singer.js'


const App = () => {
  return (
    <View>
       <Header />
       <BandList />
    </View>
   
  );
}



export default App;
