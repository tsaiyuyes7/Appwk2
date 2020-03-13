import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

  const Bandlist = () => {
    return (
      <View style={styles.singerSection}>
       <Text style={styles.singername}>One ok rock</Text>
       <View>
       <Image  style={styles.singerimagestyle}
        source={require("../img/oor.png")}
       />
       </View> 
      </View>
    );
  }

  const styles = StyleSheet.create({
    singerSection: {
     flexDirection: "row",
     justifyContent: "flex-start",
     height: 90,
     alignItems: 'center',
    },
    singername: {
      marginLeft:24,
      flex:1,
      color: '#736357',
      fontWeight: 'bold',
      fontSize:20,
      letterSpacing:2
    },
    singerimagestyle:{
      marginRight:24,
      height:64,
      width:64
    },
  });
  
  export default Bandlist;
