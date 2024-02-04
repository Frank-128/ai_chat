import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AuthenticationComponent from '../components/AuthenticationComponent'
import FingerprintAuthentication from '../components/FingerprintAuthentication'

const Login = () => {
  const [selectedAuth,setSelectedAuth] = useState("fingerprint")
  
  return (
    <View className=''>
     <View className='h-[25%] bg-gray-400'>

     </View>
     <View className='h-[75%]'>
      <Text className='font-bold text-4xl text-center mt-5 text-black'>Welcome back</Text>
      {
        selectedAuth === "fingerprint" ? <FingerprintAuthentication/> : selectedAuth === "faceid" ? <Text>Faceid</Text> : <Text>Pin</Text>
      }
      <Text className='text-xs text-center my-2 font-bold'>Authentication option</Text>
     <AuthenticationComponent selectedAuth={selectedAuth} setSelectedAuth={setSelectedAuth} />
     </View>
    </View>
  )
}

export default Login