import { StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../constants/colors';
import MyText from './MyText';

export const FlatListMenuItem = ({ menuItem }) => {
    console.log('menuItem', menuItem)
    const { cliente, fechaoperacion, monto } = menuItem;

    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <View style={styles.wrapperText}  >
                <TouchableOpacity style={{ paddingBottom: 15, }} onPress={() => { }}>
                    <MyText>{cliente}</MyText>
                </TouchableOpacity>
                <MyText>{fechaoperacion}</MyText>
            </View>
            <View style={styles.wrapperIcon}>
                <MyText>{monto}</MyText>
                <Entypo name="chevron-right" size={24} color={colors[colorScheme].textCredits} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        height: 50,
        paddingHorizontal: 10,
        shadowRadius: 10,
    },
    wrapperText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: "70%",
        height: "100%",
    },
    wrapperIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: "30%",
        height: "100%",
    }
})