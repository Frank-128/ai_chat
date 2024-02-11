import React, { useRef ,useState,useEffect} from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const OtpInput = () => {
  const initialTime = 5 * 60; // 5 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  const numberOfDigits = 4; // Change this to your desired number of OTP digits
  const inputs = Array.from({ length: numberOfDigits }, () => useRef(null));

  const handleOtpChange = (value, index) => {
    if (value && index < numberOfDigits - 1) {
      inputs[index + 1].current.focus();
    }
  };

  
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      } else {
        clearInterval(countdownInterval);
        // You can add additional logic here when the countdown reaches zero
        
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [timeRemaining]);


  return (
    <View>
      <Text className='text-black text-3xl pt-2 pb-20 text-center font-bold'>OTP Verification</Text>
      <Text className='text-center font-bold py-5 text-black'>Please enter the OTP we sent you</Text>
    <View className='justify-between flex-row px-10'>
      {inputs.map((inputRef, index) => (
        <TextInput
          key={index}
          className='w-16 h-16 border text-2xl text-center'
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(value) => handleOtpChange(value, index)}
          ref={inputRef}
        />
      ))}
    </View>
    <Text className='text-3xl text-center font-bold text-black py-5'>OTP expires in  {Math.floor(timeRemaining/60) +":"+ timeRemaining%60 }</Text>
        <Text className='text-black font-bold p-2 border rounded-md w-1/4 self-center text-center'>Submit</Text>
    </View>
  );
};

export default OtpInput;
