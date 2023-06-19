import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import icons from '../constants/icons'
import { NavigationProp, RouteProp } from '@react-navigation/native'
interface PropType {
    route: RouteProp<any, any>,
    navigation: NavigationProp<any, any>
}
const ProductDetails = (props: PropType) => {
    const {
        params
    } = props.route

    const starImage = (total: number) => {
        let startComp = []
        for (let i = 0; i < total; i++) {
            startComp.push(<Image source={icons.STAR} style={styles.img} key={i} />)
        }
        return (
            <View style={styles.raterow}>
                {startComp}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={icons.BGROUND} style={styles.upperHalf} >
                <View style={[styles.row, { margin: 10 }]}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image source={icons.BACK} style={styles.img} />
                    </TouchableOpacity>
                    <Image source={icons.HEART} style={styles.img} />
                </View>
                <Image source={{ uri: params?.details?.image }} style={styles.productimg} />
            </ImageBackground>
            <View style={styles.secondView}>
                <View style={[styles.row, styles.hr]}>
                    <Text style={styles.upperText}>{params?.details?.category}</Text>
                    <Text style={styles.upperText}>${params?.details?.price}</Text>
                </View>
                <View style={styles.hr}>
                    <Text style={styles.des}>{params?.details?.description}</Text>
                </View>
                <Text style={styles.rating}>Rating</Text>
                <View style={styles.raterow}>
                    {starImage(params?.details?.rating?.rate)}
                    <Text>({params?.details?.rating?.count})</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductDetails