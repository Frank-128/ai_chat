import { View, Text,TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState,useRef } from 'react'
import AuthenticationComponent from '../components/AuthenticationComponent'
import { useRoute } from '@react-navigation/native'

const ConfirmDetails = ({navigation}) => {
    const [selectedAuth,setSelectedAuth] = useState("pin")
    const [pin,setPin] = useState(Array(4).fill(''))
    const  [error,setError] = useState(false)
    const route = useRoute()
    const numberOfDigits = 4; 
    const inputs = Array.from({ length: numberOfDigits }, () => useRef(null));
    
    const {value} = route.params

  const handlePINChange = (value, index) => {
    let pinValues = [...pin];
    pinValues[index] = value;
    setPin(pinValues);

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
        <Text className='text-black'>Bal. TZS 207,000/=</Text>
      </View>
      <TextInput className='mx-10 mb-5 rounded-md border text-2xl'  keyboardType='numeric' value={String(value)} />
     
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
     
     <TouchableOpacity onPress={()=>{
         if(pin.join() == "1,2,3,4"){
            navigation.navigate("TransactionSuccess")
        }
        else{
            setError(true)
        }
     }}>

        {    error && <Text className='text-red-500 text-center'>Wrong PIN please try again</Text>
            }
            

        <Text className='border w-1/4 self-center text-center rounded-md text-black font-bold my-3 py-2 '>Submit</Text>
     </TouchableOpacity>
     
      <AuthenticationComponent selectedAuth={selectedAuth} setSelectedAuth={setSelectedAuth} />
    </View>
  )
}

export default ConfirmDetails