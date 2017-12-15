import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;
        // this is an async operation which returns a Promise
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed.' });
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        // these stuffs are passed as props
                        placeholder='user@gmail.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} //{email: email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        // these stuffs are passed as props
                        placeholder='password'
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry // just listing this means true
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
