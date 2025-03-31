import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LocationScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Đề xuất điểm du lịch</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Icon name="flag" size={20} color="green" style={styles.icon} />
                    <View>
                        <Text style={styles.cardTitle}>Lăng Chủ tịch Hồ Chí Minh</Text>
                        <Text style={styles.cardSubtitle}>Loại: Du lịch</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

export default LocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#Fff",
    },
    header: {
        backgroundColor: "#1E5128",
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    headerText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    categoryContainer: {
        flexDirection: "row",
        backgroundColor: "#F3F4F6",
        padding: 12,
    },
    categoryButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: "#D1D5DB",
        marginRight: 8,
    },
    activeButton: {
        backgroundColor: "#1E5128",
    },
    activeText: {
        color: "white",
    },
    inactiveText: {
        color: "#4B5563",
    },
    card: {
        margin: 12,
        padding: 12,
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
        color: "#6B7280",
    },
});
