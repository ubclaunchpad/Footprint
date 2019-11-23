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
        try {
            await this.sendToServer(photo);
        } catch (e) {
            console.log(`Error: ${e}`)
        }
        navigate("ProductInfo");
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