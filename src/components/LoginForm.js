import React, { Component } from 'react';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

    onButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password);
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

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
