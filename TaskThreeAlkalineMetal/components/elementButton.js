import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

function ElementButton({name,onPress, underColor, backColor}) {
    return (
     // here is where we will put the code for our Button
     <TouchableHighlight 
      onPress= {onPress}
      underlayColor= {underColor}    // changes color when pressed
      style={[styles.button, {backgroundColor: backColor}]}>
        <Text style={styles.text}>{name}</Text>
     </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
      height:50,
      width:50,
      margin: 10,
      padding: 5,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: "flex-end",
      borderWidth: 2,
  },
  name: {
    margin: 10,
    fontSize: 15,
  },
})
export default ElementButton;