import React from 'react'
import AuthRoutes from './AuthRoutes';
import AppStack from './AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectUser } from '../utils/redux/userSlice';

const Routing = () => {
    const user = useSelector(selectUser);
    console.log(user)
    return (
        <NavigationContainer>
            {!user  ? <AuthRoutes /> : <AppStack />}
        </NavigationContainer>
    )
}

export default Routing