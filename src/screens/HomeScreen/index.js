import { View, Text, Platform, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useCallback } from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { profile } from '../../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { BellIcon } from 'react-native-heroicons/outline';
import { datesData as connectionsData} from '../../constants';
import ConnectionsCard from '../../components/ConnectionsCard/ConnectionsCard';

const android = Platform.OS === "android";
const { width, height } = Dimensions.get("window");

const HomeScreen = () => {

    const [fontsLoaded, fontError] = useFonts({
        MontserratSemiBold: require("../../fonts/Montserrat-SemiBold.ttf"),
        MontserratBold: require("../../fonts/Montserrat-Bold.ttf"),
        MontserratMedium: require("../../fonts/Montserrat-Medium.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if(!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView onLayout={onLayoutRootView} className="bg-white flex-1 justify-between" style={{paddingTop: android ? hp(2) : 0}}>
            <View className="w-full flex-row justify-between items-center px-4 mb-8">
                <View className="rounded-full items-center justify-center">
                    <Image
                        source={profile}
                        style={{
                            width: hp(4.5),
                            height: hp(4.5),
                            resizeMode: "cover"
                        }}
                        className="rounded-full"
                    />
                </View>
                <View>
                    <Text className="text-xl font-semibold text-center uppercase">
                        Fitness Connections
                    </Text>
                </View>

                <View className="bg-black/10 p-2 rounded-full items-center justify-center">
                    <TouchableOpacity>
                        <BellIcon size={25} strokeWidth={2} color="black"/>
                    </TouchableOpacity>
                </View>


            </View>
            <View className="pb-4">
                <View className="mx-4 mb-5">
                    <Text className="capitalize text-2xl font-semibold" style={{fontFamily: "Montserrat-Bold"}}>
                        Find connections
                    </Text>
                </View>
                <View>
                    <Carousel
                        data={connectionsData}
                        renderItem={({item}) => <ConnectionsCard item={item} />}
                        firstItem={1}
                        inactiveSlideScale={0.86}
                        inactiveSlideOpacity={0.6}
                        sliderWidth={width}
                        itemWidth={width * 0.8}
                        slideStyle={{display: "flex", alignItems: "center"}}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;