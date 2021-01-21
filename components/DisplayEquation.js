import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DisplayEquation = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.display}> {props.dispaly} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    display: {
        fontSize: 30,
        color: 'white',
        textAlign: 'right'

    }
})
export default DisplayEquation;