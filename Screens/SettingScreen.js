import React from "react"
import {View, Text, Button} from 'react-native'

export default SettingScreen = ({ navigation }) => {
    return (
        <View style={{ marginVertical: 0, flex: 1, justifyContent: 'center', padding: 10 }}>
            <Text>Settings</Text>
            <Button title='Volver atrás' onPress={() => navigation.goBack()}></Button>
        </View>
    )
}