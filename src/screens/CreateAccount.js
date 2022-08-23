import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function CreateAccount({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={{
                position: 'absolute',
                width: 108,
                height: 100,
                left: 160,
                top: 55,
            }}
                source={require("../images/logo.png")}></Image>
            <Text style={{
                fontFamily: 'Inter-Bold',
                fontSize: 35,
                color: "#3E1A00",
                lineHeight: 40,
                fontWeight: 'bold',
                letterSpacing: -0.23999999463558197,
                textAlign: 'center',
                height: 41,
                width: 320,
                left: 50,
                top: 170,
            }}>Create New Password</Text>

            <TextInput style={{
                top: 200,
                marginLeft: 10,
                marginRight: 10,
                height: 65,
                width: 400,
            }}
                placeholder='New Password'
                right={<TextInput.Icon icon="eye" />}
            />
            <TextInput style={{
                top: 202,
                marginLeft: 10,
                marginRight: 10,
                height: 65,
                width: 400,
            }}
                placeholder='New Password'
                right={<TextInput.Icon icon="eye" />}
            />

            <TouchableOpacity
                onPress={() => navigation.navigate("Passchange")}
                style={{
                    backgroundColor: "#FFE78F",
                    borderRadius: 15,
                    marginTop: 470,
                    height: 56,
                    width: 343,
                    left: 35
                }}>
                <Text style={{
                    position: 'absolute',
                    height: 22,
                    left: 16,
                    right: 16,
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 17,
                    lineHeight: 22,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    letterSpacing: -0.408,
                    color: "#3E1A00",
                    top: 15,
                }}
                >Reset</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    }
})
