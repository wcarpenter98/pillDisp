import { Auth } from 'aws-amplify';

async function signUp() {
    try {
        phone_number = "3048162450";
        password = "password";
        username = "username";
        email = "wcarpenter982@gmail.com";
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                phone_number,   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}