import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import { useNavigation } from '@react-navigation/native'

const Transferencias = () => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [amount, setAmount] = useState(0)
    const navigation = useNavigation();

    const handlePost = async () => {
        const body = {
            phoneNumber: phoneNumber,
            amount: amount
        }
        console.log('body', body)
        const rawResponse = await fetch('https://transfer-project-313f8.web.app/operacion.json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ a: 1, b: 'Textual content' })
        });
        const content = await rawResponse.json();
        console.log(content);
        navigation.navigate('Mensaje', { content: content })
        // Alert.alert(content.mensaje + '', 'Operacion ' + content.operacion)
    }

    console.log('phoneNumber', phoneNumber)

    return (
        <View style={{ flex: 1 }}>
            <MyInput
                label={"Digite numero a transferir"}
                style={{ fontSize: 18, }}
                placeholder={'Numero a transferir'}
                keyboardType={'phone-pad'}
                onChangeText={setPhoneNumber}
            />
            <MyInput
                label={"Monto"}
                style={{ fontSize: 18, }}
                keyboardType={'numeric'}
                onChangeText={setAmount}
            />

            <MyButton
                title={'Transferrir'}
                type='primaryYape'
                onPress={handlePost}
                style={{ marginTop: 20 }}
            />
        </View>
    )
}

export default Transferencias

const styles = StyleSheet.create({})