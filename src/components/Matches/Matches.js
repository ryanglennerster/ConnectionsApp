import { View, Text, ScrollView, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { datesData as connectionsData} from '../../constants';

export default function Matches() {
    return (
        <View className="mt-4">
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                className="space-x-4" 
                contentContainerStyle={{
                    paddingLeft: hp(2),
                    paddingRight: hp(2),
                }}
            >
                {
                    connectionsData.map((matches, index) => {
                        return (
                            <TouchableOpacity key={index} className="flex items-center space-y-1">
                                <View className="rounded-full">
                                    <Image 
                                        source={ matches.imgUrl }
                                        style={{
                                            width: hp(6), 
                                            height: hp(6)
                                        }}
                                        className="rounded-full"
                                    />
                                </View>
                                <Text className="text-neutral-800 font-bold" style={{fontSize: hp(1.6)}}>
                                    {matches.name}
                                </Text>
                                <Text className="text-neutral-800 font-bold" style={{fontSize: hp(1.6)}}>
                                        {matches.age}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}