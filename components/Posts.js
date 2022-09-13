import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Divider = () => {
    return (
        <View className="mt-4 w-[92%]  self-center border border-solid border-gray-600" />
    )
}

const Posts = ({ item }) => {
    let likedIcon = item.liked ? 'heart' : 'heart-outline'


    let likeText = ''
    let commentText = ''

    if (item.likes == 1) {
        likeText = '1 like'
    } else if (item.likes > 1) {
        likeText = item.likes + ' Likes'
    } else {
        likeText = 'Like'
    }


    if (item.comments == 1) {
        commentText = '1 Comment'
    } else if (item.comments > 1) {
        commentText = item.comments + ' Comments'
    } else {
        commentText = 'Comment'
    }


    return (
        <View className='bg-[#f8f8f8] w-full mb-[10px] br-[10px] rounded-lg'>
            {/* <Text className='dark:text-black'>Hello</Text> */}
            <View className="flex flex-row justify-start p-[15px]">
                <Image className="w-[50px] h-[50px] border-r-[25px] rounded-full" source={item.userImg} />
                <View className="flex-col justify-center ml-3">
                    <Text className="font-bold text-black ">{item.userName}</Text>
                    <Text className="text-xs text-black">{item.postTime}</Text>
                </View>
            </View>
            <Text className="text-black pl-[15px] pr-[15px]">{item.post}</Text>

            {item.postImg !== 'none' ?
                <Image className='w-full h-[250px] mt-4 items-center object-contain border border-red-600' resizeMode='cover' source={item.postImg} /> :
                <Divider />
            }
            <View className="flex-row justify-around p-4">
                <TouchableOpacity className={`flex-row items-center ${item.liked ? 'bg-[#2e64e515]' : 'bg-transparent'} justify-center rounded-md p-1`}>
                    <Icon name={likedIcon} size={25} color={`${item.liked ? '#2e64e5' : '#333'}`} />
                    <Text className={`ml-1 ${item.liked ? 'text-[#2e64e5]' : 'text-gray-800'} `}>{likeText}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center  justify-center rounded-md p-1">
                    <Icon name="md-chatbubble-outline" size={25} color='#333' />
                    <Text className=' ml-1 text-[#333]'>{commentText}</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Posts