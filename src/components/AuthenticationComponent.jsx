import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const AuthenticationComponent = ({ selectedAuth, setSelectedAuth }) => {


  return (
    <View className='border rounded-md flex-row w-[80%] self-center'>
     
      <TouchableOpacity className={`border px-2 py-3  w-1/2 rounded-md ${selectedAuth === "faceid" ? 'bg-black' : ''}`} onPress={() => setSelectedAuth("faceid")}>

        <Text className={`text-center text-black ${selectedAuth === "faceid" ? ' text-white' : ''}`}  >Biometrics</Text>
      </TouchableOpacity>
      <TouchableOpacity className={`border px-2 py-3  w-1/2 rounded-md ${selectedAuth === "pin" ? 'bg-black text-white' : ''}`} onPress={() => setSelectedAuth("pin")}>

        <Text className={`text-center text-black ${selectedAuth === "pin" ? ' text-white' : ''}`} >PIN</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthenticationComponent