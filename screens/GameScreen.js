import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

import { Ionicons, Dimensions } from '@expo/vector-icons';

import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max= Math.floor(max);
    const rndNumber = Math.floor(Math.random() * (max-min)) + min;
    if (rndNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNumber;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver ]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert("Don\'t Lie!", "You know that this is wrong...", [{text: "Sorry!", style:"cancel"}]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }   
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name={'md-remove'} size={24} color="white"/></MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name={'md-add'} size={24} color="white"/></MainButton>
            </Card>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 400,
        maxWidth: '90%',

    }
});

export default GameScreen;