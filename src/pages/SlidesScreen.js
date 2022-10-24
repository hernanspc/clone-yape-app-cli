import React, { useContext, useState } from 'react';
import { View, Image, Alert, Platform, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import ViewPager from 'react-native-pager-view';
import { RFValue } from 'react-native-responsive-fontsize';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../Context/AuthContext';

const slide1 = require('../assets/lotties/pay.json');
const slide2 = require('../assets/lotties/wallet.json');
const slide3 = require('../assets/lotties/pay-qr.json');

const data = [
    {
        image: slide1,
        text: `Paga en establecimientos\nVisita tu restaurante favorito`,
    },
    {
        image: slide2,
        text: `Envia y recibe dinero\ntransfiere gratis.`,
    },
    {
        image: slide3,
        text: `Envia gratis\n desde la comunidad de tu hogar.`,
    },
];

export const SlideCarrousel = () => {
    const { setAuthState } = useContext(AuthContext);

    const [selectedPage, setSelectedPage] = useState(0);
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#742284'
            // backgroundColor: '#b7d1d2'
        }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <View
                style={[styles.container, {
                    top: Platform.OS === 'android' ? '16%' : '10%',
                }]}>
                <ViewPager
                    style={styles.viewPager}
                    onPageSelected={event => { setSelectedPage(event.nativeEvent.position) }}>
                    <View key="slide_1" style={styles.slide1}>
                        <Lottie autoPlay loop source={data[0].image}
                            style={{
                                width: '85%',
                                alignSelf: 'center',
                            }}
                        />
                        <Text style={[styles.textSlide1, {
                            bottom: Platform.OS === 'android' ? -20 : -40,
                        }]} > {data[0].text}</Text>
                    </View>
                    <View
                        key="slide_2"
                        style={styles.slide2}>
                        <Lottie autoPlay loop source={data[1].image}
                            style={{
                                width: '88%',
                                // bottom: Platform.OS === 'android' ? '0%' : '0%',
                                alignSelf: 'center',
                            }}
                        />
                        <Text style={[styles.textSlide2, {
                            bottom: Platform.OS === 'android' ? -10 : -10,
                        }]} > {data[1].text}</Text>
                    </View>
                    <View
                        key="slide_3"
                        style={styles.slide3}>
                        <Lottie autoPlay loop source={data[2].image}
                            style={{
                                width: '80%',
                                alignSelf: 'center',
                            }}
                        />
                        <Text style={[styles.textSlide3, {
                            bottom: Platform.OS === 'android' ? -10 : -10,
                        }]} > {data[2].text}</Text>
                    </View>
                </ViewPager>
                <View style={styles.circleContainer} >
                    {data.map((_, index) => (
                        <View key={index} style={[styles.circleCarrousel, {
                            backgroundColor: index === selectedPage ? '#02d1b4' : 'white'
                        }]}
                        />
                    ))}
                </View>
            </View>

            {selectedPage === 2 && (

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.entryButton}
                        activeOpacity={0.8}
                        onPress={() => {
                            setAuthState("signIn");
                        }}
                    >
                        <Text style={{
                            color: '#0fcbb3',
                            fontSize: 16
                        }}>
                            Entrar
                        </Text>
                        <Icon
                            name="chevron-forward-outline"
                            color="#0fcbb3"
                            size={30}
                        />
                    </TouchableOpacity>
                </View>

            )}
        </View>
    );
};

export default SlideCarrousel;

const styles = StyleSheet.create({
    container: {
        height: '55%',
        width: '100%',
    },
    viewPager: {
        height: '100%',
        width: '100%',
    },
    slide1: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    slide2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
    },
    slide3: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
    },
    textSlide1: {
        fontSize: 23,
        textAlign: 'center',
        color: 'white',
        height: '20%',
    },
    textSlide2: {
        fontSize: 23,
        textAlign: 'center',
        color: 'white',
        height: '20%',
    },
    textSlide3: {
        fontSize: 23,
        textAlign: 'center',
        color: 'white',
        height: '20%',
    },
    circleContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    circleCarrousel: {
        width: 10,
        height: 10,
        borderRadius: RFValue(10),
        marginRight: RFValue(4),
        marginLeft: RFValue(4),
    },
    containerButton: {
        position: 'absolute',
        bottom: 70,
        width: '100%',
        flex: 1,
        // alignItems: 'center',
        marginLeft: 100,
        // height: 50,
        // backgroundColor: 'transparent',
        right: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    buttonDone: {
        // backgroundColor: 'red',
        // width: '80%',
        // height: 100,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 22,
    },
    entryButton: {
        flexDirection: 'row',
        backgroundColor: "#FFF",
        width: 140,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',
        bottom: 0,
        right: 30,
    }

})
