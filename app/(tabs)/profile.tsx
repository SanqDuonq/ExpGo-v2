import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import { useRouter } from 'expo-router';

const DEFAULT_AVATAR = '../../assets/images/user.png';

const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Thông tin khách hàng</Text>
            </View>
            <View style={styles.profileCard}>
                <Image  style={styles.avatar} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}></Text>
                    <Text style={styles.email}></Text>
                </View>
            
            </View>

            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#1C4E1D",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    },
    profileCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        margin: 15,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileInfo: {
        flex: 1,
        marginLeft: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    email: {
        fontSize: 14,
        color: "gray",
    },
    logoutButton: {
        backgroundColor: "red",
        paddingVertical: 12,
        marginHorizontal: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    logoutText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ProfileScreen;
