import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { profileData } from '../../constants';
import { CameraIcon } from 'react-native-heroicons/outline';


export default function ProfileScreen() {

    const data = profileData[0];

    return (
        <ScrollView
            className="relative bg-white flex-1"
            style={{
                paddingBottom: hp(5),
            }}
        >
            <View>
                <Image
                    source={data.imgUrl}
                    style={{
                        width: wp(100),
                        height: hp(60),
                        borderTopLeftRadius: 30,
                        borderBottomRightRadius: 30,
                    }}
                    />
            </View>
            <View className="w-full absolute flex-row justify-end items-center pt-10">
                <View className="p-2 rounded-full bg-black/40 mr-5 justify-center">
                    <CameraIcon size={hp(3.5)} color={"white"} strokeWidth={1.5} />
                </View>
            </View>
            <View className="w-full justify-start items-start px-6 space-y-4 mt-6">
                <View className="flex-row space-x-2 justify-between w-full items-center">
                    <View className="flex-row">
                        <Text
                            className="text-black text-center font-bold text-x1"
                        >
                            {data.name}
                            {", "}
                        </Text>
                        <Text
                            className="text-black text-center font-bold text-x1"
                        >
                            {data.age}
                        </Text>
                    </View>
                    <Text>Edit</Text>
                </View>
                <View>
                    <View className="flex-row">
                        {
                            data.hobbies?.map((hobby, index) => (
                                <View
                                    key={index}
                                    style={{
                                        borderRadius: 20,
                                        padding: 5,
                                        paddingHorizontal: 10,
                                        marginRight: 5,
                                    }}
                                    className="bg-[#d3d3d3]"
                                >
                                    <Text
                                        className="text-black/70"
                                    >{hobby}</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
                <Text
                    className="uppercase font-semibold text-neutral-500 tracking-wider"
                >
                    Bio
                </Text>
                <Text
                    className="text-black/80 text-left font-medium text-sm"
                >{data.bio}</Text>
            </View>
        </ScrollView>
    )
}