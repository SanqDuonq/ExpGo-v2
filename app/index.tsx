import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WelcomeHome from '../assets/images/welcome.jpg';

export default function Index() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image
                source={WelcomeHome}
                style={styles.backgroundImage}
            />
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>Welcome to ExpGo!</Text>
                <Text style={styles.subText}>Discovery more experience from OCR app</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => router.push('/login-screen')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Getting started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    textContainer: {
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    welcomeText: {
        zIndex: 10,
        fontSize: 32,
        textAlign: 'center',
        fontWeight: '600',
        color: '#02929A',
    },
    subText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#D9EFF0',
        fontWeight: '300',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02929A',
        paddingHorizontal: 24,
        borderRadius: 8,
        width: 350,
        height: 50,
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },
});
