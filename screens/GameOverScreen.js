import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover" fadeDuration={500}/>
            </View>
            <Text style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></Text>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 2,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
    },
    highlight: {
        color: Colors.primary,
    }
});

export default GameOverScreen;