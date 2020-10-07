import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Button, Image, Text } from 'react-native';
import Constants from 'expo-constants';


const App = () => {
  return (
    <>
      <View style={{ paddingTop: Constants.statusBarHeight }} />

      <View style={[styles.container, styles.playingSpace]}>
        <Text>브랜치 연습용 입니다.</Text>
        <Text>애플 이미지를 삽입했습니다.</Text>

        <Image
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
          }}

          source={{
            uri: 'data:image/png;base64,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'
          }}
        />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.controlSpace}>
          <View style={styles.buttonView}>
            <Button title="CHANGE FLEX DIRECTION" />
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE JUSTIFY CONTENT" />
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE ALIGN ITEMS" />
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE DIRECTION" />
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE FLEX WRAP" />
          </View>
          <View style={styles.buttonView}>
            <Button title="ADD SQUARE" />
          </View>
          <View style={styles.buttonView}>
            <Button title="DELETE SQUARE" />
          </View>
        </View>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3,
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
})

export default App;