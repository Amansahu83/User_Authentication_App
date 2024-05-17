import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from 'react-native-mystyle-aman'; // Import styles
import { signUp } from '../API/auth';
import TextField from '../Components/TextField';
import { requireNativeComponent } from 'react-native';
// const CustomView = requireNativeComponent('CustomView');
// const TextField=lazy(()=>import('../Components/TextField'))
interface FormData{
    firstName:string;
    lastName:string;
    age:string;
    email:string;
    password:string
}
const SignUp = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        password: ''
    });

    const navigation = useNavigation();

    const handleSignUp = async () => {
        
        try {
            await signUp(formData.firstName, formData.lastName, formData.age, formData.email, formData.password);
            navigation.navigate('Login' as never);
            return 'SignUp Success';
        } catch (error) {
            return 'Error Saving data';
        }
    };

    const handleChangeText = (key:keyof FormData, value:string) => {
        setFormData({
            ...formData,
            [key]: value
        });
    };

    return (
        <View style={styles.container}>
            {/* <CustomView  /> */}
            <Text style={styles.title}>Registration Form</Text>
            <TextField placeholder='First Name' value={formData.firstName} onChangeText={(text:string) => handleChangeText('firstName', text)}  />
            <TextField placeholder='Last Name' value={formData.lastName} onChangeText={(text:string) => handleChangeText('lastName', text)}  />
            <TextField placeholder='Age' value={formData.age} onChangeText={(text:string) => handleChangeText('age', text)}  />
            <TextField placeholder='Email' value={formData.email} onChangeText={(text:string) => handleChangeText('email', text)}/>
            <TextField placeholder='Password' value={formData.password} onChangeText={(text:string) => handleChangeText('password', text)} secureTextEntry />
            <Button title='Sign Up' onPress={handleSignUp} />
        </View>
    );
};

export default SignUp;
