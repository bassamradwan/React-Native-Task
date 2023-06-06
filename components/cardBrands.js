import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet,Image } from 'react-native';

function CardData() {
  const [sectors, setSectors] = useState([]);
  const [selectedSector, setSelectedSector] = useState(null);
  const [brands, setBrands] = useState([]);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAll, setShowAll] = useState([]);

  useEffect(() => {
    fetch('https://forsa-staging.bit68.com/api/v1/stores/get_sectors/')
      .then((response) => response.json())
      .then((data) => setSectors(data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (selectedSector) {
      fetch(`https://forsa-staging.bit68.com/api/v1/stores/get_brands?sector=${selectedSector}`)
        .then((response) => response.json())
        .then((data) => setBrands(data.results))
        .catch((error) => console.log(error));
    }
  }, [selectedSector]);

  useEffect(() => {
    if (showAllBrands) {
      setSelectedSector(null);
      fetch('https://forsa-staging.bit68.com/api/v1/stores/get_brands?sector=')
        .then((response) => response.json())
        .then((data) => setShowAll(data.results))
        .catch((error) => console.log(error));
    }
  }, [showAllBrands]);

  const handleSectorSelect = (sector) => {
    setSelectedSector(sector.value);
    setShowAllBrands(false);
  };

  const handleViewAllBrands = () => {
    setShowAllBrands(true);
  };

const renderSector = ({ item }) => (
  <View style={styles.sector}>
    <Button 
      title={item.label} 
      onPress={() => handleSectorSelect(item)} 
      color="#000000"
      style={{backgroundColor: "#000000"}}
    />
  </View>
);


const renderBrand = ({ item }) => (
  <View style={styles.brand}>
  <Image source={{ uri: item.thumbnail }} style={styles.brandImage} />
        <View>
        <Text style={styles.offerTitle}>{item.title}</Text>

        </View>

  </View>
);

  return (
    <View>
      {showAllBrands ? null : (
        <FlatList
          horizontal={true}
          data={sectors}
          keyExtractor={(item) => item.value}
          renderItem={renderSector}
        />
      )}


      {(selectedSector || showAllBrands) && (
        <View>
          <FlatList
            horizontal={true}
            data={brands.length > 0 ? brands : showAll}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderBrand}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sector: {
    margin: 10,
    // alignItems: 'center',
    
  },
  brand: {
     width: 100,
    height: 150,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  brandImage: {
    width: 100,
    height: 100,
    margin: 10,
     borderWidth: 0.25,
    borderColor: '#ffff',
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
      },
});

export default CardData;