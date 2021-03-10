import React from 'react';
import {  StyleSheet, 
          Text, 
          View, 
          KeyboardAvoidingView, 
          Image, 
          TextInput, 
          TouchableOpacity
        } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
        source={require('./assets/logo_login.png')} 
        />
      </View>

      <View style={styles.container}>
          <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=> {}}
          />
          <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorret={false}
          onChangeText={()=> {}}
          />

          <TouchableOpacity>
            <Text>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Criar conta gratuita</Text>
          </TouchableOpacity>
      
      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center',
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    height: '18%',
    marginBottom: 15,
    color: '#222',
    fontSize: 16,
    borderRadius: 5,
  }

})