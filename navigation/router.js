import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from "../screens/home";
import PostUser from "../screens/posUser";
import Posts from "../screens/post"

const Tabs = createBottomTabNavigator() ;
const Stack = createNativeStackNavigator() ;

export function ReseauSocialStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
};

export function registerStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Inscription" component={PostUser} />
        </Stack.Navigator>
    )
}

export function PostsStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Ajouter Posts" component={Posts} />
        </Stack.Navigator>
    )
}

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Home" component={ReseauSocialStack} options={{ headerShown: false }} />
                <Tabs.Screen name="Inscription" component={registerStack} options={{ headerShown: false }} /> 
                <Tabs.Screen name="Posts" component={PostsStack} options={{ headerShown: false }}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}