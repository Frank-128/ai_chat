import React, { useState, createRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PinAuthentication = ({navigation}) => {
    const [error,setError] = useState(false)
    const [otp, setOtp] = useState(Array(4).fill('')); // Initialize an array with 4 empty strings
    const inputRefs = Array(4).fill().map(() => createRef()); // Create refs for each TextInput

    const handleChange = (text, index) => {
        let otpValues = [...otp];
        otpValues[index] = text;
        setOtp(otpValues);

        // If a digit is entered and there's a next input, focus it
        if (text && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleAuth = ()=>{
        
      
        if(otp.join() == "1,2,3,4"){
            navigation.navigate("Main")
        }
        else{
            setError(true)
        }
    }


    const handleKeyPress = (e, index) => {
        // If backspace is pressed and the input is empty, focus the previous input
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    
    return (
        <View className='gap-4'>
            <Text className='text-center font-bold text-black'>Please enter your PIN</Text>
            <View className='flex-row justify-evenly  w-full  '>
                {Array.from({ length: 4 }, (_, index) => (
                    <TextInput
                        key={index}
                        ref={inputRefs[index]}
                        className='w-12 h-12 border-2 rounded-md text-black text-center text-2xl'
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        value={otp[index]}
                    />
                ))}
            </View>
            <Text className='text-center text-black font-bold'>Phone number : *********99</Text>
            {
                error && <Text className='text-red-500 text-center'>Wrong PIN please try again</Text>
            }
            
            <TouchableOpacity onPress={handleAuth}>
                <Text className='w-1/4 border rounded-md font-bold text-center text-black self-center text-xl'>Submit</Text>
            </TouchableOpacity>
            <Text className='text-center px-10 text-blue-500 text-xl font-bold'>Forgot PIN?</Text>
        </View>
    );
};

export default PinAuthentication;
