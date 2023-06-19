import { Dimensions, StyleSheet } from "react-native";
import colors from "../constants/colors";
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
    title: {
        color: colors.BLACK,
        fontSize: 30,
        fontWeight: '600'
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    totalText: {
        marginHorizontal: 20,
        color: colors.BLACK,
        marginBottom: 10
    },
    card: {
        backgroundColor: colors.WHITE,
        width: width / 2 - 30,
        marginHorizontal: 15,
        marginBottom: 15,
        padding: 10,
        borderRadius: 10
    },
    coverimg: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    liked: {
        tintColor: colors.BLACK,
        alignSelf: 'flex-end',
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    category: {
        color: colors.BLACK,
        marginHorizontal: 10,
        marginTop: 15
    },
    description: {
        fontSize: 10,
        marginHorizontal: 10,
        marginTop: 7
    },
    price: {
        fontSize: 12,
        marginHorizontal: 10,
        marginTop: 7,
        color: colors.BLACK,
        fontWeight: '900'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    upperHalf: {
        height: height / 3.5
    },
    productimg: {
        width: 200 ,
        height: 200,
        alignSelf:'center',
        marginTop:50
    },
    secondView:{
        marginTop:70,
        marginHorizontal:10
    },
    hr:{
        borderBottomWidth:1,
        paddingBottom:7,
        borderBottomColor:colors.border
    },
    upperText:{
        fontWeight: 'bold',
        fontSize:18,
        color:colors.BLACK
    },
    des:{
        color:colors.BLACK,
        paddingVertical:10
    },
    rating:{
        marginTop:10,
        color:colors.BLACK,
        fontWeight:'bold'
    },
    raterow:{
        flexDirection:'row'
    }
})
export default styles