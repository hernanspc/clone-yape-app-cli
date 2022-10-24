import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Transferencias from '../pages/Transferencias';
import Mensaje from '../pages/Mensaje';
import ScanScreen from '../pages/Scanner'
import Home from '../pages/Home';
import Entypo from 'react-native-vector-icons/Entypo'

const Stack = createStackNavigator();

const TransferStack = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName='Home'
        >
            <Stack.Screen
                name="Home" component={Home}
                options={{
                    headerLeft: () => (
                        <Entypo.Button name={'menu'} size={25} color={"red"} backgroundColor='white'
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

export default TransferStack
