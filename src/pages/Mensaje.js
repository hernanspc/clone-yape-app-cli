import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import MyText from '../components/MyText';
import MyButton from '../components/MyButton';

const Mensaje = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { params } = route
    const { content, phone } = params;

    handlePress = () => {
        navigation.setParams({ scan: '' });
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
            <MyText type='title'>✨ {content?.mensaje}</MyText>
            <MyText type='body'>Numero {phone}</MyText>
            <MyText >Numero Operacion: {content?.operacion}</MyText>

            <MyButton title="Regresar" type='primaryYape' onPress={handlePress} />
        </View>
    )
}

export default Mensaje

const styles = StyleSheet.create({})