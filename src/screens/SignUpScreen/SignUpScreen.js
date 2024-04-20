import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onTermsOfUsePressed = () => {
        console.warn("Terms of Use Pressed")
    }

    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy Pressed")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                    secureTextEntry={false}
                />
                <CustomInput 
                    placeholder="Email" 
                    value={email} 
                    setValue={setEmail}
                    secureTextEntry={false}
                />
                <CustomInput 
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    setValue={setPassword}
                />
                <CustomInput 
                    placeholder="Confirm Password" 
                    secureTextEntry={true}
                    value={confirmPassword} 
                    setValue={setConfirmPassword}
                />
                <CustomButton 
                    text="Register"
                    onPress={onRegisterPressed}
                />
                <Text style={styles.text}>
                    By registering you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text>
                    {' '}and{' '} 
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
                </Text>

                <SocialSignInButtons/>

                <CustomButton
                    text="Have an account? Sign in"
                    onPress={onSignInPressed}
                    type="TERTIARY"
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        margin: 10,
    },
    link: {
        color: '#FDB075'
    }
});

export default SignUpScreen;