import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// AsyncStore
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SettingScreen from './Screens/SettingScreen';

// Context Provider
import { Context } from './ContextProvider';

// Nav Stack
const Stack = createNativeStackNavigator();

function App() {
    const [dataLog, setDataLog] = React.useState({ id: null, token: null })
    const DataLogin = AsyncStorage.getItem('DataLogin')

    const ComprobarDataLogin = () => {
        if (DataLogin._A != null) {
            setDataLog(DataLogin)
        }
    }

    React.useEffect(() => {
        ComprobarDataLogin()
    }, [dataLog])

    return (
        <Context.Provider value={{ dataLog, setDataLog }}>
            <NavigationContainer>
                <Stack.Navigator>
                    {dataLog.token != null && dataLog.id != null ? 
                        <>
                            <Stack.Screen
                                name="Home"
                                component={HomeScreen}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Settings"
                                component={SettingScreen}
                                options={{ headerShown: false }}
                            /></> : <>
                            <Stack.Screen
                                name="Login"
                                component={LoginScreen}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Register"
                                component={RegisterScreen}
                                options={{ headerShown: false }}
                            />
                        </>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </Context.Provider>
    );
}

export default App;
