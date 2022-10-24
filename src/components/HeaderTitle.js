import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme'
import MyText from './MyText';

export const HeaderTitle = ({ title }) => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <MyText>{title}</MyText>
        </View>
    )
}
