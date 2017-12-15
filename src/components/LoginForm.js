import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    // helper method
    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        // this is an async operation which returns a Promise
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this)) // clear out spinner
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(() => {
                        this.setState(this.onLoginFail.bind(this));
                    });
            });
    }

    // helper
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '' // optional
        });
    }

    // helper
    onLoginFail() {
        this.setState({ error: 'Auth Failed', loading: false });
    }

    // helper method
    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
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
                    {this.renderButton()}
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
