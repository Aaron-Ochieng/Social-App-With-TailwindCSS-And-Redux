import { View, TextInput, Image, TouchableOpacity, Text, ActivityIndicator, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { FloatingAction } from 'react-native-floating-action';
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { selectUser } from '../utils/redux/userSlice';
import { useSelector } from 'react-redux';


const NewPost = ({ navigation }) => {
    const [post, setPost] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [uploading, setUploading] = React.useState(false);
    const [transferred, setTransferred] = React.useState(0);


    const user = useSelector(selectUser)

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 1200,
            height: 780,
            cropping: true,
        }).then((image) => {
            const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
            setImage(imageUri);
        });
    };

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 1200,
            height: 780,
            cropping: true,
        }).then((image) => {
            const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
            setImage(imageUri);
            console.log(imageUri)
        });
    };

    const actions = [
        {
            text: "Take Photo",
            icon: <Icon name="camera-outline" size={15} color='white' />,
            name: "bt_take_photo",
            position: 1,
        },
        {
            text: "Choose Photo",
            icon: <Icon name="md-images-outline" size={15} color='white' />,
            name: "bt_choose_photo",
            position: 2,

        }
    ]

    const submitPost = async () => {
        const imageUrl = await uploadImage();
        console.log('Image Url: ', imageUrl);
        console.log('Post: ', post);

        firestore()
            .collection('posts')
            .add({
                userId: user.uid,
                post: post,
                postImg: imageUrl,
                postTime: firestore.Timestamp.fromDate(new Date()),
                likes: null,
                comments: null,
            })
            .then(() => {
                console.log('Post Added!');
                Alert.alert(
                    'Post published!',
                    'Your post has been published Successfully!',
                );
                setPost(null);
            })
            .catch((error) => {
                console.log('Something went wrong with added post to firestore.', error);
            });
    }

    const uploadImage = async () => {
        if (image == null) {
            return null;
        }
        const uploadUri = image;
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

        // Add timestamp to File Name
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;

        setUploading(true);
        setTransferred(0);

        const storageRef = storage().ref(`photos/${filename}`);
        const task = storageRef.putFile(uploadUri);

        // Set transferred state
        task.on('state_changed', (taskSnapshot) => {
            console.log(
                `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
            );

            setTransferred(
                Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
                100,
            );
        });

        try {
            await task;

            const url = await storageRef.getDownloadURL();

            setUploading(false);
            setImage(null);

            // Alert.alert(
            //   'Image uploaded!',
            //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
            // );
            return url;

        } catch (e) {
            console.log(e);
            return null;
        }

    };



    return (
        <View className="flex-1 items-center justify-center h-full">
            <View className="flex-1 bg-[#2e64e515] justify-center items-center w-full h-full ">
                {image != null ? <Image className='w-full h-[250px] border m-2' source={{ uri: image }} /> : null}
                <TextInput
                    placeholder="What's on your mind ?"
                    multiline
                    numberOfLines={4}
                    value={post}
                    onChangeText={(postContent) => setPost(postContent)}
                    placeholderTextColor='#2e64e1'
                    className='text-black'
                />

                {uploading ? (
                    <View className='items-center justify-center'>
                        <Text className='text-gray-700'>{transferred} % Completed!</Text>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                ) : (
                    <TouchableOpacity
                        className="flex-row justify-center items-center w-[100px] h-10 bg-[#5180ee] mb-1 rounded-xl"
                        onPress={submitPost}
                    >
                        <Text className='text-[18px]'>Submit</Text>
                    </TouchableOpacity>
                )}
            </View>
            <FloatingAction
                actions={actions}
                onPressItem={name => {
                    if (name === 'bt_take_photo') {
                        takePhotoFromCamera()
                    } else if (name === 'bt_choose_photo'
                    ) {
                        choosePhotoFromLibrary()
                    }
                }}
            />

        </View >
    )
}

export default NewPost