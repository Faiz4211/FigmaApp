import React from 'react';
import { StyleSheet, Text, View, Image, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-vector-icons';


export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={{
                position: 'absolute',
                width: 88,
                height: 77,
                left: 143,
                top: 40,

            }}
                source={require("../images/logo.png")}></Image>
            <Text style={{
                fontFamily: 'Inter-Bold',
                fonSize: 40,
                color: "#3E1A00",
                lineHeight: 40,
                fontWeight: 'bold',
                letterSpacing: -0.23999999463558197,
                textAlign: 'center',
                height: 41,
                width: 99,
                left: 138,
                top: 120,


            }}>Sign In</Text>
            <Text style={{

                fontFamily: 'Inter-Bold',
                fontSize: 17,
                lineHeight: 22,
                letterSpacing: -0.23999999463558197,
                textAlign: 'center',
                top: 130,
                color: "#9CA5BF"

            }}>I’m happy to see you again</Text>
            <View style={styles.input}>
                <TextInput
                    label="Email"
                />
                <TextInput style={{ color: "#9CA5BF" }}
                    label="Password"
                />

            </View>
            <View style={styles.forgotbtn}>
                <TouchableOpacity
                >
                    <Text style={{
                        fontFamily: 'Inter-Bold',
                        fontSize: 13,
                        lineHight: 18,
                        letteSpacing: -0.07800000160932541,
                        textAlign: 'right',
                        color: "#3E1A00"


                    }}>
                        Forgot password?
                    </Text>

                </TouchableOpacity>
            </View>


            <View style={styles.viewText}>

                <Text style={{
                    fontFamily: 'Inter-Bold',
                    fonStyle: 'normal',
                    fonWeight: 400,
                    fontSize: 16,
                    lineHeight: 24,
                    texAlign: 'center',
                    color: "#9CA5BF",
                    top: 320,

                }}

                >Or Login With </Text>

            </View>
            <View style={styles.icons}>
                <Icon
                    onPress={console.log("pressed")}
                    name="facebook" size={30} color="blue" />
                <Icon
                    onPress={console.log("pressed")}
                    name="google" size={30} color="blue" />

            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    },
    input: {
        // backgroundColor: "#F5F5F5",
        top: 180,
        height: 60,
        width: 385,
    },
    forgotbtn: {
        height: 18,
        width: 112,
        left: 247,
        top: 270,
    },

    viewText: {
        textAlign: 'center',
        left: 135,

    },
    icons: {
        top: 350,
        width: 57,
        height: 56,
        left: 121,


    }

})
