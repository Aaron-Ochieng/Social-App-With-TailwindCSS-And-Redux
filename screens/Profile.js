import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Posts } from '../components'
import { PostsData } from '../utils/data'
import { useSelector } from 'react-redux'
import { selectUser } from '../utils/redux/userSlice'

const Profile = ({ navigation }) => {
    const user = useSelector(selectUser);
    console.log(user)
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView
                className="flex-1 bg-gray-200 p-5 w-full"
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
            >
                <Image source={require('../static/users/user-1.jpg')} className='h-[100px] w-[100px] rounded-full' />
                <Text className='mt-5 mb-5 text-black font-semibold text-xl'>{user.username}</Text>
                <Text className="text-[#1b1a1a] text-center mb-5 font-[600] text-sm">About the motherfuking user</Text>

                { }
                <View className="flex-row justify-center w-full mb-5 space-x-3">
                    <TouchableOpacity className="border-[#2e64e5] rounded h-9 w-20 items-center border">
                        <Text className="text-[#2e64e5] mt-1">Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="border-[#2e64e5] rounded h-9 w-20 items-center border">
                        <Text className="text-[#2e64e5] mt-1">Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="border-[#2e64e5] rounded h-9 w-20 items-center border" onPress={() => navigation.navigate('editProfile')}>
                        <Text className="text-[#2e64e5] mt-1">edit</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-around w-full mb-5">
                    <View className="justify-center">
                        <Text className="text-center font-bold text-xl text-gray-700">10</Text>
                        <Text className="text-center font-semibold text-sm text-gray-600">Posts</Text>
                    </View>

                    <View className="justify-center">
                        <Text className="text-center font-bold text-xl text-gray-700">10,000</Text>
                        <Text className="text-center font-semibold text-sm text-gray-600">Followers</Text>
                    </View>

                    <View className="justify-center">
                        <Text className="text-center font-bold text-xl text-gray-700">100</Text>
                        <Text className="text-center font-semibold text-sm text-gray-600">Following</Text>
                    </View>
                </View>
                {PostsData.map((item) => {
                    return (
                        <Posts key={item.id} item={item} />
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile