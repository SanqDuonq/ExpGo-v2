// import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import googleIcon from '../assets/images/google-icon.png';

// GoogleSignin.configure({
//     webClientId: '603735272198-l0ojuujt6g0jfbdblubmud996q2hq2l7.apps.googleusercontent.com', 
// });

// const LoginGoogleScreen = () => {
//     const googleLogin = async () => {
//         try {
//             await GoogleSignin.hasPlayServices();
//             const userInfo = await GoogleSignin.signIn()
//             const idToken = userInfo.data?.idToken;

//             if (idToken) {
//                 const response = await fetch('https://vision-ocr-pvru.vercel.app/api/auth/google', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ token: idToken }),
//                 });

//                 const data = await response.json();
//                 if (data.accessToken) {
//                     await AsyncStorage.setItem('accessToken', data.accessToken);
//                     console.log('Login successful:', data);
//                 } else {
//                     console.error('Login failed:', data.message);
//                 }
//             } else {
//                 console.error('No ID token received from Google');
//             }
//         } catch (error) {
//             console.error('Google Login Error:', error);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity style={styles.button} onPress={googleLogin}>
//                 <Image source={googleIcon} style={styles.icon} />
//                 <Text style={styles.buttonText}>Continue with Google</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         gap: 16,
//     },
//     button: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#E0E0E0',
//         height: 50,
//         borderRadius: 8,
//         paddingHorizontal: 16,
//         marginTop: 16,
//     },
//     icon: {
//         marginRight: 8,
//     },
//     buttonText: {
//         textAlign: 'center',
//         fontWeight: '600',
//         color: '#000000',
//     },
// });

// export default LoginGoogleScreen;
