import { View, Text } from 'react-native'
import React from 'react'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TransactionFail = () => {
  return (
    <View className='items-center justify-evenly flex-1'>
    <Text className='text-black font-bold text-4xl'>Transaction Status</Text>
  <FontAwesomeIcon icon={faCircleXmark} size={120} />
  <View>
  <Text className='font-bold text-xl text-center text-black'>Failed </Text>
  <Text className='font-bold text-lg text-center text-black'>This could be due to network error</Text>
  </View>
  <TouchableOpacity className='w-full'>
    <Text className='rounded-md border text-2xl w-1/3 px-4'>Retry</Text>
  </TouchableOpacity>
</View>
  )
}

export default TransactionFail