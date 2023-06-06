import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

function Slider() {
  const [images, setImages] = useState([]);
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    fetch('https://forsa-staging.bit68.com/api/v1/stores/get_offers/')
      .then(response => response.json())
      .then(data=> {
        const offers = data.results;
        const offerImages = offers.map(offer => offer.brand.background);
        setImages(offerImages);
        setRandomImage(offerImages[Math.floor(Math.random() * offerImages.length)]);
      })
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images]);

  return (
    <View style={styles.container}>
      {randomImage && <Image style={styles.image} source={{ uri: randomImage }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 323,
    height: 136,
    marginBottom: 10,
    resizeMode: 'cover',
     borderWidth: 2,
    borderColor: '#3EBDAC',
    borderRadius:20
  },
});

export default Slider;