import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';

const Clarifai = require('clarifai');
const clarifai = new Clarifai.App({
  apiKey: '9103e2d29b9043df92a13e7ac5d8cb22',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
});

export default class CameraExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      navigate: props.navigation,
      itemText: ""
    };
  }

  async sendToServer(photo) {
    console.log(photo.base64);
    const response = await fetch('http://1e58dd6c.ngrok.io/process-request', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: photo.base64,
      }),
    });
    const responseBody = await response.json();
    console.log(responseBody);
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async takePicture() {
    const { navigate } = this.props.navigation;
    const photo = await this.camera.takePictureAsync({ base64: true });
    console.log(typeof (photo));
    try {
      let resized = await this.resize(photo);
      let predictedItem = await this.predict(resized);
      this.setState({ itemText: predictedItem })
      // await this.sendToServer(photo);
    } catch (e) {
      console.log(`Error: ${e}`)
    }
    // navigate("ProductInfo");
  }

  async resize(photo) {
    let manipulatedImage = await ImageManipulator.manipulateAsync(
      photo.uri,
      [{ resize: { height: 300, width: 300 } }],
      { base64: true }
    );
    return manipulatedImage.base64;
  }

  async predict(resized) {
    let item;
    let predictions = await clarifai.models.predict(
      Clarifai.GENERAL_MODEL,
      resized
    ).then(response => {
      const { concepts } = response.outputs[0].data;
      item = concepts["0"].name;
      console.log("this is a  ", concepts["0"].name);
    });
    return item;
  }


  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Text>
            {this.state.myText}
          </Text>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => {
            this.camera = ref;
          }}>
            <View
              style={{ ...styles.container }}>
              <Button style={styles.buttom} title="Take photo" onPress={() => this.takePicture()} />
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}