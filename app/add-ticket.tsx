import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { router } from 'expo-router';

const AddTicketScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="green" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thông tin vé</Text>
        <MaterialIcons name="delete" size={24} color="red" />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="flight" size={20} color="gray" />
        <TextInput placeholder="Tên hãng" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="confirmation-number" size={20} color="gray" />
        <TextInput placeholder="Mã hãng" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="person" size={20} color="gray" />
        <TextInput placeholder="Tên khách hàng" style={styles.input} />
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.smallInputContainer}>
          <MaterialIcons name="door" size={20} color="gray" />
          <TextInput placeholder="Cửa đợi" style={styles.smallInput} />
        </View>
        <View style={styles.smallInputContainer}>
          <MaterialIcons name="event-seat" size={20} color="gray" />
          <TextInput placeholder="Số ghế" style={styles.smallInput} />
        </View>
      </View>

      <View style={styles.locationContainer}>
        <View style={styles.locationBox}>
          <Text style={styles.locationCode}>Từ</Text>
          <Text style={styles.locationName}>TP. Hồ Chí Minh</Text>
        </View>
        <View style={styles.locationBox}>
          <Text style={styles.locationCode}>Đến</Text>
          <Text style={styles.locationName}>Hà Nội</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="calendar-today" size={20} color="gray" />
        <TextInput placeholder="Ngày đi (DD/MM/YYYY)" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="access-time" size={20} color="gray" />
        <TextInput placeholder="Giờ bay (HH:MM:SS)" style={styles.input} />
      </View>

      <TouchableOpacity style={styles.reminderButton}>
        <Text style={styles.reminderText}>Đặt nhắc nhở</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton}>
        <Ionicons name="save" size={20} color="white" />
        <Text style={styles.saveButtonText}>Lưu vé</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EAF3E5', padding: 20 },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#1C4E1D' },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 12 
  },
  input: { flex: 1, marginLeft: 10 },
  rowContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 12
  },
  smallInputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    padding: 12, 
    borderRadius: 8, 
    width: '48%' 
  },
  smallInput: { flex: 1, marginLeft: 10 },
  locationContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    backgroundColor: 'white', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 12 
  },
  locationBox: { alignItems: 'center' },
  locationCode: { fontSize: 24, fontWeight: 'bold', color: 'green' },
  locationName: { fontSize: 12, color: 'gray' },
  reminderButton: { alignSelf: 'center', marginBottom: 12 },
  reminderText: { color: 'green', fontSize: 14 },
  saveButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'green', 
    padding: 12, 
    borderRadius: 8, 
    justifyContent: 'center' 
  },
  saveButtonText: { color: 'white', fontSize: 16, marginLeft: 5 },
});

export default AddTicketScreen;
