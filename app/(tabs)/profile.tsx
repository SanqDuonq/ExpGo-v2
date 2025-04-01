import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileScreen = () => {
    const router = useRouter();
    const [profile, setProfile] = useState<{ name: string, email: string, avatar: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                const token = await AsyncStorage.getItem('accessToken');
                if (!token) {
                    router.push('/login-screen');
                    return;
                }
    
                const response = await axios.get('https://vision-ocr-pvru.vercel.app/api/auth/profile-user', {
                    headers: { Authorization: `Bearer ${token}` }
                });
    
                console.log(response.data);
    
                setProfile(response.data.data);  
            } catch (error) {
                console.error("Lỗi khi lấy thông tin profile:", error);
                Toast.show({ type: 'error', text1: 'Không thể tải thông tin!' });
            } finally {
                setLoading(false);
            }
        };
    
        fetchProfile();
    }, []);
    

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('accessToken');
            Toast.show({ type: 'success', text1: 'Đăng xuất thành công!' });
            router.push('/login-screen');
        } catch (error) {
            console.error("Lỗi khi đăng xuất:", error);
            Toast.show({ type: 'error', text1: 'Đăng xuất thất bại!' });
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#02929A" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Profile Customer</Text>
            </View>

            <View style={styles.profileCard}>
                <Image source={{ uri: profile?.avatar }} style={styles.avatar} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{profile?.name || 'Chưa có tên'}</Text>
                    <Text style={styles.email}>{profile?.email || 'Chưa có email'}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>

            <Toast />
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
        backgroundColor: "#02929A",
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
    loadingContainer: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },

});

export default ProfileScreen;
