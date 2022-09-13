import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Texts = ({ item, navigation }) => {
    return (
        <TouchableOpacity className="border rounded-lg mb-1 border-gray-300" onPress={() => navigation.navigate("chats", { userName: item.userName })}>
            <View className="flex-row justify-between items-center ">
                <Image source={item.userImg} className="w-10 h-10 rounded-full ml-2" />

                <View className="flex-col p-4 pl-0 ml-2 w-80 border-b-1 border-b-[#cccccc]">
                    <View className=" flex-row justify-between mb-1">
                        <Text className="text-[14px] font-bold text-gray-700">{item.userName}</Text>
                        <Text className="text-sm text-gray-700">{item.messageTime}</Text>
                    </View>
                    <Text className="text-gray-700">{item.messageText}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Texts