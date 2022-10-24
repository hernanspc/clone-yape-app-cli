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

const Scanner = () => {
    const navigation = useNavigation();
    const [data, setData] = useState('')

    const handleSuccess = e => {
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        // );

        Linking.openURL(e.data).then(() => {
            setData(e.data)
        }).catch(err =>
            console.error('An error occured', err)
        );

    };
    const handleCapture = () => {
        const scan = data;
        navigation.navigate('Transferencias', { scan: scan })
    }

    return (
        <>
            <QRCodeScanner
                onRead={handleSuccess}
                flashMode={RNCamera.Constants.FlashMode.torch}
                topContent={
                    <Text style={styles.centerText}>
                        Go to{' '}
                        <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                        your computer and scan the QR code.
                    </Text>
                }
                bottomContent={
                    <MyButton
                        title={'Go it'}
                        onPress={
                            handleCapture
                        }
                        type='primaryYape'
                    />
                }
            />
        </>
    )
}

export default Scanner

const styles = StyleSheet.create({})