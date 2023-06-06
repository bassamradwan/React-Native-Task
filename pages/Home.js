
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';
import Slider from '../components/slider.js';
import Header from '../components/header';
import Backgruond from '../components/background';
import CardData from '../components/cardBrands';
import CardOffers from '../components/cardOffers'


export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Header />
        <View style={{ position: 'relative', flex: 1, alignItems: 'center' }}>
          <View style={styles.cardContainer}>
            <Backgruond style={styles.card} />
          </View>
          <View style={{ position: 'absolute', top: -60 }}>
            <Slider style={styles.cardimage} />
          </View>
          <View style={styles.whiteBox}>
            <Text style={styles.brands}> Top brands in retail </Text>
            <View style={styles.menu}>
              <CardData />
            </View>
            <View >
              <Text style={styles.brands}>Featured offers</Text>
              <CardOffers/>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    position: 'absolute',
    width: '100%',
    height: 200,
    zIndex: -1,
  },
  card: {
    flex: 1,
    margin: 20,
  },
  cardimage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteBox: {
    top: 100,
    width: '100%',
    left: 20,
  },
  brands: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menu: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
