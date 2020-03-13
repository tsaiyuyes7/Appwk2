import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const Header = () => {
    return (
      <View style={styles.headerstyle}>
       <Text style={styles.headertext}>Albums</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    headerstyle: {
      backgroundColor: '#EAA19D',
      alignItems: 'center',
      justifyContent: 'center',
      height: 90,
      paddingTop: 30,
      shadowColor: '#000',
      shadowOffset: {width: 0,height: 2},
      shadowOpacity: 1.0,
      elevation: 8
  
    },
    headertext: {
      fontSize: 20,
      color: '#736357',
      letterSpacing:2
      
    }
  
  });
  
  export default Header;
