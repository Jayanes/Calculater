import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CalcButton = (props) => {
return (
    <TouchableOpacity onPress={props.onPress} 
    style={[styles.container, {backgroundColor: props.backgroundColor}, {...props.style}]}>
        <Text style={[styles.text, {color: props.color}]}>{props.title}</Text>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 5
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default CalcButton;