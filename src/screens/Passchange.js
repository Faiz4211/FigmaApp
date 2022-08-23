import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ForgetPass2({ navigation }) {
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
        width: 285,
        left: 74,
        top: 171,
      }}>Password Changed</Text>
      <View
        style={{
          left: 160,
          top: 300,
        }}
      >
        <Image style={{ left: 10, }}
          source={require("../images/Vector.png")}></Image>
        <View style={{
          height: 44,
          width: 247,
          top: 30,
        }}>
          <Text style={{
            fontFamily: 'Inter-',
            fontSize: 17,
            lineHeight: 22,
            right: 64,
            letterSpacing: -0.23999999463558197,
            textAlign: 'center',
            color: "#9CA5BF",
          }}

          >Your Password has been reset
            successfully</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}
          style={{
            backgroundColor: "#FFE78F",
            borderRadius: 15,
            top: 250,
            height: 56,
            width: 343,
            right: 120,
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
          >Sign in</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  }
})
