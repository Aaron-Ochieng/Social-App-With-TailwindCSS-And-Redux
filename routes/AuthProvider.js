import React from 'react'
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password).then(resp=>console.log(resp.user))
                    } catch (e) {
                        console.log(e)
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password).then(resp => console.log(resp.user))
                    } catch (error) {
                        if (error.code === 'auth/email-already-in-use') {
                            Alert.alert('That email address is already in use!');
                        }

                        if (error.code === 'auth/invalid-email') {
                            Alert.alert('That email address is invalid!');
                        }
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut()
                    } catch (e) {
                        console.log(e)
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

