import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { FormButton, SocialButton } from '../components';
import FormInput from '../components/FormInput';




// import {AuthContext} from '../navigation/AuthProvider';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  //   const {login, googleLogin, fbLogin} = useContext(AuthContext);

  return (
    <ScrollView >
      <View className='items-center justify-center p-4 bg-gray-300 h-screen dark:bg-slate-900'>
        <Text className="text-[#051d5f] dark:text-gray-300 text-xl font-bold">Create new Account</Text>
        {/* <Text className="text-blue-900 text-lg">Login to your Account</Text> */}

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
        <FormInput
          labelValue={confirmPassword}
          onChangeText={(confirm) => setConfirmPassword(confirm)}
          placeholderText="Confirm password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign Up"
        // onPress={() => login(email, psword)}
        />

        <View className="flex-row items-center justify-between">
          <Text className='mt-5 text-blue-600 space-x-3 dark:text-blue-300 text-sm'>
            By registering you confirm that you accept our
            <TouchableOpacity>
              <Text className="text-orange-400"> Terms of Service and Privacy Policy</Text>
            </TouchableOpacity>
          </Text>
        </View>

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
          onPress={() => navigation.navigate('login')}>
          <Text >
            Already have an acount? Click <Text className="text-orange-200">here</Text> to sign in.
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
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


});