import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';

interface Ticket {
  _id: string;
  airline: string;
  airlineCode: string;
  passengerName: string;
  gate: string;
  seat: string;
  from: string;
  to: string;
  departureDay: string;
  departureTime: string;
}

const TicketScreen = () => {
    const router = useRouter();
    const [tickets, setTickets] = useState<Ticket[]>([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await fetch('https://vision-ocr-pvru.vercel.app/api/ticket/get'); 
                const data = await response.json();
                setTickets(data.data); 
                console.log(data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu vé:', error);
            } finally {
                setLoading(false);
            }
        };
        // const interval = setInterval(() => {
        // fetchTickets();
        // }, 5000)
        // return () => clearInterval(interval)
        fetchTickets(); 
    }, []); 
    
    const formatDepartureTime = (time: string) => {
        const date = new Date(time); 
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'Asia/Ho_Chi_Minh', 
        };
        return date.toLocaleString('vi-VN', options); 
    };

    const renderTicket = ({ item }: { item: Ticket }) => (
        <View style={styles.ticketContainer}>
            <MaterialIcons name="flight" size={30} color="#02929A" style={styles.icon} />
            <View style={styles.ticketText}>
                <Text style={styles.route}>{item.from} đến {item.to}</Text>
                <Text style={styles.date}>Thời gian đi: {formatDepartureTime(item.departureTime)}</Text>
                <Text style={styles.passenger}>Hành khách: {item.passengerName}</Text>
                <Text style={styles.airline}>Hãng hàng không: {item.airline}</Text>
            </View>
            <TouchableOpacity 
                onPress={() => handleRemoveTicket(item._id)} 
                style={styles.removeButton}>
                <Ionicons name="trash" size={30} color="#FF6347" />
            </TouchableOpacity>
        </View>
    );

    const handleRemoveTicket = async (ticketId: string) => {
        try {
            const response = await fetch(`https://vision-ocr-pvru.vercel.app/api/ticket/remove/${ticketId}`, { 
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Không thể xóa vé');
            }

            setTickets((prevTickets) => prevTickets.filter(ticket => ticket._id !== ticketId));
        } catch (error) {
            console.error('Lỗi khi xóa vé:', error);
        }
    };

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#02929A" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>List ticket</Text>
                <TouchableOpacity onPress={() => router.push('/add-ticket')}>
                    <Ionicons name="add-circle" size={32} color="white" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={tickets}
                keyExtractor={(item) => item._id} 
                renderItem={renderTicket}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#02929A', padding: 15 },
    list: { padding: 10 },
    ticketContainer: {
        flexDirection: 'row',
        backgroundColor: '#F7F7F7',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    icon: { width: 40, height: 40, marginRight: 10 },
    ticketText: { flex: 1 },
    route: { fontSize: 16, fontWeight: 'bold' },
    date: { fontSize: 14, color: 'black' },
    passenger: { fontSize: 14, color: 'black' },
    airline: { fontSize: 14, color: 'black' },
    removeButton: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default TicketScreen;
