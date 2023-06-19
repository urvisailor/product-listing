import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Header from '../components/header'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/action'
import icons from '../constants/icons'
import colors from '../constants/colors'
import { NavigationProp } from '@react-navigation/native'

interface PropType {
    navigation: NavigationProp<any, any>
}

const Products = (props: PropType) => {
    const dispatch = useDispatch<any>()
    const [product, setproduct] = useState()
    const pro = useSelector<any>(state => state.product)

    useEffect(() => {
        dispatch(getProducts())
        setproduct(pro?.products)
    }, [])

    const onSearch = (text: string) => {
        const products = pro.products.filter((item: any, index: number) => item.category.toLowerCase().includes(text.toLowerCase()) || item.title.toLowerCase().includes(text.toLocaleLowerCase()))
        setproduct(products)
    }

    return (
        <View style={styles.container}>
            <Header onSearch={onSearch} />
            <View style={{ ...styles.headerView, marginHorizontal: 17 }}>
                <Text style={styles.title}>Sneakers</Text>
                <View style={styles.headerView}>
                    <Image source={icons.UPDOWN} style={styles.img} />
                    <Image source={icons.FILTER} style={styles.img} />
                </View>
            </View>
            <Text style={styles.totalText}>{pro?.products?.length} products found</Text>
            <FlatList
                data={product || pro?.products}
                initialNumToRender={10}
                numColumns={2}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate('ProductDetails', { details: item })}>
                            <Image source={icons.HEART} style={styles.liked} />
                            <Image source={{ uri: item.image }} style={styles.coverimg} />
                            <Text style={styles.category}>{item.category}</Text>
                            <Text style={styles.description}>{item.description.substring(0, 18)}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Products