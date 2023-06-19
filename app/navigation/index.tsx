import { createStackNavigator } from "@react-navigation/stack";
import Products from "../screens/products";
import ProductDetails from "../screens/productDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icons from "../constants/icons";
import { Image } from "react-native";
import colors from "../constants/colors";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const NavigationStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Products} name="Products" />
            <Stack.Screen component={ProductDetails} name="ProductDetails" />
        </Stack.Navigator>
    )
}

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: colors.BLACK }, headerShown: false }}>
            <Tab.Screen component={NavigationStack} name="home" options={{
                tabBarIcon: () => {
                    return (
                        <Image source={icons.HOME} style={{ width: 20, height: 20 }} />
                    )
                }, tabBarShowLabel: false
            }} />
            <Tab.Screen component={NavigationStack} name="list" options={{
                tabBarIcon: () => {
                    return (
                        <Image source={icons.LIST} style={{ width: 20, height: 20 }} />
                    )
                }, tabBarShowLabel: false
            }} />
            <Tab.Screen component={NavigationStack} name="cart" options={{
                tabBarIcon: () => {
                    return (
                        <Image source={icons.CART} style={{ width: 20, height: 25 }} />
                    )
                }, tabBarShowLabel: false
            }} />
            <Tab.Screen component={NavigationStack} name="heart" options={{
                tabBarIcon: () => {
                    return (
                        <Image source={icons.HEART} style={{ width: 25, height: 20 }} />
                    )
                }, tabBarShowLabel: false
            }} />
            <Tab.Screen component={NavigationStack} name="user" options={{
                tabBarIcon: () => {
                    return (
                        <Image source={icons.USER} style={{ width: 20, height: 20 }} />
                    )
                }, tabBarShowLabel: false
            }} />
        </Tab.Navigator>
    )
}

export default BottomTab