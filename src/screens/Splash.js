import React from "react";
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';



const MyComp = ({ navigation }) => (
    <Onboarding
        showSkip={false}
        showNext={false}
        showDone={true}
        showPagination={false}
        // onDone={() => console.log('done')}
        pages={[
            {
                key: [1],
                title: "",
                image: <Image></Image>,
                backgroundColor: "#FFE78F",
                subtitle:
                    <View style={{ flex: 1, }}>
                        <Image style={{
                            top: 200,
                            left: 120,
                            width: 200,
                            height: 180,

                        }}
                            source={require("../images/logo.png")}></Image>
                        <Text
                            style={{
                                fontFamily: "Inter-Bold",
                                fontSize: 35,
                                lineHeight: 38,
                                fontWeight: 'bold',
                                color: "#3E1A00",
                                letterSpacing: -0.25,
                                top: 200,
                                textAlign: 'center',
                            }}
                        >Bandland Events</Text>
                        <Text style={{
                            fontFamily: "Inter-Bold",
                            fontSize: 14,
                            lineHeight: 15,
                            color: "#3E1A00",
                            letterSpacing: -0.24,
                            top: 205,
                            textAlign: 'center',

                        }}>Outsource or get hired today</Text>
                        <Image style={{
                            top: 40,
                            minWidth: 450,
                        }}
                            source={require("../images/cover.png")}></Image>
                    </View>
            },
            {
                key: [2],
                title: "",
                image: <Image></Image>,
                backgroundColor: "#fff",
                subtitle:
                    <View style={{ flex: 1, }}>

                        <Image style={{
                            width: 100,
                            height: 97,
                            top: -50,
                        }}
                            source={require("../images/logo.png")}></Image>
                        <View style={{
                            backgroundColor: "#FFE78F",
                            borderRadius: 15,
                            width: 350,
                            height: 200,
                        }}>
                            <Image source={require("../images/Group.png")}></Image>
                            <View />

                            <Text style={{
                                fontFamily: 'Inter-Bold',
                                fontSize: 30,
                                lineHeight: 30,
                                fontWeight: 'bold',
                                color: "#3E1A00",
                                top: 100,
                                display: 'flex',
                                letterSpacing: -0.24,
                                width: 300,
                                alignItems: 'center',
                                textAlign: 'center',
                                left: 20,


                            }}>
                                Welcome
                                Banlend Events
                            </Text>

                            <Text style={{
                                fontFamily: 'Inter-Bold',
                                fontSize: 15,
                                lineHeight: 15,
                                fontWeight: 'normal',
                                color: "#3E1A00",
                                alignItems: 'center',
                                textAlign: 'center',
                                top: 120,
                                letterSpacing: -0.24,
                            }}>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                            </Text>

                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}
                                style={{
                                    backgroundColor: "#FFE78F",
                                    top: 220,
                                    borderRadius: 15,
                                    height: 56,
                                    width: 343,
                                }}
                            >
                                <Text style={{
                                    position: 'absolute',
                                    height: 22,
                                    left: 16,
                                    right: 16,
                                    fontFamily: 'Inter',
                                    fontStyle: 'normal',
                                    fontSize: 17,
                                    lineHeight: 22,
                                    display: 'flex',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    letterSpacing: -0.408,
                                    color: "#3E1A00",
                                    top: 15,

                                }}>
                                    Sign up as an Applicant
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                                style={{
                                    backgroundColor: "#C2C5C3",
                                    top: 240,
                                    borderRadius: 15,
                                    height: 56,
                                    width: 343,
                                }}

                            >
                                <Text style={{
                                    position: 'absolute',
                                    height: 22,
                                    left: 16,
                                    right: 16,
                                    fontFamily: 'Inter',
                                    fontStyle: 'normal',
                                    fontSize: 17,
                                    lineHeight: 22,
                                    display: 'flex',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    letterSpacing: -0.408,
                                    color: "#3E1A00",
                                    top: 15,

                                }}>
                                    Sign up as a Client
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View >
            }



        ]}
    />
);
export default MyComp;
