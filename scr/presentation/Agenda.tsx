import React, {useState, useContext } from 'react';
import {View,Text,TextInput,Button,Image,Alert} from 'react-native';
import RegistroContext from './GlobalContext';
import styles from '../css/styles';

export default function Agenda({ navigation }) {
  const [nombreContacto, setNombreContacto] = useState('');
  const [numeroContacto, setNumeroContacto] = useState('');
  const [contactos, setContactos] = useState([]);
  const { registros, setRegistros } = useContext(RegistroContext);

  const handleAddContacto = () => {
    if (nombreContacto.length == 0) {
      Alert.alert('El nombre del contacto es obligatorio.');
      return;
    }

    if (numeroContacto.length == 0) {
      Alert.alert('El número del contacto es obligatorio.');
      return;
    }

    const newContacto = {nombreContacto, numeroContacto};
    setContactos([...contactos, newContacto]);
    onSave();
    setNombreContacto('');
    setNumeroContacto('');
  };

  const onSave = () => {
    // Crear un nuevo registro
    const newRegistro = {
      id: registros.length > 0 ? registros[registros.length - 1].id + 1 : 1,
      NombreContacto: nombreContacto,
      NumeroContacto: numeroContacto,
    };
    
    // Actualizar el estado
    setRegistros([...registros, newRegistro]);
  };
  const handleViewRegistro = (id) => {
    const searchData = registros.filter(item => item.id === id);
    navigation.navigate('ViewContact', { id: searchData[0].id, NombreContacto: searchData[0].NombreContacto, NumeroContacto: searchData[0].NumeroContacto });
  };

  const renderedRegistros = registros.map((registro) => (
    <View style={styles.textContainer}>
      <Text style={{fontSize: 18, marginEnd: 5}}>{registro.id} | {registro.NombreContacto} | {registro.NumeroContacto} </Text>
      <Button
        title='Ver'
        onPress={() => handleViewRegistro(registro.id)}
      />
    </View>
  ));

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logo-ceutec.png')}
        style={{ width: '90%', height: '30%' }}
        resizeMode='contain'
        resizeMethod='auto'
      />

      <Text style={{fontSize: 35, marginBottom: 15, textAlign: 'center'}} >Agenda</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre Contacto"
        value={nombreContacto}
        onChangeText={text => setNombreContacto(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Contacto"
        value={numeroContacto}
        onChangeText={text => setNumeroContacto(text)}
        inputMode="numeric"
        keyboardType="numeric"
        maxLength={8}
      />
      <Button title="Agregar" onPress={handleAddContacto} />
      {renderedRegistros}
    </View>
  )
}
