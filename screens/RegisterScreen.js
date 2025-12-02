import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, Text } from 'react-native';
import CustomInput from './CustomInput';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    if (password !== passwordRepeat) {
      Alert.alert('Hata', 'Şifreler uyuşmuyor! Kontrol ediniz!!!!!!!!');
      return;
    }

    console.log('Hoşgeldiniz Efendim');
    Alert.alert('Başarılı', 'Kayıt işleminiz başarıla oluşturulmuştur.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>

      <CustomInput 
        placeholder="E-posta" 
        value={email} 
        setValue={setEmail} 
      />

      <CustomInput 
        placeholder="Şifre" 
        value={password} 
        setValue={setPassword} 
        secureTextEntry={true}
      />

      <CustomInput 
        placeholder="Şifre Tekrar" 
        value={passwordRepeat} 
        setValue={setPasswordRepeat} 
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <Button title="Kayıt Ol" onPress={onRegisterPressed} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  }
});

export default RegisterScreen;