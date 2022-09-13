import { View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const Chat = () => {
    const [messages, setMessages] = useState([]);
    const renderBubble = (props) => {
        return (
            <Bubble {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: '#ccc8',
                        borderStyle: 'solid',
                        borderColor: '#fff'


                    }
                }}
                textStyle={{
                    right: {
                        color: 'white'
                    }
                }}
            />
        )
    }

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View className="mr-2 items-center mb-[5px]">
                    <MaterialIcons name="send-circle" size={32} color="#2e64d1" />
                </View>
            </Send>
        )
    }

    const scrollToBottom = () => {
        return (
            <FontAwesomeIcon  name="angle-double-down" size={32} color="#333" />
        )
    }

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello junior developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: require('../static/users/user-1.jpg')
                }
            },
            {
                _id: 2,
                text: 'Hello motherfucker',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: require('../static/users/user-1.jpg')
                }
            }
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    })
    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{ _id: 1 }}
            renderBubble={renderBubble}
            alwaysShowSend={true}
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomStyle={scrollToBottom}
        />
    )
}

export default Chat