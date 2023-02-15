import React from "react"
import {View, Text, TouchableOpacity, ScrollView, Dimensions, StyleSheet, TextInput} from 'react-native'

export default Register = ({ navigation }) => {
    const height = Dimensions.get('window').height
    return (
        <ScrollView>
            <View style={[style.container, { height: height }]}>
                <View>
                    <Text style={style.title}>Register</Text>
                    <TextInput style={style.textInput} placeholder="Email" />
                    <TextInput style={style.textInput} placeholder="Password" secureTextEntry={true} />
                    <TouchableOpacity style={style.buttonLoginSubmit}>
                        <Text style={style.textButtonSubmit}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.buttonLoginSubmit, {backgroundColor: 'transparent'}]} onPress={() => navigation.navigate('Login')}>
                        <Text style={[style.textButtonSubmit, {color: 'black'}]}>Login</Text>
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