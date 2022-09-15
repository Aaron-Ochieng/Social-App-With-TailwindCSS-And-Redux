import { View, SafeAreaView, FlatList, Button } from 'react-native'
import React from 'react'
import { Posts } from '../components'
import { PostsData } from '../utils/data'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../utils/redux/userSlice'
import auth from '@react-native-firebase/auth'





const Home = ({ navigation }) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await auth().signOut()
        } catch (e) {
            console.log(e)
        }
        dispatch(logout())
    }
    return (
        <SafeAreaView>
            <View className="bg-gray-800 flex flex-1 p-[5px] h-screen  items-center justify-center">
                {/* Card View */}
                <Button title='Logout' onPress={handleLogout} />
                <FlatList
                    data={PostsData}
                    renderItem={({ item }) => <Posts
                        item={item}
                        handleNavigate={(navigation.navigate('profile'))}
                    />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 60
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home