import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const AuthenticationComponent = ({selectedAuth,setSelectedAuth}) => {
    

  return (
    <View className='border rounded-md flex-row w-[70%] self-center '>
      <TouchableOpacity className={`border px-2 py-3 w-1/3 rounded-md ${selectedAuth ==="fingerprint"? 'bg-black':''}`} onPress={()=>setSelectedAuth("fingerprint")}>
      <Text className={`text-center ${selectedAuth ==="fingerprint"? ' text-white':''}`}  >FingerPrint</Text>
      </TouchableOpacity>
      <TouchableOpacity className={`border px-2 py-3  w-1/3 rounded-md ${selectedAuth ==="faceid"? 'bg-black':''}`} onPress={()=>setSelectedAuth("faceid")}>

      <Text className={`text-center ${selectedAuth ==="faceid"? ' text-white':''}`}  >FaceId</Text>
      </TouchableOpacity>
      <TouchableOpacity className={`border px-2 py-3  w-1/3 rounded-md ${selectedAuth ==="pin"? 'bg-black text-white':''}`} onPress={()=>setSelectedAuth("pin")}>

      <Text  className={`text-center ${selectedAuth ==="pin"? ' text-white':''}`} >PIN</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthenticationComponent