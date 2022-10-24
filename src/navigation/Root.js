import * as React from 'react';
import { Pressable, View, Text, useColorScheme, Button } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import Transferencias from '../pages/Transferencias';
import Mensaje from '../pages/Mensaje';
import ScanScreen from '../pages/Scanner'
import TransferStack from '../stack/TransferStack';
import HomeStack from '../stack/HomeStack';
import { Icon } from 'react-native-vector-icons/Icon';

const Drawer = createDrawerNavigator();

function App() {
    const scheme = useColorScheme();

    return (
        <NavigationContainer
            theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Drawer.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Drawer.Screen
                    name="Home"
                    options={{
                        title: 'Transacciones',
                    }}
                    component={HomeStack}
                />
                <Drawer.Screen
                    name="TransferStack"
                    options={{
                        title: 'Transferencias'
                    }}
                    component={TransferStack} />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;

