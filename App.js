import React, {useState, useEffect} from 'react';

import {  StyleSheet, 
          Text, 
          View,
          Image, 
          KeyboardAvoidingView, 
          TextInput, 
          TouchableOpacity,
          Animated,
          Keyboard
        } from 'react-native';

export default function App() {

  const[offset] = useState(new Animated.ValueXY({x: 0, y:80}));
  const[opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 100, y:100}));

  useEffect(()=> {
    KeyboardDidShowListener = Keyboard.addListener('KeyboardDidShow', KeyboardDidShow);
    KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y,{
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity,{
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();
   
  },[]);

  function KeyboardDidShow(){
    
    Animated.parallel([
      Animated.spring(logo.x,{
        toValue: 20,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y,{
        toValue:20,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  }

  function keyboardDidHide(){
    
    Animated.parallel([
    Animated.spring(logo.x,{
      toValue: 100,
      duration: 100,
      useNativeDriver: false
    }),
    Animated.timing(logo.y,{
      toValue:100,
      duration: 100,
      useNativeDriver: false
    })
  ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
        style={{
          width:logo.x,
          height:logo.y,
          

        }}
        source={require('./assets/logo_login.png')} 
        />
      </View>

      <Animated.View 
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              {translateY: offset.y}
            ]
          }
          ]}
        
        >
          <TextInput
          style={styles.input}
          placeholder=" Email"
          autoCorrect={false}
          onChangeText={()=> {}}
          />
          <TextInput
          style={styles.input}
          placeholder=" Senha"
          autoCorret={false}
          onChangeText={()=> {}}
          />

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.registerText}>Criar conta gratuita</Text>
          </TouchableOpacity>
      
      </Animated.View>

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
    paddingBottom: 50,
   
    
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    height: '18%',
    marginBottom: 15,
    color: '#222',
    fontSize: 16,
    borderRadius: 7,
  },
  btnSubmit:{
   backgroundColor: '#35AAFF',
   width: '90%',
   height: 45,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 7
  },
  submitText:{
    color: '#FFF',
    fontSize: 18,

  },
  btnRegister:{
    marginTop: 10,
  },
  registerText:{
    color: '#FFF'
  },
  

})