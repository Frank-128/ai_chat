import React from 'react'
import {Text, View} from "react-native";

const SendMoney = () => {
    return (
        <View className='flex items-center flex-col'>
            <Text className='text-black font-bold text-xl mt-6'>Send Money</Text>
            <View className='flex'>
                <View className='flex flex-col'>
                    <Text>Receiver</Text>
                </View>
                <View className='flex flex-col'>

                </View>
            </View>
        </View>
    )
}
export default SendMoney
