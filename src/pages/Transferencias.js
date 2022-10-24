import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'

const Transferencias = () => {

    const handlePost = async () => {
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

        Alert.alert(content.mensaje + '', 'Operacion ' + content.operacion)
    }

    return (
        <View>
            <MyInput
                label={"Correo Electronico"}
                style={{ fontSize: 18, }}
                placeholder={'Numero a transferir'}
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