import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck, faDownload } from '@fortawesome/free-solid-svg-icons'

const TransactionSuccess = () => {
  return (
    <View className='items-center justify-evenly flex-1'>
        <Text className='text-black font-bold text-4xl'>Transaction Status</Text>
      <FontAwesomeIcon icon={faCircleCheck} size={120} />
      <Text className='text-2xl font-bold text-black'>Success</Text>
      <TouchableOpacity className='flex-row border gap-x-2 rounded-md py-4 px-2'>
        <FontAwesomeIcon icon={faDownload} />
        <Text>Download Receipt</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TransactionSuccess