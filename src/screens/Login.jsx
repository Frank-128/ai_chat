import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AuthenticationComponent from '../components/AuthenticationComponent'
import FingerprintAuthentication from '../components/FingerprintAuthentication'
import FaceIdAuthentication from '../components/FaceIdAuthentication'

const Login = ({navigation}) => {
  const [selectedAuth, setSelectedAuth] = useState("fingerprint")
  
  return (
    <View>
     <View className='h-[20%] bg-gray-300'>

     </View>
     <View className='h-[80%] gap-y-8 items-center p-6'>
      <Text className='font-bold text-4xl mt-5 text-black'>Welcome back</Text>
    

      {

        selectedAuth === "fingerprint" ? <FingerprintAuthentication/> 
        :
         selectedAuth === "faceid" 
         ? 
      <FaceIdAuthentication navigation={navigation}/>
        :
         <Text className="text-black">Pin</Text>
      }
      <Text className='text-xs text-center py-4 font-bold text-black'>Authentication option</Text>

     <AuthenticationComponent selectedAuth={selectedAuth} setSelectedAuth={setSelectedAuth} />
     
    </View>
    </View>
  )
}

export default Login