import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { RootSiblingParent } from 'react-native-root-siblings';

import BgImage from './components/BgImage';
import Checkbox from './components/Checkbox';


export default function App() {

  return (
    <RootSiblingParent>  // <- use RootSiblingParent to wrap your root component
      <View style={styles.container}>
        {/* <BgImage> */}
          <Checkbox />
          <StatusBar style="light" />
        {/* </BgImage> */}
      </View>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
});
