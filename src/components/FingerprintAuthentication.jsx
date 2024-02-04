import { View, Text, Image } from 'react-native'
import React from 'react'

const FingerprintAuthentication = () => {
  return (
    <View className='gap-y-4 mb-4'>
      <Text className='text-center font-bold'>Please touch your fingerprint scanner</Text>
      <Image className='w-16 self-center h-16 mb-10' source={require('../assets/fingerprint_.png')} />
      <Text className='text-center font-bold'>Phone number : *********99</Text>
      <Text className='text-center px-10 text-xl font-bold'>
        For easy authentication be sure to remove gloves, your hands are clean and not wet
      </Text>

    </View>
  )
}

export default FingerprintAuthentication