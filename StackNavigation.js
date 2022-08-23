import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../screens/Splash'
import Login from '../screens/Login';
import LoginActive from "../screens/LoginActive";
import LoginActive1 from "../screens/LoginActive1";
import Forget from '../screens/Forget';
import ForgetPass from '../screens/ForgetPass';
import Passchange from '../screens/Passchange';
import Loginerror from "../screens/Loginerror";
import CreateAccount from '../screens/CreateAccount'
import Verification from '../screens/Verification'


const Stack = createStackNavigator();
const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#F5F5F5" },
            headerTintColor: '#000000',
            headerTitleStyle: {
                alignItems: 'center',
                headerBackTitleVisible: false,

            },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerShown: true,
        }}>
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false, }} />
            <Stack.Screen name='LoginActive' component={LoginActive} options={{ headerShown: false }} />
            <Stack.Screen name='LoginActive1' component={LoginActive1} options={{ headerShown: false }} />
            <Stack.Screen name='Forget' component={Forget} options={{ headerShown: true }} />
            <Stack.Screen name='ForgetPass' component={ForgetPass} options={{ headerShown: true }} />
            <Stack.Screen name='Passchange' component={Passchange} options={{ headerShown: true }} />
            <Stack.Screen name='Loginerror' component={Loginerror} options={{ headerShown: false }} />
            <Stack.Screen name='CreateAccount' component={CreateAccount} options={{ headerShown: true }} />
            <Stack.Screen name='Verification' component={Verification} options={{ headerShown: true }} />


        </Stack.Navigator>
    );
}

export { MainStackNavigator };
