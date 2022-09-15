import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { FloatingAction } from 'react-native-floating-action';

const NewPost = ({ navigation }) => {
    const [post, setPost] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [uploading, setUploading] = React.useState(false);

    console.log(post)

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

                {post || image ? (
                    <TouchableOpacity
                        className="flex-row justify-center items-center w-[100px] h-10 bg-[#2e64e1] mb-1 rounded-xl"
                        onPress={() => console.log('Submitted details sucessfully', navigation.navigate('Home'))}
                    >
                        <Text className='text-[18px]'>Submit</Text>
                    </TouchableOpacity>
                ) : null}
            </View>
            <FloatingAction
                actions={actions}
                onPressItem={name => {
                    if (name === 'bt_take_photo') {
                        takePhotoFromCamera()
                    } else if (
                        name === 'bt_choose_photo'
                    ) {
                        choosePhotoFromLibrary()
                    }
                }}
            />

        </View >
    )
}

export default NewPost