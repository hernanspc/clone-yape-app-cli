import * as React from 'react';
import { Pressable, View, Text, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';

function Story({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Our Story</Text>
            <Pressable
                onPress={() => navigation.navigate('Conference')}
                style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
            >
                <Text>Go to Conference</Text>
            </Pressable>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function App() {
    const scheme = useColorScheme();

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Home"
                    options={{
                        title: 'Transacciones'
                    }}
                    component={Home} />
                <Drawer.Screen
                    name="Story"
                    options={{
                        title: 'Transferencias'
                    }}
                    component={Story} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;
