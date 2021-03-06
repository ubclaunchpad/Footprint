import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../assets/logo.svg';

import * as Google from 'expo-google-app-auth';

// import * as iosAuth from '../../secrets/ios-auth-client';

// Note that the secrets folder is in the gitignore so we don't expose
// an API key. It might be worth it for everyone to create their
// own frontend/secrets/ios-auth-client.js file as well as an iOS
// client on GCP
const IOS_CLIENT_ID = "temp"; // iosAuth.iosClientID;
// Since no Android Client is configured on GCP, this is going to fail
const ANDROID_CLIENT_ID = '';

// Currently the standard "Login" button has no onPress function defined
// but we can add one later to the LoginScreen class
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.continue = this.continue.bind(this);
  }

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
          // We pass the user's given name and profile photo photourl
          // to the ProfileScreen as props. We can switch this to the
          // AnalyticsScreen easily enough. See the ProfileScreen to see
          // how the AnalyticsScreen can grab and use the props
          username: result.user.givenName,
          photoUrl: result.user.photoUrl
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

  // For now, the Login button bypasses sign-in for testing purposes
  continue() {
    const { navigate } = this.props.navigation;
    navigate("Profile");
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo style={styles.logo}></Logo>
        <TouchableOpacity style={styles.button} onPress={this.continue}>
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
