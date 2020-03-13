import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const Albumlist = () => {
    return (
      <View style={styles.headerstyle}>
       <Text style={styles.headertext}>Albums</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    headerstyle: {
      backgroundColor: '#F8F8F8',
      alignItems: 'center',
      justifyContent: 'center',
      height: 90,
      paddingTop: 30,
      shadowColor: '#000',
      shadowOffset: {width: 0,height: 3},
      shadowOpacity: 0.8,
      elevation: 2,
  
    },
    headertext: {
      fontSize: 20,
    }
  
  });
  
  export default Albumlist;
