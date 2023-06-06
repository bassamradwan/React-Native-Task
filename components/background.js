import React from 'react';
import { View, Image, StyleSheet ,ImageBackground} from 'react-native';

function Backgruond() {
  

  

  return (
    <View style={styles.container}>
   <View style={styles.images}>
          <Image source={require('../assets/Images/Path1195.png')} />
           <Image source={require('../assets/Images/Path1194.png')} />
          <Image source={require('../assets/Images/Path1190.png')} />
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
     flex: 1,
     flexDirection: 'row',
     marginLeft: 35,
     zIndex: -1,
  },
});

export default Backgruond;