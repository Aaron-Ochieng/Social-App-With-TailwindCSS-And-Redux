import React from 'react'
import { Bording, Login, Register } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'



const AuthRoutes = () => {
    const Stack = createNativeStackNavigator();
    // const [firstLaunch, setFirstLaunch] = React.useState(null);

    // React.useEffect(() => {
    //     AsyncStorage.getItem('launched').then((value) => {
    //         if (value == null) {
    //             AsyncStorage.setItem('launched', 'true')
    //             setFirstLaunch(true);
    //         } else {
    //             setFirstLaunch(false);
    //         }
    //     })
    // }, [])

    // if (firstLaunch === null) {
    //     return null;
    // } else if (firstLaunch === true) {
    return (
            <Stack.Navigator>
                <Stack.Screen name='onboarding' component={Bording} options={{ headerShown: false }} />
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='register' component={Register}
                    options={({ navigation }) => (
                        {
                            title: '',
                            headerStyle: {
                                backgroundColor: '#f3f4f6',
                            },
                            headerShadowVisible: false,
                            headerLeft: () => (
                                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                                    <Icon name='long-arrow-left' size={32} color='#2e64e5' />
                                </TouchableOpacity>
                            )
                        }
                    )}
                />
            </Stack.Navigator>
    )
    // } else {
    //     <Login />
    // }


}

export default AuthRoutes