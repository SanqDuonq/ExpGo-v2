import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

interface Place {
    _id: string;
    name: string;
    address: string;
    category: string;
}

interface Restaurant {
    _id: string;
    name: string;
    address: string;
    category: string;
}

interface Hotel {
    _id: string;
    name: string;
    address: string;
    star: number;
}

interface Ticket {
    _id: string;
    places: Place[];
    restaurants: Restaurant[];
    hotels: Hotel[];
}

const LocationScreen = () => {
    const [data, setData] = useState<Ticket[]>([]); 
    const [loading, setLoading] = useState(true); 
    const [selectedCategory, setSelectedCategory] = useState<"places" | "restaurants" | "hotels">("places");

    const fetchData = async () => {
        try {
            const response = await axios.get('https://vision-ocr-pvru.vercel.app/api/ticket/get');
            const { data: ticketData } = response.data;
            setData(ticketData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data: ", error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
        // const interval = setInterval(() => {
        //     fetchData(); 
        // }, 5000);
        // return () => clearInterval(interval);
    }, []);

    const isHotel = (item: Place | Restaurant | Hotel): item is Hotel => {
        return (item as Hotel).star !== undefined;
    };

    const renderItem = ({ item }: { item: Place | Restaurant | Hotel }) => (
        <View style={styles.card} key={item._id}>
            <View style={styles.cardContent}>
                <Icon name="flag" size={20} color="#02929A" style={styles.icon} />
                <View>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.cardSubtitle}>
                        {isHotel(item) ? `Star: ${item.star}` : `Loại: ${item.category}`}
                    </Text>
                    <Text style={styles.cardAddress}>Địa chỉ: {item.address}</Text>
                </View>
            </View>
        </View>
    );

    const handleCategoryChange = (category: "places" | "restaurants" | "hotels") => {
        setSelectedCategory(category);
    };

    const getSelectedData = () => {
        if (selectedCategory === "places") {
            return data[0]?.places || []; 
        }
        if (selectedCategory === "restaurants") {
            return data[0]?.restaurants || []; 
        }
        if (selectedCategory === "hotels") {
            return data[0]?.hotels || []; 
        }
        return [];
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
                <Text style={styles.headerText}>Recommend</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleCategoryChange("places")}>
                    <Icon name="map-marker" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>Điểm du lịch</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => handleCategoryChange("restaurants")}>
                    <Icon name="cutlery" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>Nhà hàng</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => handleCategoryChange("hotels")}>
                    <Icon name="building" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>Khách sạn</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={getSelectedData()}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default LocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    header: {
        backgroundColor: "#02929A",
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    headerText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#02929A",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        width: 100,
        justifyContent: "center",
    },
    buttonText: {
        color: "#FFF",
        marginLeft: 5,
        fontSize: 12,
    },
    card: {
        margin: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#D1D5DB",
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 8,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    cardSubtitle: {
        color: "#02929A",
    },
    cardAddress: {
        color: "#4B5563",
        fontSize: 13,
        width: '52%',
        flexWrap: "wrap"
    },
    list: {
        padding: 10,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
