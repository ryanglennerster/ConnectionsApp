import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        //validate user when back end is implemented

        navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>LOGO HERE</Text>
                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                    secureTextEntry={false}
                />
                <CustomInput 
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    setValue={setPassword}
                />
                <CustomButton 
                    text="Sign In"
                    onPress={onSignInPressed}
                />
                <CustomButton 
                    text="Forgot Password?"
                    onPress={onForgotPasswordPressed}
                    type='TERTIARY'
                />
                <SocialSignInButtons/>
                <CustomButton 
                    text="Don't have an account? Create one"
                    onPress={onSignUpPressed}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
})

export default SignInScreen