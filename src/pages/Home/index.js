import {StyleSheet, Button, Text, View } from 'react-native';
import React from 'react'


export default function Home({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Hello world!</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})