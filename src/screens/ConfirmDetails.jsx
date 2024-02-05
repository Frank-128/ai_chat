import { View, Text,TextInput, Image } from 'react-native'
import React, { useState,useRef } from 'react'
import AuthenticationComponent from '../components/AuthenticationComponent'

const ConfirmDetails = ({navigation}) => {
    const [selectedAuth,setSelectedAuth] = useState("biometrics")

    const numberOfDigits = 4; 
    const inputs = Array.from({ length: numberOfDigits }, () => useRef(null));


  const handlePINChange = (value, index) => {
    if (value && index < numberOfDigits - 1) {
      inputs[index + 1].current.focus();
    }
  };

  return (
    <View>
      <Text className='font-bold text-3xl text-black text-center py-10'>Confirm Details</Text>
      <View className='flex-row p-8 gap-x-8 justify-between'>
        <View>
            <Text className='text-black font-bold'>Receiver's number</Text>
            <TextInput className='rounded-md border px-3 text-start  text-lg w-48 h-12' keyboardType="numeric" value='+25575633452' />
        </View>
        <View className='gap-y-2'>
            <Text className='text-black font-bold'>Receiver's name</Text>
            <Text className='text-black font-bold'>Marcus Alejandro</Text>
        </View>
      </View>
      <View className='px-10 justify-between flex-row'>
        <Text className='font-bold text-black'>amount</Text>
        <Text className='text-black'>Bal. TZS 243,560/=</Text>
      </View>
      <TextInput className='mx-10 mb-5 rounded-md border text-2xl'  keyboardType='numeric' value={'10,0000/='} />
     
     {
        selectedAuth === "biometrics" ? <Image source={require('../assets/fingerprint_.png')} className='w-20 h-20 self-center' /> :<>
        <Text className='text-center font-bold text-black py-4'>Please enter your PIN</Text>
        <View className='justify-between flex-row px-10'>
        
        {inputs.map((inputRef, index) => (
          <TextInput
            key={index}
            className='w-16 h-16 border rounded-md text-2xl text-center'
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handlePINChange(value, index)}
            ref={inputRef}
          />
        ))}
      </View>
      
      </>
     } 

      <Text className='text-center font-bold text-black py-4'>Confirm payment by</Text>
      <AuthenticationComponent selectedAuth={selectedAuth} setSelectedAuth={setSelectedAuth} />
    </View>
  )
}

export default ConfirmDetails