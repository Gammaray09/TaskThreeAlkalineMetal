import React from "react";
import {FontAwesome5} from '@expo/vector-icons';
import { StyleSheet } from "react-native";


function Icon({name,color,size}){
    return(
        <FontAwesome5
        name={name}
        size={size}
        color={color}
        style={styles.icon}
        />
    )
}

const styles = StyleSheet.create({
    icon: {
      margin: 5,
      
  }
})


export default Icon;