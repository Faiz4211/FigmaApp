import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../screens/Splash';
import Login from "../screens/Login";


const Stack = createStackNavigator();
const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            // headerStyle: { backgroundColor: "#000000" },
            headerTintColor: '#fff',
            headerTitleStyle: {
                alignItems: 'center',
                headerBackTitleVisible: false,
            },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerShown: true,
        }}>
            {/* <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} /> */}
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />



        </Stack.Navigator>
    );
}

export { MainStackNavigator };
