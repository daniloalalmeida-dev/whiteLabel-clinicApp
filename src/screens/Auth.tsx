import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import {
	ImageBackground,
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableOpacityBase,
	TouchableOpacity,
	Alert,
} from 'react-native';
import MainScreen from './MainScreen';
import AuthInput from '../components/AuthInput';
import { server, showError, showSuccess } from '../common';
import axios from 'axios';

const backgroundImage = require('../../assets/imgs/background2.jpg');

export default class Auth extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		stageNew: true,
	};

	signinOrSignup = () => {
		if (this.state.stageNew) {
			this.signup();
		} else {
			this.signin();
		}
	};

	signup = async () => {
		try {
			await axios.post(`${server}/users`, {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
				confirmPassword: this.state.confirmPassword,
			});

			showSuccess('Usuário cadastrado.');
			this.setState({ stageNew: false });
		} catch (e) {
			showError(e);
		}
	};

	signin = async () => {
		try {
			await axios.post(`${server}/sign-in`, {
				email: this.state.email,
				password: this.state.password,
			});

			this.props.navigation.navigate('MainScreen');
		} catch (e) {
			showError(e);
		}
	};

	render(): React.ReactNode {
		return (
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<Text style={styles.title}>Login</Text>
				<View style={styles.formContainer}>
					<Text style={styles.subtitle}>
						{this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
					</Text>
					{this.state.stageNew && (
						<AuthInput
							icon='account'
							placeholder='Nome'
							value={this.state.name}
							style={styles.input}
							onChangeText={(name: String) => this.setState({ name })}
						/>
					)}
					<AuthInput
						icon='at'
						placeholder='E-mail'
						value={this.state.email}
						style={styles.input}
						onChangeText={(email: String) => this.setState({ email })}
					/>
					<AuthInput
						icon='lock'
						placeholder='Senha'
						value={this.state.password}
						style={styles.input}
						onChangeText={(password: String) => this.setState({ password })}
						secureTextEntry={true}
					/>
					{this.state.stageNew && (
						<AuthInput
							icon='lock-alert'
							placeholder='Confirmação de Senha'
							value={this.state.confirmPassword}
							style={styles.input}
							secureTextEntry={true}
							onChangeText={(confirmPassword: String) =>
								this.setState({ confirmPassword })
							}
						/>
					)}
					<TouchableOpacity onPress={this.signinOrSignup}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>
								{this.state.stageNew ? 'Registrar' : 'Entrar'}
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ padding: 10 }}
						onPress={() => this.setState({ stageNew: !this.state.stageNew })}
					>
						<Text style={styles.linkSignInOrLoginIn}>
							{this.state.stageNew
								? 'Já possui uma conta?'
								: 'Ainda não possui uma conta?'}
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 50,
		marginBottom: 10,
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		color: 'white',
	},
	subtitle: {
		fontSize: 20,
		marginBottom: 10,
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
	},
	formContainer: {
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		padding: 20,
		width: '90%',
		borderRadius: 10,
	},
	input: {
		padding: 10,
		marginTop: 10,
		backgroundColor: 'white',
		borderRadius: 6,
		fontSize: 20,
	},
	button: {
		backgroundColor: '#00f',
		marginTop: 10,
		padding: 10,
		alignItems: 'center',
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 20,
		color: 'white',
	},
	linkSignInOrLoginIn: {
		fontSize: 20,
		marginBottom: 10,
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		textDecorationLine: 'underline',
	},
});
