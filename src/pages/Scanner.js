import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View
} from 'react-native';
import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import MyButton from '../components/MyButton';
import MyText from '../components/MyText';

const Scanner = () => {
    const navigation = useNavigation();
    const [data, setData] = useState(null)

    const handleSuccess = e => {
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        // );
        try {
            setData(e.data)
        } catch (error) {
            console.error('An error occured', error.message)
        }
    };
    const handleCapture = () => {
        if (!data) {
            return
        }
        const scan = data.substring(4, scan?.length);
        navigation.navigate('Transferencias', { scan: scan })
    }

    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <QRCodeScanner
                onRead={handleSuccess}
                flashMode={RNCamera.Constants.FlashMode.torch}
                topContent={
                    <MyText type='body'>Por favor escanea el QR y presionar el boton de abajo</MyText>

                }
                bottomContent={
                    <View style={{
                        position: 'absolute',
                        top: 0,
                    }}>
                        {data ?
                            <MyButton
                                title='✨✨✨ Numero obtenido, Continuar...'
                                onPress={
                                    handleCapture
                                }
                                type='primaryYape'
                            />
                            : null}
                    </View>
                }
            />
        </View>
    )
}

export default Scanner

const styles = StyleSheet.create({})