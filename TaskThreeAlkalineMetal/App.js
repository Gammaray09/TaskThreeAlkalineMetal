import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Constants from "expo-constants";
import ElementButton from './components/elementButton';
import Title from './components/Title';
import colors from './App/config/colors';
import Icon from './components/Icon';




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
        <View style={[{flexDirection:'row'},{alignSelf:"center"}]}>
          <Icon
          name="atom"
          size={'40%'}
          color= "black"
          />

          <Title
          fontSize= "40%"
          fontType= 'underline'
          fontColor= 'black'
          text = 'Alkaline Metals'
          />

          <Icon
          name="atom"
          size={"40%"}
          color= "black"
          />
        </View>
      <View style = {styles.elements}>
        <ElementButton
            name = "Lithium"
            onPress = {() => console.log("works!")}
            backColor = {colors.yellow}
            symbol= "Li"
            num1="3"
            num2 ="7.0"
            underColor= "red"
            />
          <ElementButton
            name = "Sodium"
            symbol="Na"
            num1="11"
            num2 = "22.98"
            onPress = {() => console.log("works!")}
            backColor = {colors.lightRed}
            underColor= "red"
            />
            <ElementButton
            name = "Potassium"
            symbol="K"
            num1="19"
            num2 = "39.038"
            onPress = {() => console.log("works!")}
            backColor = {colors.lightBlue}
            underColor= "red"
            />
            <ElementButton
            name = "Rubidium"
            symbol="Rb"
            num1="37"
            num2 = "85.47"
            onPress = {() => console.log("works!")}
            backColor = {colors.lightGreen}
            underColor= "red"
            />
            <ElementButton
            name = "Caesium"
            symbol="Cs"
            num1="55"
            num2 = "132.91"
            onPress = {() => console.log("works!")}
            backColor = {colors.lightPink}
            underColor= "red"
            />
            <ElementButton
            name = "Francium"
            symbol="Fr"
            num1="87"
            num2 = "223"
            onPress = {() => console.log("works!")}
            backColor = {colors.pink}
            underColor= "red"
            />
          </View>
    <View style = {styles.roundButton}></View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    
    
  },

  scrollView: {
    backgroundColor: '#d3d3d3',
    width: "100%",

    
    
  },
  title:{
    fontWeight: 'bold',
    fontSize: "40%",
    textAlign: 'center',
    textDecorationLine: 'underline'
  },

  elements: {
    justifyContent: "center",
    alignItems: "center",
  }

});
