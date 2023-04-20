/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
} from 'react-native';
import {Canvas, Circle} from "@shopify/react-native-skia";


function App(): JSX.Element {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const r = 128;
  return (

    <View style={style.container}>
      <Button title='Open modal' onPress={() => setModalIsVisible(true)} />
      <Modal
        animationType='slide'
        visible={modalIsVisible}
      >
        <Canvas style={{ flex: 1 }}>
          <Circle cx={r} cy={r} r={r} color="lightblue" />
        </Canvas>
        <Button title='Close modal' onPress={() => { setModalIsVisible(false) }} />
      </Modal>
    </View>

  );
}


const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  text: {
    color: "#000"
  }
})
export default App;
