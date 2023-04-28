import React, { useState } from "react";

import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "../../firebase-config";

const Login = ({ navigation }) => {
  //hooks que se ocupan para tomar los datos de lo que el usuario escribe
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

 
 
 //const ocupados en inputs de email y contrasena para tener mayor orden
  const handleEmailTextChange = (text) => setEmail(text);
  const handlePasswordTextChange = (text) => setPassword(text);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Cuenta Registrada!')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  } 

  const handleSignIn = () => {
    signInWithEmailAndPassword( auth, email, password)
    .then((userCredential) => {
      console.log("sesion iniciada correctamente")
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Home');
      setEmail("")
      setPassword("")
    })
    .catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    }) 
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}> PokeApp</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOlA7WILIMYY5FW1W7CkF6mdifwiFweZgew&usqp=CAU",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Escribe tu Email"
          style={styles.textInput}
          onChangeText={handleEmailTextChange}
          value={email}
        />
        <TextInput
          placeholder="contraseña"
          style={styles.textInput}
          secureTextEntry
          onChangeText={handlePasswordTextChange}
          value={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        
          style={styles.button}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Iniciar Sesion</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          
          style={[styles.button, styles.buttonOutline]}
          onPress={handleRegister}
        >
          <Text style={styles.buttonOutlineText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 50,
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#fff",
    padding: 6,
    marginBottom: 12,
    marginTop: 5,
    fontSize: 16,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    justifyContent: "center",
    marginBottom: 20,
  },
  titleText: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#E5BF3C',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#E5BF3C',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#E5BF3C',
    fontWeight: '700',
    fontSize: 16,
  },
  inputContainer: {
    width: '80%'
  },
});

export default Login;
