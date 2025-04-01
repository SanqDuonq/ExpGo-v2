import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiError } from '@/interface/error.interface';

export const signIn = async (email: string, password: string, setLoading: (loading: boolean) => void, showToast: (message: string, type?: 'success' | 'error') => void) => {
  try {
    setLoading(true);
    const response = await axios.post('https://vision-ocr-pvru.vercel.app/api/auth/sign-in', { email, password });

    if (response.data?.data) {
      const token = response.data.data;

      await AsyncStorage.setItem('accessToken', token);
      showToast('Đăng nhập thành công!', 'success');
      
      console.log('Đăng nhập thành công!');
      return token;
    }
  } catch (error: unknown) {
    setLoading(false);
    const apiError = error as ApiError;
    const errorMessage = apiError.response?.data || apiError.message || 'Đã xảy ra lỗi. Vui lòng thử lại!';
    
    showToast(errorMessage, 'error');
    console.error('Lỗi đăng nhập:', errorMessage);
  } finally {
    setLoading(false);
  }
};
