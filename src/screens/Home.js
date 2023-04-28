import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Linking,
  Button,
} from "react-native";

import songs from "../../songs";

export default function Home({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#525145" }}>
      <SafeAreaView style={styles.main}>
        
          <TouchableOpacity
            style={ styles.closeSessionOutline}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.closeSessionTextOutline}>Cerrar sesion</Text>
          </TouchableOpacity>
        
        <Text style={styles.mainTitle}>Poke Canciones</Text>
        <Text style={styles.description}>
          Canciones Iconicas de Pokemon que te ayudaran a recordar esa infancia
          al igual de aquellos juegos que marcaron a cada uno con sus clasicos
          Soundtracks. Solo escuchalos y regresa al pasado.
        </Text>
      </SafeAreaView>
      {songs.map((song) => (
        <View key={song.id} style={styles.container}>
          <TouchableOpacity style={styles.contentProducts}>
            <View style={styles.text}>
              <Text style={styles.name}>{song.name}</Text>
            </View>
            <Image style={styles.image} source={song.image} />
            <View style={styles.sub}>
              <Text style={styles.info}>{song.info}</Text>
            </View>
            <View style={styles.buttom}>
              <TouchableOpacity
                onPress={() => {
                  Linking.canOpenURL(song.url)
                    .then((supported) => {
                      if (supported) {
                        Linking.openURL(song.url);
                        console.log("Abriendo cancion " + song.name);
                      } else {
                        console.log("URL invalida: " + song.url);
                      }
                    })
                    .catch((error) => {
                      console.log("Error al abrir URL: " + error);
                    });
                }}
              >
                <Text style={styles.textButtom}>Escuchar</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 15,
    paddingVertical: 35,
    borderWidth: 3,
    borderColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {
      width: -14,
      height: 14,
    },
    shadowOpacity: 50,
    shadowRadius: 20,
    elevation: 10,
  },
  contentProducts: {
    paddingTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  image: {
    width: "100%",
    height: 175,
    resizeMode: "cover",
    marginBottom: 20,
    borderRadius: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttom: {
    alignItems: "center",
    backgroundColor: "#f4dc26",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  textButtom: {
    fontWeight: "bold",
    color: "#fff",
  },
  text: {
    paddingBottom: 10,
  },
  info: {
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 5,
    marginTop: -20,
    paddingRight: 10,
    textAlign: "justify",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  main: {
    marginBottom: 20,
    marginTop: 50,
  },
  mainTitle: {
    color: "#f4dc26",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  closeSessionOutline: {
    marginLeft: 300,
    marginRight: 5,
    backgroundColor:'#e92929',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom:10,
    borderColor:'#000',
    borderWidth:2,

  },
  closeSessionTextOutline:{
    color:'#000',
    margin:5,
    marginBottom:10,
    marginTop:10,
    
  },
  
});
