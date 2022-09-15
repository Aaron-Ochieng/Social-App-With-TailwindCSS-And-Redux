import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chat, EditProfile, Home, Messages, NewPost, Profile } from '../screens';
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { AuthProvider } from './AuthProvider';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const fullScreenWidth = Dimensions.get('screen').width;

const FeedStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home}
                options={{ headerShown: false }} />
            <Stack.Screen name='newPost'
                component={NewPost} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


const MessageStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='messages' component={Messages} options={{ headerShown: false }} />
            <Stack.Screen name='chats' component={Chat} options={({ route }) => ({
                title: route.params.userName,
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerTintColor: '#2e64e5',
            })} />
        </Stack.Navigator>
    )
}


const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='editProfile' component={EditProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


const AppStack = () => {
    return (
        <AuthProvider>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size, padding }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (route.name == 'Messages') {
                            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'
                        } else if (route.name == 'Profile') {
                            iconName = focused ? 'person' : 'person-outline'
                        } else if (route.name == 'New Post') {
                            iconName = focused ? 'add-circle' : 'add-circle-outline'
                        }

                        return <IoniconIcon name={iconName} size={size} color={color} style={{ paddingBottom: padding }} />
                    },
                    activeTintColor: 'aquamarine',
                    inactiveTintColor: 'grey',
                    labelStyle: { fontSize: 12 },
                    tabBarStyle: {
                        width: fullScreenWidth,
                        padding: 0,
                        borderRadius: 9

                    },
                    activeBackgroundColor: "#0f172a",
                    inactiveBackgroundColor: "#0f172a",


                })}


            >
                <Tab.Screen name='Home' component={FeedStack} options={{ headerShown: false }} />
                <Tab.Screen name='New Post'
                    component={NewPost}
                    options={{ headerShown: false }} />
                <Tab.Screen
                    name='Messages'
                    component={MessageStack}
                    options={({ route }) => ({
                        tabBarStyle: ((route) => {
                            const routeName = getFocusedRouteNameFromRoute(route) ?? ''
                            if (routeName === 'chats') {
                                return {
                                    display: 'none'
                                }
                            }
                            return
                        })(route),
                        headerShown: false
                    })}
                />
                <Tab.Screen
                    name='Profile'
                    component={ProfileStack}
                    options={{
                        headerShown: false,

                    }}
                />

            </Tab.Navigator>
        </AuthProvider>
    )
}

export default AppStack