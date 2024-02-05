import { View, Text } from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OTPVerificication = () => {
  return (
    <View>
      <Text className='text-black text-3xl'>OTP Verification</Text>

      <Text className='my-5'>Please enter the OTP we sent you.</Text>

    <OTPInputView inCount={4}/>

    </View>
  )
}

export default OTPVerificication