import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const AddTicketScreen = () => {
    const router = useRouter();
    const [airline, setAirline] = useState('');
    const [airlineCode, setAirlineCode] = useState('');
    const [passengerName, setPassengerName] = useState('');
    const [gate, setGate] = useState('');
    const [seat, setSeat] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [departureDay, setDepartureDay] = useState('');

    const handleSaveTicket = async () => {

        const ticketData = {
            airline,
            airlineCode,
            passengerName,
            gate,
            seat,
            from,
            to,
            departureTime,
            departureDay,
        };

        try {
            const response = await fetch('https://vision-ocr-pvru.vercel.app/api/ticket/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticketData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Ticket saved:', data);
            } else {
                console.error('Error saving ticket:', data);
                // Handle error
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

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
                <TextInput
                    placeholder="Tên hãng"
                    style={styles.input}
                    value={airline}
                    onChangeText={setAirline}
                />
            </View>

            <View style={styles.inputContainer}>
                <MaterialIcons name="confirmation-number" size={20} color="gray" />
                <TextInput
                    placeholder="Mã hãng"
                    style={styles.input}
                    value={airlineCode}
                    onChangeText={setAirlineCode}
                />
            </View>

            <View style={styles.inputContainer}>
                <MaterialIcons name="person" size={20} color="gray" />
                <TextInput
                    placeholder="Tên khách hàng"
                    style={styles.input}
                    value={passengerName}
                    onChangeText={setPassengerName}
                />
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.smallInputContainer}>
                    <MaterialIcons name="door" size={20} color="gray" />
                    <TextInput
                        placeholder="Cửa đợi"
                        style={styles.smallInput}
                        value={gate}
                        onChangeText={setGate}
                    />
                </View>
                <View style={styles.smallInputContainer}>
                    <MaterialIcons name="event-seat" size={20} color="gray" />
                    <TextInput
                        placeholder="Số ghế"
                        style={styles.smallInput}
                        value={seat}
                        onChangeText={setSeat}
                    />
                </View>
            </View>

            <View style={styles.locationContainer}>
                <View style={styles.locationBox}>
                    <Text style={styles.locationCode}>Từ</Text>
                    <TextInput
                        style={styles.locationName}
                        value={from}
                        onChangeText={setFrom}
                        placeholder="From"
                    />
                </View>
                <View style={styles.locationBox}>
                    <Text style={styles.locationCode}>Đến</Text>
                    <TextInput
                        style={styles.locationName}
                        value={to}
                        onChangeText={setTo}
                        placeholder="To"
                    />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <MaterialIcons name="calendar-today" size={20} color="gray" />
                <TextInput
                    placeholder="Ngày đi (YYYY/MM/DD)"
                    style={styles.input}
                    value={departureDay}
                    onChangeText={setDepartureDay}
                />
            </View>

            <View style={styles.inputContainer}>
                <MaterialIcons name="access-time" size={20} color="gray" />
                <TextInput
                    placeholder="Giờ bay (YYYY/MM/DD HH:MM:SS)"
                    style={styles.input}
                    value={departureTime}
                    onChangeText={setDepartureTime}
                />
            </View>

            <TouchableOpacity style={styles.reminderButton}>
                <Text style={styles.reminderText}>Đặt nhắc nhở</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.saveButton}
                onPress={async () => {
                    await handleSaveTicket();
                    router.push('/(tabs)/ticket'); 
                }}
            >
                <Ionicons name="save" size={20} color="white" />
                <Text style={styles.saveButtonText}>Lưu vé</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#EAF3E5', padding: 20 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#02929A' },
    inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 12, borderRadius: 8, marginBottom: 12 },
    input: { flex: 1, marginLeft: 10 },
    rowContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    smallInputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 12, borderRadius: 8, width: '48%' },
    smallInput: { flex: 1, marginLeft: 10 },
    locationContainer: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', padding: 15, borderRadius: 8, marginBottom: 12 },
    locationBox: { alignItems: 'center' },
    locationCode: { fontSize: 24, fontWeight: 'bold', color: '#02929A' },
    locationName: { fontSize: 12, color: 'gray' },
    reminderButton: { alignSelf: 'center', marginBottom: 12 },
    reminderText: { color: '#02929A', fontSize: 14 },
    saveButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#02929A', padding: 12, borderRadius: 8, justifyContent: 'center' },
    saveButtonText: { color: 'white', fontSize: 18, marginLeft: 5 },
});

export default AddTicketScreen;
