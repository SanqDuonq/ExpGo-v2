import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const QrScreen = () => {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const [ocrResult, setOcrResult] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Quét OCR</Text>
      </View>

      <View style={styles.imageContainer}>
        {selectedImage ? (
          <Image
            source={{ uri: `data:image/jpeg;base64,${selectedImage}` }}
            style={styles.image}
          />
        ) : (
          <Text>No Image Selected</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Select Image" />
        <Button title="Process OCR"  />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{ocrResult}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1E5128',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '80%',
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  resultContainer: {
    width: '80%',
    alignSelf: 'center',
    padding: 10,
    marginTop: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
});

export default QrScreen;
