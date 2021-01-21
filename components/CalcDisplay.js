import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CalcDisplay = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.display}> {props.dispaly} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5
    },
    display: {
        fontSize: 50,
        color: '#8E91A3',
        textAlign: 'right'

    }
})
export default CalcDisplay;