import React from 'react'
import { View, Text, TouchableOpacity, ListView, FlatList } from 'react-native'
import { faWallet, faEye, faQrcode, faSearch, faStar, faFileInvoiceDollar, faBuildingColumns, faFileLines, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ScrollView } from 'react-native-gesture-handler'



const HomePage = () => {
  const [showBalance, setShowBalance] = React.useState(false)

  ArrayThatContainListOfShits = [
    {
      name: "Internet bundle",
      amount: "1 GB",
      shillings: "TZS 2,100/="
    },
    {
      name: "Luku bill",
      amount: "14.0 units",
      shillings: "TZS 5,000/="
    }, {
      name: "Transfer to Visa",
      amount: "********567",
      shillings: "TZS 25,000/="
    },
    {
      name: "Water Bills",
      amount: "67 units",
      shillings: "TZS 10,000/="
    },
    {
      name: "Car Services",
      amount: "2x weekly",
      shillings: "TZS 100,000/="
    }
  ]

  return (
    <View className="p-4 gap-y-8">
    {  !showBalance ? 
     <View className="w-full items-center gap-y-4">
     <Text className="text-black font-bold text-3xl">TZS Couple Billions  </Text>
   <TouchableOpacity  onPress ={()=>setShowBalance(!showBalance)} className="border flex-row items-center rounded p-1 gap-x-3">
     <FontAwesomeIcon icon={faEyeSlash} size={20} />
     <Text className="text-black font-bold text-xl">
       Hide balance
     </Text>
   </TouchableOpacity>
   </View>
      :
      <View className="w-full items-center gap-y-4">
      <Text className="text-black font-bold text-3xl">TZS *********</Text>
    <TouchableOpacity onPress ={()=>setShowBalance(!showBalance)} className="border flex-row items-center rounded p-1 gap-x-3">
      <FontAwesomeIcon icon={faEye} size={20} />
      <Text className="text-black font-bold text-xl">
        Show balance
      </Text>
    </TouchableOpacity>
    </View>
    }
      <View className="gap-2 px-8">
        <View className="flex-row items-center gap-2">
          <FontAwesomeIcon icon={faStar} size={20} />
          <Text className="text-black text-xs">
            Assistant Suggestions
          </Text>
        </View>
        <ScrollView horizontal className="w-full h-28 gap-x-2">
          {
            ArrayThatContainListOfShits.map((item, index) => (
              <View key={index} className="border rounded-xl h-28 w-28 items-center justify-evenly">
                <Text className="text-black font-bold">
                  {item.name}
                </Text>
                <Text className="text-black font-bold text-xl">
                  {item.amount}
                </Text>
                <Text className="text-black font-bold">
                  {item.shillings}
                </Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
      <View className="flex-row gap-x-6 justify-center w-full pt-8">
        <TouchableOpacity>
      <FontAwesomeIcon icon={faWallet} size={60} />
      <Text className="text-black  text-lg">Send {'\n'}Money</Text>
        </TouchableOpacity>
        <TouchableOpacity>
      <FontAwesomeIcon icon={faFileInvoiceDollar} size={60} />
      <Text className="text-black   text-lg">Agent {'\n'}Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity>
      <FontAwesomeIcon icon={faBuildingColumns} size={60} />
      <Text className="text-black  text-lg">Bank {'\n'}Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity>
      <FontAwesomeIcon icon={faFileLines} size={60} />
      <Text className="text-black f  text-lg">My{'\n'} Statement</Text>
        </TouchableOpacity>

      </View>
      <View className="border h-48 rounded-xl justify-center items-center">
        <Text className="text-black text-xl">Service Promotion</Text>
      </View>
    </View>
  )
}

export default HomePage