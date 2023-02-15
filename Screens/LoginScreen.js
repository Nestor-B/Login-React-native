import React from "react"
import {View, Text, TouchableOpacity, ScrollView, Dimensions, Alert, StyleSheet, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from "../ContextProvider"

export default Login = ({ navigation }) => {
    const height = Dimensions.get('window').height
    const { setDataLog } = React.useContext(Context)
    const pass = React.useRef()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const fetchDataLogin = () => {
        if (!email || !password) {
            pass.current.focus()
            return
        }

        // Eliseo@gardner.biz | 1
        fetch(`https://jsonplaceholder.typicode.com/comments?email=${email}&id=${password}`)
            .then(e => e.json())
            .then(async (e) => {
                let data = e[0]
                if (!e.length) {
                    Alert.alert('Error 404', 'Sorry the user was not found!', [
                        { text: '¿Register me?', onPress: () => navigation.navigate('Register') },
                        { text: 'Ok' }
                    ])
                    return
                }
                await AsyncStorage.setItem('DataLogin', JSON.stringify(data))
                setDataLog({...data, token: (Date.now())})
            }).catch(e => {
                console.log('Error: ' + e.error)
            })
    }

    return (
        <ScrollView>
            <View style={[style.container, { height: height }]}>
                <View>
                    <Text style={style.title}>Login</Text>
                    <TextInput ref={pass} style={style.textInput} placeholder="Email" onChangeText={(e) => setEmail(e)} />
                    <TextInput style={style.textInput} placeholder="Password" onChangeText={(e) => setPassword(e)} secureTextEntry={true} />
                    <TouchableOpacity style={style.buttonLoginSubmit} onPress={fetchDataLogin}>
                        <Text style={style.textButtonSubmit}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.buttonLoginSubmit, {backgroundColor: 'transparent'}]} onPress={() => navigation.navigate('Register')}>
                        <Text style={[style.textButtonSubmit, {color: 'black'}]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: { justifyContent: 'center', padding: 25, marginTop: 0 },
    title: { marginVertical: 20, textAlign: 'center', fontSize: 50 },
    textInput: { marginVertical: 7, padding: 10, borderWidth: 1, borderColor: 'gray' },
    buttonLoginSubmit: { padding: 15, backgroundColor: 'navy', marginTop: 10 },
    textButtonSubmit: { color: 'white', textAlign: 'center', fontSize: 17 }
})