import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from '../css/styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logo-ceutec.png')}
        style={{ width: '90%', height: '30%' }}
        resizeMode='contain'
        resizeMethod='auto'
      />
    </View>
  )
}
