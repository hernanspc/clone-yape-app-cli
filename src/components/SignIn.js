import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../Context/AuthContext';
import MyButton from './MyButton';
import MyInput from './MyInput';
import MyText from './MyText';

const SignIn = () => {
    const { setAuthState, setEmail, email, setPassword, password, handleSignIn, isLoading } =
        useContext(AuthContext);
    const [disabled, setdisabled] = useState(false)

    useEffect(() => {
        if (!email || !password) {
            setdisabled(true)
        } else {
            setdisabled(false)
        }
    }, [email, password])

    return (
        <View>
            <MyText type="title" style={{
                marginBottom: 30,
                // fontFamily: 'Lobster-Regular',
            }}>
                Hola 👋🏻, Bienvenido
            </MyText>
            <MyInput label={"Correo Electronico"} onChangeText={setEmail} style={{ fontSize: 18, }} placeholder={'nombre@correo.com'} />
            <MyInput label={"Contraseña"} onChangeText={setPassword} secureTextEntry style={{ fontSize: 18, }} keyboardType='phone-pad' />

            <MyButton
                disabled={disabled}
                title={isLoading ? 'Cargando...' : 'Iniciar Sesion'}
                type='primaryYape'
                onPress={handleSignIn}
                style={{ marginTop: 20 }}
            />
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({})