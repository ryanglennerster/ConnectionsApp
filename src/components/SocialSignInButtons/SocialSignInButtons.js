import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {

    const onSignInWithFacebookPressed = () => {
        console.warn("Sign In with Facebook pressed")
    }

    const onSignInWithGooglePressed = () => {
        console.warn("Sign In with Google pressed")
    }

    const onSignInWithApplePressed = () => {
        console.warn("Sign In with Apple pressed")
    }

    return (
        <>
            <CustomButton 
                text="Sign In with Facebook"
                onPress={onSignInWithFacebookPressed}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
            <CustomButton 
                text="Sign In with Google"
                onPress={onSignInWithGooglePressed}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
            <CustomButton 
                text="Sign In with Apple"
                onPress={onSignInWithApplePressed}
                bgColor="#e3e3e3"
                fgColor="#363636"
            />
        </>
    )
}

export default SocialSignInButtons