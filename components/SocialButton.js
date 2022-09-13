import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { windowHeight } from '../utils/Dimentions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({
    buttonTitle,
    btnType,
    color,
    backgroundColor,
    ...rest
}) => {
    let bgColor = backgroundColor;
    return (
        <TouchableOpacity
            className={`mt-5 w-full h-[50px] flex-row border border-gray-100 rounded-3xl`}
            style={[{ backgroundColor: bgColor }]}
            {...rest}>
            <View className="w-[30px] justify-center items-center ml-5">
                <FontAwesome name={btnType} className='font-bold text-xl' size={22} color={color} />
            </View>
            <View className='flex-1 justify-center items-center'>
                <Text className="font-bold" style={[{ color: color }]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SocialButton;