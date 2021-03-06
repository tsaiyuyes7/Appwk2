import React from 'react';
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native';
import BandData from '../json/albums.json'

  const Bandlist = () => {
    return (
      <ScrollView>
        <View style={styles.singerSection}>
    <Text style={styles.singername}>{BandData[0].singer}</Text>
            <View>
             <Image  style={styles.singerimagestyle}
                     source={{
                       uri: BandData[0].url
                     }}
             />
            </View> 
        </View>
        <View style={styles.navsection}>
          <Text style={styles.albumbtn}>album</Text>
        </View>
        <View style={styles.newalbumsection}>
          <Text style={styles.newalbumtitle}>New album</Text>
          <Image  style={styles.newalbumImage}
                  source={{
                    uri: BandData[1].url
                  }} />
          <Text style={styles.eyeofstormtitle}>{BandData[1].albumname}</Text>
        </View>
        <View>
          <Text  style={styles.newalbumtitle}>Trending this week</Text>
          <View style={styles.trendsection}>
              <View style={styles.trend1}>
              <Image
                  style={styles.trendImage}
                  source={{
                    uri: BandData[2].url
                  }} 
                />
                <Text style={styles.trendalbumname}>{BandData[2].albumname}</Text>
              </View>
              <View style={styles.trend}>
              <Image
                  style={styles.trendImage}
                  source={{
                    uri: BandData[3].url
                  }} 
                />
                <Text style={styles.trendalbumname}>{BandData[3].albumname}</Text>
              </View>
              <View style={styles.trend}>
              <Image
                  style={styles.trendImage}
                  source={{
                    uri: BandData[4].url
                  }} 
                />
                <Text style={styles.trendalbumname}>{BandData[4].albumname}</Text>
              </View>
          </View>
          </View>
          <View >
            <Text style={styles.allalbumtitle}>All album</Text>
            <View style={styles.allalbumsection}>
              <View style={styles.all1}>
                <Image 
                  style={styles.allalbumImg}
                  source={{
                    uri: BandData[5].url
                  }} 
                />
                <Text style={styles.trendalbumname}>{BandData[5].albumname}</Text>
              </View>
              <View style={styles.all2}>
                <Image 
                  style={styles.allalbumImg}
                  source={{
                    uri: BandData[6].url
                  }} 
                />
                <Text style={styles.trendalbumname}>{BandData[6].albumname}</Text>
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
      width:64,
      borderRadius: 30
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
      marginLeft:24,
      shadowColor: '#000',
      shadowOffset: {width: 0,height: 2},
      shadowOpacity: 1.0
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
