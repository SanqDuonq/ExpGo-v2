import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

interface IInput {
    name: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
    secureTextEntry?: boolean;
}

const InputComponent = (props: IInput) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.name}</Text>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                placeholderTextColor="#999"
            />
            <View style={styles.errorContainer}>
                {props.error ? (
                    <Text style={styles.errorText}>{props.error}</Text>
                ) : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        color: '#4B5563',
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        paddingHorizontal: 16,
        height: 50,
        fontSize: 16,
    },
    errorContainer: {
        height: 20,
        marginTop: 4,
    },
    errorText: {
        color: '#F87171',
        fontSize: 12,
    },
});

export default InputComponent;
