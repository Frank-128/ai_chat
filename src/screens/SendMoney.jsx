import React, {useState} from 'react'
import {Button, Image, Text, TextInput, TouchableHighlight, TouchableOpacity, View} from "react-native";

const SendMoney = () => {
    const [pressedIndex, setPressedIndex] = useState(null);
    const [receiverNumber, setReceiverNumber] = useState('');
    const [amountQty, setAmountQty] = useState('');
    const names = [
        {
            'name':'Erick',
            'number':'0724309585'
        },
        {
            'name':'Sarr',
            'number':'0693489564'
        },
        {
            'name':'Mia',
            'number':'0723984722'
        },
        {
            'name':'James',
            'number':'0633689735'
        },
        {
            'name':'Salma',
            'number':'0758903465'
        },
    ];

    const amounts = [
        {
            'amount':'15,000'
        },
        {
            'amount':'30,000'
        },
        {
            'amount':'35,000'
        },
        {
            'amount':'24,000'
        },
        {
            'amount':'38,000'
        },
    ];
    return (
        <View className=' gap-8'>
            <View className='flex items-center'>
                <Text className='text-black font-bold text-xl mt-6'>Send Money</Text>
            </View>
            <View className='flex justify-evenly flex-row'>
                <View className='flex gap-2 flex-col'>
                    <Text className='text-black text-xs font-bold'>Receiver's number</Text>
                    <TextInput
                        className='flex text-xs border-gray-400 rounded-md border-2 w-40 h-8 p-1 text-black font-bold'
                        keyboardType="numeric"
                        value={receiverNumber}
                        onChangeText={text => {
                            if (text.length <= 10) { // Allow input only if the length is 10 or less
                                setReceiverNumber(text);
                            }
                        }}
                        maxLength={10}
                    />
                </View>
                <View className='flex gap-2 flex-col'>
                    <Text className='text-black text-xs font-bold'>Contacts</Text>
                    <Image source={require("../assets/contact.png")}  className="h-8 bg-amber-300 w-8" />
                </View>
            </View>
            <View className='flex gap-2'>
                <View className='flex flex-row items-center gap-1'>
                    <Image source={require("../assets/star.png")}  className="h-4 bg-amber-300 w-4" />
                    <Text className='text-xs text-black font-bold'>Assistant suggestions</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    {names.map((item, index) => (
                        <View key={index}>
                            <TouchableHighlight
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: pressedIndex === index ? 'gray' : 'white',
                                    padding: 10,
                                    borderWidth: 2,
                                    width: 70,
                                    borderRadius: 10,
                                }}
                                underlayColor="lightblue"
                                onPress={() => {
                                    setPressedIndex(index);
                                    setReceiverNumber(item.number); // Set the receiver's number to the number of the pressed button
                                }}
                            >
                                <Text style={{ color: 'black' }}>{item.name}</Text>
                            </TouchableHighlight>
                        </View>
                    ))}
                </View>
            </View>
            <View className='items-center '>
                <View className='flex flex-row justify-between gap-2 w-[80%]'>
                    <Text className='text-black font-bold'>Amount</Text>
                    <Text className='text-black'>Bal. 207,000.00</Text>
                </View>
                <View className='w-[80%] '>
                    <TextInput className='rounded-md border-2 border-gray-400 pl-2 '  value={amountQty} keyboardType='numeric' onChangeText={text => setAmountQty(text)}
                    />
                </View>
            </View>
            <View className='gap-2 '>
                <View className='flex flex-row items-center gap-1'>
                    <Image source={require("../assets/star.png")}  className="h-4 bg-amber-300 w-4" />
                    <Text className='text-xs text-black font-bold'>Assistant suggestions</Text>
                </View>
                <View className='flex flex-row text-black justify-evenly'>
                    {amounts.map((item, index) => (
                        <View key={index}>
                            <TouchableOpacity
                                className='items-center bg-white p-2 border-2 w-16 rounded-md'
                                onPress={() => {
                                    setAmountQty(item.amount);
                                }}
                            >
                                <Text className='text-black'>{item.amount}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
            <View className='items-center'>
                <TouchableOpacity
                    className='items-center bg-white p-2 border-2 w-16 rounded-md'
                    onPress={() => {
                        alert('Button pressed!');
                    }}
                >
                    <Text className='flex text-black font-bold'>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SendMoney
