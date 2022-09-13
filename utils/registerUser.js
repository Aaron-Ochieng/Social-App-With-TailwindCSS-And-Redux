import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'

export default async function registerUser(email, password) {
    try {
        await auth().createUserWithEmailAndPassword(email, password)
    } catch (err) {
        Alert('Warning', err)
    }
}