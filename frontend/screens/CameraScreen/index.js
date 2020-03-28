import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
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
  },
  outerCircle: {
    borderRadius: 30,
    height: 60,
    width: 60,
    borderColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: 'white'
  }
});

export default class CameraExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
              type: Camera.Constants.Type.back,
              navigate: props.navigation
            };
    }
    
  async sendToServer(photo) {
    const response = await fetch('https://003beecc.ngrok.io/process-request', {
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
    return responseBody;
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }
 
    async takePicture() {
        const { navigate } = this.props.navigation;
      const photo = await this.camera.takePictureAsync({ base64: true });
      let response;
        try {
            response = await this.sendToServer(photo);
        } catch (e) {
            console.log(`Error: ${e}`)
        }
      navigate("ProductInfo", {response: response});
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
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => {
            this.camera = ref;
          }}>
            <View
              style={{...styles.container}}>
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
                <Text style={{ fontSize: 18, marginTop: 30, marginRight: 20, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.takePicture()}>
                <View style={styles.outerCircle}>
                  <View style={styles.innerCircle} />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}