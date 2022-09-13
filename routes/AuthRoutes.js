import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Bording, Login, Register } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthRoutes = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='onboarding' component={Bording} options={{ headerShown: false }} />
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthRoutes