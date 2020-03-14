import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../assets/logo.svg';

import * as Google from 'expo-google-app-auth';

import * as iosAuth from '../../secrets/ios-auth-client';

const IOS_CLIENT_ID = iosAuth.iosClientID;
const ANDROID_CLIENT_ID = '';

export default class LoginScreen extends Component {
  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        console.log("LoginScreen.js.js 21 | ", result.user.givenName);
        this.props.navigation.navigate("Profile", {
          username: result.user.givenName
        }); //after Google login redirect to Profile
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log('LoginScreen.js.js 30 | Error with login', e);
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo style={styles.logo}></Logo>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
         <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGoogle} onPress={this.signInWithGoogle}>
         <Text style={styles.buttonText}> Sign in with Google </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    marginBottom: 100,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7FCD91',
    textAlignVertical: 'center',
    height: 48,
    width: 311,
    paddingTop: 6,
    borderRadius: 24,
    marginVertical: 10,
  },
  buttonGoogle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555555',
    textAlignVertical: 'center',
    height: 48,
    width: 311,
    paddingTop: 6,
    borderRadius: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    lineHeight: 16,
    fontSize: 16,
    fontStyle: 'normal',
    fontFamily: 'Hiragino Sans',
  },
});
