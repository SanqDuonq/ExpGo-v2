import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonComponent from '@/components/button';
import InputComponent from '@/components/input';
import { useRouter } from 'expo-router';
import LoginGoogleScreen from './login-google-screen';
import LoginGithubScreen from './login-github-screen';

const RegisterScreen = () => {
    const router = useRouter();
    const [signUp, setSignUp] = useState<{
        name: string;
        email: string;
        password: string;
        avatar: string | null;
    }>({
        name: '',
        email: '',
        password: '',
        avatar: null,
    });

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Sign Up</Text>
                </View>
                <View style={styles.formContainer}>
                    <InputComponent
                        name="Fullname"
                        placeholder="Fullname"
                        value={signUp.name}
                        onChangeText={(text) => setSignUp({ ...signUp, name: text })}
                    />
                    <InputComponent
                        name="Email"
                        placeholder="Email"
                        value={signUp.email}
                        onChangeText={(text) => setSignUp({ ...signUp, email: text })}
                    />
                    <InputComponent
                        name="Password"
                        placeholder="Password"
                        value={signUp.password}
                        onChangeText={(text) => setSignUp({ ...signUp, password: text })}
                        secureTextEntry
                    />
                    <ButtonComponent name="Sign Up" />
                    <LoginGoogleScreen />
                    <LoginGithubScreen />
                </View>
                <View style={styles.signInContainer}>
                    <Text style={styles.signInText}>You have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('/login-screen')}>
                        <Text style={styles.signInLink}>Sign In</Text>
                    </TouchableOpacity>
                </View>
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
        gap: 16,
    },
    headerText: {
        color: '#2D3434',
        fontSize: 32,
        fontWeight: 'bold',
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        zIndex: 20,
    },
    signInContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4,
    },
    signInText: {
        fontSize: 18,
    },
    signInLink: {
        color: '#02929A',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default RegisterScreen;
