import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import ChatDetailsScreen from '../screens/ChatDetailsScreen/Index';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {

    const HomeTabs = () => {
        return (
            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        let iconName;
                        if(route.name === "Home") {
                            iconName = "home";
                        } else if (route.name === "Chat") {
                            iconName = "chatbubbles-outline";
                        } else if (route.name === "Profile") {
                            iconName = "person-outline"
                        }

                        const customizeSize = 25

                        return <Ionicons name={iconName} size={customizeSize} color={focused ? "#3B82F6" : "gray"}/>
                    },

                    tabBarActiveTintColor: "#3b82f6",
                    tabBarLabelStyle: {
                        fontWeight: "bold"
                    },
                    tabBarInactiveTintColor: "gray",
                    tabBarStyle: {
                        backgroundColor: "white",
                    }
            })}
            >
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Chat' component={ChatScreen} />
                <Tab.Screen name='Profile' component={ProfileScreen} />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='SignIn' component={SignInScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
                <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
                <Stack.Screen name='NewPassword' component={NewPasswordScreen} />

                <Stack.Screen name='Home' component={HomeTabs} />

                <Stack.Screen name='ChatDetails' component={ChatDetailsScreen} options={{presentation: "modal"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;