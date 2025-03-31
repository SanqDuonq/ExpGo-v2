import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import ButtonComponent from '@/components/button';
import InputComponent from '@/components/input';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import ExpGoLogo from '../assets/images/adaptive-icon.png';

const LoginScreen = () => {
    const router = useRouter();
    const [signIn, setSignIn] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    return (
        <View className="flex-1 relative">
            <View className="flex-1 px-6 pt-8 gap-y-6 relative z-20">
                <View className="items-center gap-y-2">
                    <View className='flex-row items-center'>
                        <Image source={ExpGoLogo} style={{ width: 80, height: 100 }} />
                        <Text className='text-4xl font-bold text-[#02929A]'>ExpGo</Text>
                    </View>
                    <Text className="text-white text-4xl text-[#02929A]">START YOUR JOURNEY !</Text>
                    <Text className="text-white text-4xl text-[#2D3434] font-bold">Sign In</Text>
                </View>
                <View className="bg-white p-6 rounded-[8px] shadow-lg z-20">
                    <InputComponent
                        name="Email"
                        placeholder="Email"
                        value={signIn.email}
                        onChangeText={(text) => setSignIn({ ...signIn, email: text })}
                    />
                    <InputComponent
                        name="Password"
                        placeholder="Password"
                        value={signIn.password}
                        onChangeText={(text) => setSignIn({ ...signIn, password: text })}
                        secureTextEntry
                    />
                    <ButtonComponent name="Sign In" isLoading={isLoading} />
                </View>
                <Toast />
            </View>
        </View>
    );
};

export default LoginScreen;
