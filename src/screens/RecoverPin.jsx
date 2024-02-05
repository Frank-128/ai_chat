import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Login from "./Login";

const RecoverPin = ({navigation}) => {
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerStyle: {
              backgroundColor: 'rgba(156,163,175,0.5)',
            },
            headerTintColor: 'white',
            headerLeft:()=>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
    
            <View>
              <Text>Back</Text>
            </View>
            </TouchableOpacity>,
           
          })
        
    },[])
  
    return (
    <View className='bg-white flex-1 p-4 gap-y-5'>
      <Text className='font-bold text-2xl text-center text-black'>Recover your PIN</Text>
      <View>
        <Text className='font-bold'>Please enter your phone number</Text>
        <TextInput className='border rounded-md' keyboardType='numeric' />
      </View>
      <View>
        <Text className='font-bold'>Please enter your NIDA number</Text>
        <TextInput className='border rounded-md' keyboardType='numeric' />
      </View>
      <View>
        <Text className='font-bold'>What was your last balance</Text>
        <TextInput className='border rounded-md' keyboardType='numeric' />
      </View>
            <TouchableOpacity>
                <Text className='border w-1/4 self-center text-center text-black text-xl rounded-md font-bold'>Submit</Text>
            </TouchableOpacity>
    </View>
  )
}

export default RecoverPin