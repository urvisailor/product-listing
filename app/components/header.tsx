import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import icons from '../constants/icons'
import colors from '../constants/colors'

interface PropType {
    onSearch: (text: string) => void
}
const Header = (props: PropType) => {
    return (
        <View style={styles.container}>
            <Image source={icons.MENU} style={styles.img} />
            <View style={styles.bar}>
                <Image source={icons.SEARCH} style={[styles.img, styles.search]} />
                <TextInput style={styles.input} placeholder='Search product' onChangeText={(text) => props.onSearch(text)} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },
    img: {
        width: 20,
        height: 20
    },
    bar: {
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        marginLeft: 12,
        borderRadius: 10
    },
    input: {
        backgroundColor: colors.WHITE,
        width: '80%'
    },
    search: {
        margin: 12
    }
})