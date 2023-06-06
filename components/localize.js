import React, { useState } from 'react';
import { Text, View, Modal, FlatList, TouchableOpacity,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Language = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Arabic');

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 10,fontSize: 20 }}>{selectedLanguage}</Text>
        <Icon name='chevron-down-outline' size={20} />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='slide' >
        <View style={styles.modal}>
<View style={styles.modalContent}>
          <FlatList
            data={[{ key: 'English', name: 'English' }, { key: 'Arabic', name: 'Arabic' }, { key: 'French', name: 'French' }]}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleLanguageChange(item.key)}>
                <Text style={{ fontSize: 20, padding: 10 }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: '80%',
    height: '50%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Language;