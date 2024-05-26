import { View, Text,Image } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

export default function ViewContact( { navigation } ) {  
  const route= useRoute()
  const { id, NombreContacto, NumeroContacto } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../img/logo-ceutec.png')}
        style={{ width: '90%', height: '30%' }}
        resizeMode='contain'
        resizeMethod='auto'
      />
      <Text style={{fontSize: 35, marginBottom: 15, textAlign: 'center'}} >Detalle de contacto:</Text>
      <Text style={{fontSize: 18, marginEnd: 5}}>{id} | {NombreContacto} | {NumeroContacto} </Text>
    </View>
  )
}
