
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button, Modal } from 'react-native';
import { getUserProfile } from '../API/Userinfo';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
interface UserData {
  first_name?: string;
  last_name?: string;
  age?: string;
  email_id?: string;
}


const Userinfo = () => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [data, setData] = useState<UserData>({});
    const navigation = useNavigation();

    const getAPIData = async () => {
        try {
            const storedToken = await AsyncStorage.getItem('token');
            if (storedToken) {
                const profileData = await getUserProfile();
                setData(profileData);
            } else {
                return 'Token not found in AsyncStorage';  // eslint-disable-line
            }
        } catch (error) {
            return 'Error fetching data';   // eslint-disable-line
        }
    };

    const handleLogout = () => {
    // Clear token from AsyncStorage
        AsyncStorage.removeItem('token');
        setShowModal(false);
        navigation.navigate('Login' as never);

    };


    useEffect(() => {
        getAPIData();
    }, []);

    // const {first_name,last_name,email_id,age}=data?
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>User Dashboard</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>First Name:</Text>
                <Text style={styles.value}>{data?.first_name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Last Name:</Text>
                <Text style={styles.value}>{data?.last_name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{data?.email_id}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Age:</Text>
                <Text style={styles.value}>{data?.age}</Text>
            </View>
            <Modal transparent={true} visible={showModal} animationType='slide'>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.TextView}>Are you sure you want to logout?</Text>
                        <Button title='Logout User' onPress={handleLogout}/>
                    </View>
                </View>
            </Modal>
            <View>
                <Button title='Logout' onPress={() => setShowModal(true)} />
            </View>
        </ScrollView>
    );
};


export default Userinfo;
