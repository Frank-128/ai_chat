import React, { useEffect, useState } from 'react'
import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'


const FaceIdAuthentication = ({navigation}) => {

  useEffect ( () => {
    biometricVerification()
  ,[]})
    const biometricVerification = () => {

        let biometricRecords = new ReactNativeBiometrics()
        biometricRecords.isSensorAvailable()
            .then((resultObject) => {
                const { available, biometryType } = resultObject
                if (available && biometryType === BiometryTypes.Biometrics) {
                    biometricRecords.simplePrompt({ promptMessage: 'Authenticate with Biometrics' })
                        .then((resultObject) => {
                            const { success } = resultObject
                    
                            if (success) {
                               
                                navigation.navigate("Main")

                            } else {

                            }
                        })
                        .catch(() => {
                            

                        })
                }
            })
    }
    return (
        <View className="items-center gap-8">
            <Text className="text-black">Please look at your front camera</Text>
                <Image source={require("../assets/faceid.png")} className="h-32 w-32" />
            <Text className='text-center font-bold text-black'>Phone number : *********99</Text>
            <Text className='text-center font-bold text-black text-xl'>
                For easy authentcation, be sure {'\n'}to remove your hat/cap and glasses
            </Text>
        </View>
    )
}

export default FaceIdAuthentication