import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import CustomInput from './CustomInput';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPressed = () => {
    console.log("Giriş yapılıyor...:", email);
    navigation.navigate('Home');
  };

  const onRegisterPressed = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KampusPost Giriş</Text>

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

      <View style={styles.buttonContainer}>
        <Button title="Giriş Yap" onPress={onLoginPressed} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Kayıt Ol" color="gray" onPress={onRegisterPressed} />
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
    marginTop: 10,
  }
});

export default LoginScreen;
