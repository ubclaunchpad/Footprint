import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

// The ProfileScreen retrieves the user's name as the navigation
// parameter prop "username" and loads the profile photo from the Internet
// from the uri field being given the navigation parameter prop of photoUrl
export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile Screen </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Welcome, {this.props.navigation.getParam("username")}
        </Text>
        <Image source={{ uri: this.props.navigation.getParam("photoUrl")}} style={styles.profilePhoto} />
    
        <Button
          title="Sign out"
          onPress={() => this.props.navigation.navigate("Login")}
        />
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate("App")}
        />
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
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "gainsboro"
  },
});