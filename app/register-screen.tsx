import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
        <View className="flex-1 relative">
            <View className="flex-1 px-6 pt-8 gap-y-6 relative z-20">
                <View className="items-center gap-y-4">
                    <Text className="text-white text-4xl text-[#2D3434] font-bold">Sign Up</Text>
                </View>
                <View className="bg-white p-6 rounded-[8px] shadow-lg z-20">
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
                    <ButtonComponent name="Sign Up"  />
                    <LoginGoogleScreen />
                    <LoginGithubScreen />
                </View>
                <View className="flex-row gap-x-1 justify-center">
                    <Text className='text-lg'>You have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('/login-screen')}>
                        <Text className="text-blue-500 text-lg text-[#02929A]">Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default RegisterScreen;
