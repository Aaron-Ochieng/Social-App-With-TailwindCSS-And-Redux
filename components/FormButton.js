import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <TouchableOpacity className="rounded-full w-full h-[50px] bg-[#2e64e5]  items-center justify-center" {...rest}>
            <Text className="font-bold text-xl">{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default FormButton;
