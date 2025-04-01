import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';

const requestPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Permission to Access Storage',
        message: 'App needs access to your storage to select images.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Storage permission granted');
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const QrScreen = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [ocrResult, setOcrResult] = useState<string>('');

  const selectImage = async () => {
    await requestPermissions();
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      console.log('Response:', response); 
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert('Lỗi', response.errorMessage);
        return;
      }

      if (response.assets && response.assets.length > 0) {
        const imageUri = response.assets[0].uri;
        setSelectedImage(imageUri!);
        console.log('Selected Image URI:', imageUri);
      }
    });
  };

  const processOCR = async () => {
    if (!selectedImage) {
      Alert.alert('Lỗi', 'Vui lòng chọn ảnh trước');
      return;
    }

    const formData = new FormData();
    formData.append('file', {
      uri: selectedImage,
      name: 'image.jpg',
      type: 'image/jpeg',
    } as any); 

    try {
      const response = await fetch('https://vision-ocr-pvru.vercel.app/api/ocr/scan', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();
      if (response.ok) {
        setOcrResult(data.result || 'Không có dữ liệu OCR');
      } else {
        Alert.alert('Lỗi OCR', data.message || 'Xử lý OCR thất bại');
      }
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể kết nối đến API');
      console.error('OCR Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>OCR</Text>
      </View>

      <View style={styles.imageContainer}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <Text>No Image Selected</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Select Image" onPress={selectImage} />
        <Button title="Process OCR" onPress={processOCR} />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{ocrResult}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#02929A', paddingVertical: 20, paddingHorizontal: 16 },
  headerText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  imageContainer: { width: '80%', height: 200, marginTop: 20, alignSelf: 'center', borderColor: '#ccc', borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: '100%', resizeMode: 'contain' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignSelf: 'center', marginTop: 20 },
  resultContainer: { width: '80%', alignSelf: 'center', padding: 10, marginTop: 20, borderColor: '#ccc', borderWidth: 1, borderRadius: 5 },
  resultText: { fontSize: 16, color: '#333' },
});

export default QrScreen;
