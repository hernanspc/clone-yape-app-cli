import { FlatList, Pressable, StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDataMovements } from '../hooks/useDataMovements';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { FlatListMenuItem } from '../components/FlatListMenuItem';

const Home = () => {
    const navigation = useNavigation();
    const { movements } = useDataMovements();

    return (
        <View style={{ flex: 1, }}>
            <FlatList
                data={movements}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item, index) => index}
                ListHeaderComponent={() => <HeaderTitle title="Opciones de menú" />}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})