
import React, { useState } from 'react';
import { Text, View, Button ,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { loginUser } from '../API/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { styles } from './style'; // Import styles
export const Login = () => {
    const [Email_id,setEmail_id]=useState<string>('');
    const [password,setPasswod]=useState<string>('');
    const navigation = useNavigation(); // Initialize navigation
    const [EmailError,setEmailError]=useState<boolean>(false);
    const [PasswordError,setPasswordError]=useState<boolean>(false);
    const LoginData = async () => {

        !Email_id?setEmailError(true):setEmailError(false);
        !password?setPasswordError(true):setPasswordError(false);

        try {
            const token = await loginUser(Email_id, password);
            await AsyncStorage.setItem('token', token);
            navigation.navigate('Userinfo' as never);
            return 'Login Successfull';
        } catch (error) {
            return 'Invalid credentials';
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>User Login</Text>
            </View>
            <TextInput placeholder='Email_id' onChangeText={(item)=>setEmail_id(item)} style={styles.TextField}>
            </TextInput>
            {EmailError?<Text style={styles.TextError}>Please enter valid Email</Text>:null}
            <TextInput placeholder='Password' onChangeText={(item)=>setPasswod(item)} style={styles.TextField} secureTextEntry>
            </TextInput>
            {PasswordError?<Text style={styles.TextError}>Please enter valid Password</Text>:null}

            <Button 
                title='Login' 
                onPress={LoginData} 
            />
        </View>
    );
};


