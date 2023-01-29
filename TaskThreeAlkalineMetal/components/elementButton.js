import React from 'react';
import { TouchableHighlight, Text, StyleSheet, Pressable, View } from 'react-native';

function ElementButton({name, num1, num2, onPress, underColor, backColor, symbol}) {
    return (
     // here is where we will put the code for our Button
     <TouchableHighlight 
      onPress= {onPress}
      underlayColor= {underColor}    // changes color when pressed
      style={[styles.button, {backgroundColor: backColor}]}>
        <View>
          <Text style={styles.symbol}>{symbol}</Text>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{num1}</Text>
          <Text style={styles.text}>{num2}</Text>
        </View>
     </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
      height:120,
      width:120,
      margin: 10,
      padding: 5,
      borderRadius: 20,
      backgroundColor: '#000000',
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      
  },
  symbol: {
    margin: 5,
    fontSize: 30,   
    fontWeight: 'bold',
  },
  name: {
    margin: 5,
    fontSize: 15,   
  },
})
export default ElementButton;