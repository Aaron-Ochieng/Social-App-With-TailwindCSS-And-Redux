import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View className='mt-5 mb-5 w-full rounded-full border border-[#3982d6]  h-[50px] flex-row items-center bg-[#fff] '>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666"  />
      </View>
      <TextInput
        value={labelValue}
        // style={styles.input}
        className="text-gray-900 ml-5 justify-center items-center flex-1"
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  iconStyle: {

    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  }
});