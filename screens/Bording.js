import { Image,StyleSheet} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Bording = () => {
    const navigation = useNavigation();

    return (
        <>
            <Onboarding
                onSkip={() => navigation.navigate('login')}
                onDone={() => navigation.navigate('login')}
                pages={[
                    {
                        backgroundColor: '#a6e4d9',
                        image: <Image source={require('../static/images/onboarding-img1.png')} />,
                        title: 'Connect to the world',
                        subtitle: 'A new way to connect to the World'
                    },
                    {
                        backgroundColor: '#fded63',
                        image: <Image source={require('../static/images/onboarding-img2.png')} />,
                        title: 'Share your favourites',
                        subtitle: 'Share your thoughts with simillar kind of People'
                    },
                    {
                        backgroundColor: '#e9bcbe',
                        image: <Image source={require('../static/images/onboarding-img3.png')} />,
                        title: 'Become the star',
                        subtitle: 'Let the spotlight capture you'
                    }
                ]}
            />
        </>
    )
}

export default Bording

const styles = StyleSheet.create({})