import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AuthenticationComponent from '../components/AuthenticationComponent'
import FingerprintAuthentication from '../components/FingerprintAuthentication'

import PinAuthentication from "../components/PinAuthentication";

import FaceIdAuthentication from '../components/FaceIdAuthentication'

const Login = ({navigation}) => {

  const [selectedAuth,setSelectedAuth] = useState("biometrics")



  return (
    <View>
     <View className='h-[20%] bg-gray-300'>

     </View>

     <View className='h-[80%] gap-y-8 items-center p-6'>
      <Text className='font-bold text-4xl mt-5 text-black'>Welcome back</Text>
    

      <Text className='text-xs text-center text-black my-2 font-bold'>Authentication option</Text>

{
        selectedAuth === "fingerprint" ? <FingerprintAuthentication/> 
        :
         selectedAuth === "faceid" 
         ? 
      <FaceIdAuthentication navigation={navigation}/>
        :
         <PinAuthentication/>
      }
      <Text className='text-xs text-center py-4 font-bold text-black'>Authentication option</Text>

     <AuthenticationComponent selectedAuth={selectedAuth} setSelectedAuth={setSelectedAuth} />
     
    </View>
    </View>
  )
}

export default Login