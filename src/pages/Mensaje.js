import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import MyText from '../components/MyText';
import MyButton from '../components/MyButton';

const Mensaje = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { params } = route
    const { content } = params;

    handlePress = () => {
        navigation.setParams({ scan: '' });
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', padding: 30 }}>
            <MyText type='title'>{content?.mensaje}</MyText>
            <MyText type='title'>{content?.phone}</MyText>
            <MyText >{content?.operacion}</MyText>

            <MyButton title="Regresar" type='primaryYape' onPress={handlePress} />
        </View>
    )
}

export default Mensaje

const styles = StyleSheet.create({})