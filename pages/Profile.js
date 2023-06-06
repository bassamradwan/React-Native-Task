import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Language from '../components/localize'
export default function Profile() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Images/headerProfile.png')}
        style={{ width: '100%', height: '45%' }}>
        <View style={styles.headerProfile}>
          <Text style={styles.headerText}> Profile </Text>
          <View style={styles.topIcons}>
            <Ionicons
              name="ios-heart-outline"
              size={25.82}
              color="#FFFFFF"
              style={styles.icon}
            />
            <Ionicons
              name="ios-notifications-outline"
              size={22.68}
              color="#FFFFFF"
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.boxUser}>
            <Image source={require('../assets/Images/imageProfile.png')} />
            <Text style={styles.name}> Mohammed Adel </Text>
          </View>
          <View>
            <Text style={styles.fontText}> Share the app </Text>
          </View>
          <View style={styles.rightIcons}>
            <Text style={styles.fontText}> Change Language </Text>
                      <Language/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fontText: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boxUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  logo: {
    width: 35.57,
    height: 62.38,
    resizeMode: 'contain',
  },
  name: {
    fontFamily: 'Inter',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
  },
 
  rightIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  box: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  headerProfile: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  topIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom:10,
    marginRight:20
  },
  icon: {
    marginLeft: 20,
  },
});