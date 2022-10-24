import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import MyText from '../components/MyText';

const Mensaje = () => {

    const route = useRoute();
    const { params } = route
    const { content } = params;

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <MyText type='title'>{content?.mensaje}</MyText>

            <MyText >{content?.operacion}</MyText>
        </View>
    )
}

export default Mensaje

const styles = StyleSheet.create({})