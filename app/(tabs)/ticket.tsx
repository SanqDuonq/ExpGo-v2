import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Ionicons} from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const tickets = [
    { id: '1', from: 'Hồ Chí Minh', to: 'Hà Nội', date: '05/10/2024' },
    { id: '2', from: 'Hồ Chí Minh', to: 'Hà Nội', date: '05/10/2024' }
];

const TicketScreen = () => {
    const router = useRouter();

    const renderTicket = ({ item }: { item: typeof tickets[0] }) => (
        <View style={styles.ticketContainer}>
            <MaterialIcons name="flight" size={30} color="green" style={styles.icon} />
            <View style={styles.ticketText}>
                <Text style={styles.route}>{item.from} đến {item.to}</Text>
                <Text style={styles.date}>Ngày đi: {item.date}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Quản lý vé</Text>
                <TouchableOpacity onPress={() => router.push('/add-ticket')}>
                    <Ionicons name="add-circle" size={32} color="white" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={tickets}
                keyExtractor={(item) => item.id}
                renderItem={renderTicket}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { flexDirection: 'row' as 'row', justifyContent: 'space-between' as 'space-between', alignItems: 'center' as 'center', backgroundColor: '#1C4E1D', padding: 15},
    list: { padding: 10 },
    ticketContainer: { 
        flexDirection: 'row' as 'row', 
        backgroundColor: '#F7F7F7', 
        padding: 10, 
        marginVertical: 5, 
        borderRadius: 10, 
        alignItems: 'center' as 'center' 
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    },
    icon: { width: 40, height: 40, marginRight: 10 },
    ticketText: { flex: 1 },
    route: { fontSize: 16, fontWeight: 'bold' },
    date: { fontSize: 14, color: 'gray' },
});


export default TicketScreen;
