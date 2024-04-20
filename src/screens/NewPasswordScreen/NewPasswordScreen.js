import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {

    const [confirmationCode, setConfirmationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('Home');
    }

    const onBackToSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput 
                    placeholder="Enter your confirmation code" 
                    value={confirmationCode} 
                    setValue={setConfirmationCode}
                    secureTextEntry={false}
                />
                <CustomInput 
                    placeholder="Enter your new password" 
                    value={newPassword} 
                    setValue={setNewPassword}
                    secureTextEntry={true}
                />
                <CustomButton 
                    text="Submit"
                    onPress={onSubmitPressed}
                />

                <CustomButton
                    text="Back to Sign in"
                    onPress={onBackToSignInPressed}
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

export default NewPasswordScreen;