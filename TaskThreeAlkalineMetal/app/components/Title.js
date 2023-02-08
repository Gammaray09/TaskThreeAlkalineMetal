import React from "react";
import { TouchableHighlight, Text, StyleSheet, Pressable, View } from 'react-native';


function Title({fontSize,fontType,text,fontColor}){
    return(
        <Text
        style={[styles.title, 
            {fontSize:fontSize}, 
            {textDecorationLine: fontType},
            {color: fontColor}]}
        >{text}</Text>
    )
}


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default Title;
