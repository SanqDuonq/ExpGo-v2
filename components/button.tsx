import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

interface IButton {
    name: string;
    isLoading?: boolean;
    onPress?: () => void;
}

const ButtonComponent = (props: IButton) => {
    return (
        <TouchableOpacity
            style={[styles.button, props.isLoading && styles.buttonLoading]}
            onPress={props.isLoading ? undefined : props.onPress}
            disabled={props.isLoading}
        >
            {props.isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="small" color="#D9EFF0" />
                    <Text style={styles.loadingText}>Please wait</Text>
                </View>
            ) : (
                <Text style={styles.buttonText}>{props.name}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#02929A',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    buttonLoading: {
        opacity: 0.7,
    },
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loadingText: {
        color: '#FFFFFF',
        marginLeft: 8,
        paddingVertical: 4,
    },
    buttonText: {
        color: '#FFFFFF',
        paddingVertical: 4,
        fontWeight: 'bold',
    },
});

export default ButtonComponent;
