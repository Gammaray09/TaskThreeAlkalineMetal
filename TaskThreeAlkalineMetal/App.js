import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Constants from "expo-constants";
import ElementButton from './components/elementButton';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
      <Text style={styles.title}>Alkaline Metals</Text>
      <View style = {styles.elements}>
        <ElementButton
            name = "Lithium"
            onPress = {() => console.log("works!")}
            backColor = "yellow"
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
            backColor = "yellow"
            underColor= "red"
            />
            <ElementButton
            name = "Potassium"
            symbol="K"
            num1="19"
            num2 = "39.038"
            onPress = {() => console.log("works!")}
            backColor = "yellow"
            underColor= "red"
            />
            <ElementButton
            name = "Rubidium"
            symbol="Rb"
            num1="37"
            num2 = "85.47"
            onPress = {() => console.log("works!")}
            backColor = "yellow"
            underColor= "red"
            />
            <ElementButton
            name = "Caesium"
            symbol="Cs"
            num1="55"
            num2 = "132.91"
            onPress = {() => console.log("works!")}
            backColor = "yellow"
            underColor= "red"
            />
            <ElementButton
            name = "Francium"
            symbol="Fr"
            num1="87"
            num2 = "223"
            onPress = {() => console.log("works!")}
            backColor = "yellow"
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
    backgroundColor: '#fff',
    
  },

  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    
  },
  title:{
    marginHorizontal:10,
    fontWeight: 'bold',
    fontSize: "40%",
    textAlign: 'center',
    justifyContent: "center",
    alignItems: "center",
    textDecorationLine: 'underline'
  },

  elements: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 50,
  }

});
