import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Transferencias = () => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [amount, setAmount] = useState(0)
    const navigation = useNavigation();
    const { top } = useSafeAreaInsets();

    const router = useRoute();
    const { params } = router;

    const handlePost = async () => {

        if (!phoneNumber || !amount) {
            alert('Es necesario ingresar el Nro de celular y el monto')
            return;
        } else {
            if (phoneNumber.length === 9) {
                console.log('OK')
            } else {
                alert('Es necesario que el telefono sea igual a 9 digitos')
                return;
            }
        }

        const body = {
            phoneNumber: phoneNumber,
            amount: amount
        }
        const rawResponse = await fetch('https://transfer-project-313f8.web.app/operacion.json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const content = await rawResponse.json();
        console.log(content);
        setAmount('')
        navigation.navigate('Mensaje', { content: content, phone: body?.phoneNumber })
        // Alert.alert(content.mensaje + '', 'Operacion ' + content.operacion)
    }

    const handleQrScreen = () => {
        navigation.navigate('ScanScreen')
    }

    useFocusEffect(
        useCallback(() => {
            console.log('useFocusEffect ', params?.scan)
            setPhoneNumber(params?.scan)

        }, [params?.scan])
    );

    useLayoutEffect(() => {
        setPhoneNumber('')
        setAmount('')
    }, [navigation]);

    return (
        <View style={{ flex: 1, marginTop: top + 20, marginBottom: 20, marginHorizontal: 20 }}>
            <MyInput
                label={"Digite numero a transferir"}
                style={{ fontSize: 18, }}
                placeholder={'Numero a transferir'}
                keyboardType={'phone-pad'}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
            />
            <MyInput
                label={"Monto"}
                style={{ fontSize: 18, }}
                keyboardType={'numeric'}
                onChangeText={setAmount}
                value={amount}
            />

            <MyButton
                title={'Transferir'}
                type='primaryYape'
                onPress={handlePost}
                style={{ marginTop: 20 }}
            />

            <MyButton
                title={'Scanner QR Code'}
                type='secondary'
                onPress={handleQrScreen}
                style={{ marginTop: 20 }}
            />

        </View>
    )
}

export default Transferencias

const styles = StyleSheet.create({})