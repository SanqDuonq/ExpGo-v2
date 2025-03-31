import { View, Text, TouchableOpacity, Image } from 'react-native'
import githubIcon from '../assets/images/github-icon.png';


const LoginGithubScreen = () => {
    return (
        <View className='gap-4'>
            <TouchableOpacity
                className='flex-row items-center justify-center bg-gray-200 h-[50px] rounded-lg px-4 mt-4'
            >
                <Image
                    source={githubIcon}
                    className='mr-2'
                />
                <Text className='text-center font-semibold text-black'>Continue with Github</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginGithubScreen