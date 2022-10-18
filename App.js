/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node}
from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

import {
    TextInput,
    Card,
    Button,
    Text,
    SegmentedButtons
} from 'react-native-paper';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    const [value, setValue] = React.useState('encode');

    return (
        <SafeAreaView style={
            {
                flex: 1,
                justifyContent: "center",
                backgroundColor: "white"
            }
        }>
            <StatusBar barStyle={
                    isDarkMode ? 'light-content' : 'dark-content'
                }
                backgroundColor={
                    backgroundStyle.backgroundColor
                }/>

            <Card style={
                {
                    padding: 5,
                    backgroundColor: "white"
                }
            }>

                <SegmentedButtons value={value}
                    onValueChange={setValue}
                    buttons={
                        [
                            {
                                value: 'encode',
                                label: 'Encode'
                            }, {
                                value: 'decode',
                                label: 'Decode'
                            },
                        ]
                    }/>

                <TextInput mode="flat" placeholder="Enter Text Here"/>

                <Button mode="contained-tonal"
                    onPress={
                        () => console.log('Pressed')
                }>
                    Encode/Decode
                </Button>
            </Card>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400'
    },
    highlight: {
        fontWeight: '700'
    }
});

export default App;
