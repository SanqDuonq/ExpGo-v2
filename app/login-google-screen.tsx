import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import googleIcon from '../assets/images/google-icon.png';

const LoginGoogleScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image source={googleIcon} style={styles.icon} />
                <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 16, 
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0E0E0', 
        height: 50,
        borderRadius: 8, 
        paddingHorizontal: 16,
        marginTop: 16,
    },
    icon: {
        marginRight: 8, 
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '600', 
        color: '#000000', 
    },
});

export default LoginGoogleScreen;
