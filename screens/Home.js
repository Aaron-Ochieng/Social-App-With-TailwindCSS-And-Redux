import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Posts } from '../components'
import { PostsData } from '../utils/data'




const Home = () => {
    return (
        <SafeAreaView>
            <View className="bg-gray-500 flex flex-1 p-[5px] h-screen  items-center justify-center">
                {/* Card View */}
                <FlatList
                    data={PostsData}
                    renderItem={({ item }) => <Posts item={item} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom:60
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home