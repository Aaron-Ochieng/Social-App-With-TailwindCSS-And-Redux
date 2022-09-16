
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { FormButton, SocialButton, FormInput } from '../components';
import auth from '@react-native-firebase/auth'
import { login } from '../utils/redux/userSlice';


const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      // const response = await auth().signInWithEmailAndPassword(email, password);
      dispatch(login({
        uid: 1234,
        // response.user.uid,
        // email: response.user.email,
        username: 'Aaron Ochieng'
        // response.user.displayName,
        // phone: response.user.phoneNumber,
      }))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ScrollView>
      <View className="bg-gray-100 p-4 h-screen w-full items-center justify-center">
        <Text className="text-blue-600  text-2xl">Welcome Back</Text>
        <Text className="text-blue-600  font-semibold text-lg">Login to your Account</Text>

        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign In"
          onPress={handleLogin}
        />

        <TouchableOpacity onPress={() => { }}>
          <Text className='mt-5 text-blue-600  justify-between'>Forgot your Password?</Text>
        </TouchableOpacity>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Sign In with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
            // onPress={() => fbLogin()}
            />

            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
            // onPress={() => googleLogin()}

            />


          </View>
        ) : null}

        <TouchableOpacity
          className='mt-5 flex'
          onPress={() => navigation.navigate('register')}>
          <Text className='text-[#2e64e5] '>
            Don't have an acount? Create <Text className="text-orange-500">here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
