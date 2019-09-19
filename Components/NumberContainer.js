import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NumberContainer = props => {
    return (
        <View style={styles.container}> 
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        borderWidth:  4,
        borderColor: '#dd5a71',
        padding:  10,
        borderRadius: 10,
        marginVertical : 10,
        alignItems:  'center',
        justifyContent: 'center',
    
    },
    number: {
        color: '#dd5a71',
        fontSize: 22
    },
});

export default NumberContainer;