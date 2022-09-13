
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { FormButton, SocialButton, FormInput } from '../components';
import AppStack from '../routes/AppStack';


// import {AuthContext} from '../navigation/AuthProvider';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    <ScrollView>
      <View className="bg-gray-300 dark:bg-slate-900 p-4 h-screen w-full items-center justify-center">
        {/* <Image
        source={require('../static/images/rn-social-logo.png')}
        style={styles.logo}
      /> */}
        <Text className="text-blue-600 dark:text-gray-300 text-2xl">Welcome Back</Text>
        <Text className="text-blue-600 dark:text-gray-300 font-semibold text-lg">Login to your Account</Text>

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
          onPress={() => navigation.navigate('feeds')}
        />

        <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
          <Text className='mt-5 text-blue-600 dark:text-gray-300 justify-between'>Forgot your Password?</Text>
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
          <Text className='text-[#2e64e5] dark:text-gray-300'>
            Don't have an acount? Create <Text className="text-orange-500">here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },

  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});