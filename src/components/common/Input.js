import React from 'react';
import { TextInput, View, Text} from 'react-native';

// warp a TextInput and make it looks nice

const Input = ({ label, value, onChangeText }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={{ height: 20, width: 100 }}
            />
        </View>
    );
};

export { Input };
