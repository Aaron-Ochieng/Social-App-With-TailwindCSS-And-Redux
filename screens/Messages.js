import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { TextMessages } from '../utils/data'
import { Texts } from '../components'

const Messages = ({ navigation }) => {
    return (
        <View className="pl-1 pr-1 bg-[#ffffff]">
            <FlatList
                data={TextMessages}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Texts item={item} navigation={navigation} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Messages