import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface TextFieldProps extends Omit<TextInputProps, 'secureTextEntry'> {
    placeholder: string;
    secureTextEntry?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            style={styles.input}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'skyblue',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%'
    }
});

export default TextField;
