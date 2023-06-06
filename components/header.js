import { View,Image, StyleSheet, ImageBackground, SafeAreaView, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


function Header() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={styles.container}>
     
      <ImageBackground source={require('../assets/Images/Ellipse450.png')} style={{ width: '100', height: windowHeight * 0.4 }}>
       <View style={styles.header}>
        <Icon name="search" size={17} color="#FFFFFF" style={styles.icon} />
        <Image source={require('../assets/Images/Path1096.png')} style={styles.logo} />
        <View style={styles.rightIcons}>
        <Ionicons name="ios-heart-outline" size={25.82} color="#FFFFFF" style={styles.icon}/>
         <Ionicons name="ios-notifications-outline" size={22.68} color="#FFFFFF" style={styles.icon} />
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  logo: {
    width: 35.57,
    height: 62.38,
    resizeMode: 'contain'
  },
  icon: {
    marginRight: 20
  },
  rightIcons: {
    flexDirection: 'row'
  }
});