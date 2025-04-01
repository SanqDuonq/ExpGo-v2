import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ButtonComponent from '@/components/button';
import InputComponent from '@/components/input';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import ExpGoLogo from '../assets/images/adaptive-icon.png';
import LoginGoogleScreen from './login-google-screen';
import LoginGithubScreen from './login-github-screen';
import { signIn } from '@/api/auth.api';

const LoginScreen = () => {
    const router = useRouter();
    const [signInData, setSignInData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const showToast = (message: string, type: 'success' | 'error' = 'error') => {
        Toast.show({
            type,
            text1: message,
            position: 'top',
            visibilityTime: 3000,
        });
    };

    const handleSignIn = async () => {
        const token = await signIn(signInData.email, signInData.password, setIsLoading, showToast);
        if (token) router.push('/(tabs)/ticket'); 
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Image source={ExpGoLogo} style={styles.logo} />
                        <Text style={styles.logoText}>ExpGo</Text>
                    </View>
                    <Text style={styles.mainText}>START YOUR JOURNEY!</Text>
                    <Text style={styles.signInText}>Sign In</Text>
                </View>
                <View style={styles.formContainer}>
                    <InputComponent
                        name="Email"
                        placeholder="Email"
                        value={signInData.email}
                        onChangeText={(text) => setSignInData({ ...signInData, email: text })}
                    />
                    <InputComponent
                        name="Password"
                        placeholder="Password"
                        value={signInData.password}
                        onChangeText={(text) => setSignInData({ ...signInData, password: text })}
                        secureTextEntry
                    />
                    <ButtonComponent name="Sign In" isLoading={isLoading} onPress={handleSignIn} />
                    <LoginGoogleScreen />
                    <LoginGithubScreen />
                </View>
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/register-screen')}>
                        <Text style={styles.signUpLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Toast />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 32,
        gap: 24,
        position: 'relative',
        zIndex: 20,
    },
    header: {
        alignItems: 'center',
        gap: 8,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 100,
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#02929A',
    },
    mainText: {
        fontSize: 32,
        textAlign: 'center',
        color: '#02929A',
    },
    signInText: {
        color: '#2D3434',
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        padding: 24,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        zIndex: 20,
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    signUpText: {
        color: '#000',
        fontSize: 17
    },
    signUpLink: {
        color: '#02929A', 
        fontWeight: 'bold',
        fontSize: 17
    },
});

export default LoginScreen;

