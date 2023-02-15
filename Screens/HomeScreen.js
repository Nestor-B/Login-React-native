import React from "react"
import {View, Text, Button, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from "../ContextProvider"

export default HomeScreen = ({ navigation }) => {
    const { dataLog, setDataLog } = React.useContext(Context)

    const removeDataLogin = async () => {
        await AsyncStorage.removeItem('DataLogin')
        setDataLog({ id: null, token: null })
    }
    return (
        <View style={style.container}>
            <Text style={style.title}>Home</Text>
            <View style={{padding: 5, marginVertical: 20}}>
                <Text>ID: {dataLog.id}</Text>
                <Text>EMAIL: {dataLog.email}</Text>
            </View>
            <Button title='Cerrar' onPress={removeDataLogin}></Button>
            <View style={{ marginVertical: 5 }}></View>
            <Button title='Settings' onPress={() => navigation.navigate('Settings')}></Button>
        </View>
    )
}

const style = StyleSheet.create({
    container: { marginVertical: 0, flex: 1, justifyContent: 'center', padding: 10 },
    title: {marginVertical: 10, fontSize: 33, textAlign: 'center'}
})