import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header} color={Colors.primary}>
            <Text style={styles.headerTitle}>{ props.title }</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    }
});

export default Header;