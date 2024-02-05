import { View, Text, Image } from 'react-native'
import React from 'react'
import { faBell, faQrcode, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const Header = () => {
    return (
        <View className="border h-16 flex-row items-center justify-between px-3">
            <View className="flex-row">
                <Image source={require("../assets/person.png")}
                    className="h-10 w-10 border rounded-full bg-gray-400 mr-2" />
                <Text className="text-black font-bold pt-2">Hello {'\n'} Vlone</Text>
            </View>
            <FontAwesomeIcon icon={faSearch} size={25}/>
            <View className="flex-row gap-4 ">
            <FontAwesomeIcon icon={faQrcode} size={25}/>
            <FontAwesomeIcon icon={faBell} size={25} />
            </View>
        </View>
    )
}

export default Header