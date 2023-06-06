import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

function CardOffers() {
  const [Offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  useEffect(() => {
    fetch('https://forsa-staging.bit68.com/api/v1/stores/get_offers/')
      .then((response) => response.json())
      .then((data) => setOffers(data.results))
      .catch((error) => console.log(error));
  }, []);
  console.log(Offers)

  const renderOfferItem = ({ item, index }) => {
    return (
      <View style={styles.offerItem}>
        <Image source={{ uri: item.brand.background }} style={styles.brandImage} />
        <View style={styles.offerDetailsContainer}>
         <Text style={styles.offerDetailsDescription}>{item.title}</Text>
          <Text style={styles.offerDetailsDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Offers}
        renderItem={renderOfferItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
    
  },
  offerItem: {
    width: 160,
    height: 250,
    borderWidth: 0.25,
    borderColor: '#ccc',
    borderRadius: 15,
            margin:5

  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  offerDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  brandImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  offerDetailsContainer: {
    position: 'absolute',
    top: '50%',
    width:'100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
  },
  offerDetailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  offerDetailsDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CardOffers;