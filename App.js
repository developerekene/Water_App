// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import LoginScreen from './screens/loginScreen/login';
import {Text, View, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, NEWSIZES, SIZES } from './constants/theme';

const slides = [
  {
    id: 1,
    title: 'Find the best deals and special offers',
    description: 'Signing up and receiving your order is straightforward and effortless. There is no need to contact the seller or sign a contract.',
    image: require("./src/assets/boarding1.png")
  },
  {
    id: 2,
    title: 'Transparent Pricing',
    description: 'Before placing an order, customers will input their address for delivery and receive detailed pricing information. There are no hidden costs!',
    image: require("./src/assets/boarding2.png")
  },
  {
    id: 3,
    title: 'Timely Delivery',
    description: 'Depending on the customer’s needs, delivery can be one-time or long-running',
    image: require("./src/assets/boarding3.png")
  },
]


export default function App() {
const [showHomePage, setShowHomePage] = useState(false)
const buttonLabel = (label) => {
  return(
    <View style={{
      padding: 12,
      backgroundColor: COLORS.primary,
      width: 154,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',

    }}>
      <Text style={{
        color: 'white',
        fontWeight: '600',
        fontSize: SIZES.h4,
      }}>
        {label}
          <Image
          source={require("./assets/Vector.png")}
          style={{
            marginLeft: 10
          }}
        />
      </Text>
      
    </View>
  )
}
const buttonNewLabel = (label) => {
  return(
    <View style={{
      padding: 12,
      backgroundColor: '#FFFFFF',
      width: 120,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',

    }}>
      <Text style={{
        color: '#21334F',
        fontWeight: '600',
        fontSize: 14,
      }}>
        {label}
      </Text>
      
    </View>
  )
}
if(!showHomePage){
  return(
    <AppIntroSlider data={slides} 
      renderItem={({item}) => {
        return(
          <View style={
            {
              flex: 1,
              alignItems: 'center',
              paddingBottom: 20,
            }
          }>
            <View>
            <Image
              source={item.image}
              style={{
                marginTop: 30,
                width: 400,
                height: 300,
                marginBottom: 20,

              }}
              resizeMode="cover"
            />

            </View>
            
            <Text style={{
              fontWeight: 'bold',
              color: COLORS.title,
              fontSize: 20,
              marginTop: 25
            }}>
              {item.title}
            </Text>
            <Text style={{
              textAlign: 'left',
              paddingTop: 5,
              color: COLORS.title,
              fontSize: 14,
              marginTop: 15
            }}>
              {item.description}
            </Text>
            
          </View>
          
        )
      
        }
        

      }
      activeDotStyle={{
        backgroundColor: COLORS.primary,
      }}
      
      showSkipButton
      renderNextButton={() => buttonLabel("Next")}
      renderSkipButton={() => buttonNewLabel("Skip")}
      renderDoneButton={() => buttonLabel("Get Started")}
      onDone={() => {
        setShowHomePage(true)
      }}
    />
    
  )
}

return(
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignContent: "center",
  }}
  >
    <LoginScreen/>
  </View>
)
  
}

  
