import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from "expo-constants";
import ElementButton from './components/ElementButton';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
      <Text style={styles.title}>Alkaline Metals</Text>
      <ElementButton
          name = "Lithium"
          onPress = {() => console.log("works!")}
          backColor = "yellow"
          underColor = "red"
          />
    <View style = {styles.roundButton}></View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  
    
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    
  },
  title:{
    marginHorizontal:10,
    fontWeight: 'bold',
    fontSize: 50,
    textDecorationLine: 'underline'
  },

  roundButton: {
    justifyContent: "center",
  }
});
