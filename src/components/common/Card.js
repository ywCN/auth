import React from 'react';
import { View } from 'react-native';

// Create this new Component instead of using View
// because of reusing styles (no CSS file)

const Card = (props) => {
    return (
        // {props.children} will insert JSX at {props.children}
        // because one component is passed to another
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,

        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };
