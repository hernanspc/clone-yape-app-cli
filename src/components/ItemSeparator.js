import React, { useContext } from 'react'
import { View } from 'react-native'

export const ItemSeparator = () => {

    return (
        <View
            style={{
                borderBottomWidth: 1,
                marginVertical: 8,
                borderBottomColor: 'gray'
            }}
        />
    )
}
