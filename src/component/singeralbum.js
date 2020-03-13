import React from 'react';
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native';

  const Bandlist = () => {
    return (
      <ScrollView>
        <View style={styles.singerSection}>
          <Text style={styles.singername}>ONE OK ROCK</Text>
            <View>
             <Image  style={styles.singerimagestyle}
                     source={require("../img/oor.png")}
             />
            </View> 
        </View>
        <View style={styles.navsection}>
          <Text style={styles.albumbtn}>album</Text>
        </View>
        <View style={styles.newalbumsection}>
          <Text style={styles.newalbumtitle}>New album</Text>
          <Image  style={styles.newalbumImage}
                  source={require("../img/eyeofstorm.jpg")} />
          <Text style={styles.eyeofstormtitle}>EYE OF STORM</Text>
        </View>
        <View>
          <Text  style={styles.newalbumtitle}>Trending this week</Text>
          <View style={styles.trendsection}>
              <View style={styles.trend1}>
              <Image
                  style={styles.trendImage}
                  source={require("../img/jinsenoboku.png")} 
                />
                <Text style={styles.trendalbumname}>人生x樸</Text>
              </View>
              <View style={styles.trend}>
              <Image
                  style={styles.trendImage}
                  source={require("../img/ambitions.jpg")} 
                />
                <Text style={styles.trendalbumname}>Ambitions</Text>
              </View>
              <View style={styles.trend}>
              <Image
                  style={styles.trendImage}
                  source={require("../img/35xxxv.jpg")} 
                />
                <Text style={styles.trendalbumname}>35xxxv</Text>
              </View>
          </View>
          </View>
          <View >
            <Text style={styles.allalbumtitle}>All album</Text>
            <View style={styles.allalbumsection}>
              <View style={styles.all1}>
                <Image 
                  style={styles.allalbumImg}
                  source={require("../img/reference.png")} 
                />
                <Text style={styles.trendalbumname}>殘響Reference</Text>
              </View>
              <View style={styles.all2}>
                <Image 
                  style={styles.allalbumImg}
                  source={require("../img/nichesydrome.jpg")} 
                />
                <Text style={styles.trendalbumname}>Niche Syndrome</Text>
              </View>
            </View>
          </View>
      </ScrollView>
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
    navsection:{
      height:25,
      
    },
    albumbtn: {
      borderRadius: 15,
      paddingLeft:17,
      backgroundColor: '#EAA19D',
      color: '#fff',
      width: 85,
      height:25,
      marginLeft: 24,
      paddingTop: 2,
      letterSpacing: 2
    },
    newalbumsection: {
      marginTop: 24
    },
    newalbumtitle:{
      marginLeft:24,
      marginBottom: 24,
      fontSize: 20,
      color: '#736357',
      letterSpacing: 2,
      fontWeight: 'bold'     
    },
    newalbumImage:{
      borderRadius: 10,
      width: 315,
      height: 187,
      marginLeft:24
    },
    eyeofstormtitle: {
      marginTop: 24,
      fontSize: 25,
      fontWeight: 'bold',
      letterSpacing: 2,
      paddingLeft: 80,
      color: '#EAA19D',
      marginBottom: 20
    },
    trendsection: {
      flexDirection: "row",
     justifyContent: "flex-start",
     height:150
    },
    trend1:{
      paddingLeft: 24,
    },
    trend:{
      paddingLeft: 18,
    },
    trendImage: {
      borderRadius: 10,
      height:93,
      width:93
    },
    trendalbumname:{
      color: '#736357',
      letterSpacing:1,
      fontSize:12,
      paddingTop:8
    },
    allalbumtitle:{
      marginLeft:24,
      marginBottom:24,
      fontSize: 20,
      color: '#736357',
      letterSpacing: 2,
      fontWeight: 'bold'   
    },
    allalbumsection: {
     flexDirection: "row",
     justifyContent: "flex-start",
     height: 300,
    },
    allalbumImg: {
      borderRadius:10,
      width:155,
      height: 155
    },
    all1: {
      paddingLeft: 24
    },
    all2: {
      paddingLeft: 10
    }
  });
  
  export default Bandlist;
