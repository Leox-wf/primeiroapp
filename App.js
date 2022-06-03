import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={estilo.container}>

      <Text style={estilo.titulo}>Games Over</Text>
      <StatusBar style="auto" />

      <Text style={estilo.jogo}>Controle - Img</Text>
      <Image style={estilo.img} source={require("./assets/Con1.png")}/>

      <Text style={estilo.jogo}>Controle - Xbox One</Text>
      <Image style={estilo.img} source={require("./assets/Con2.jpg")}/>

      <Text style={estilo.jogo}>Controle - Pixel</Text>
      <Image style={estilo.img} source={require("./assets/Con3.jpg")}/>

      <Text style={estilo.jogo}>Switch </Text>
      <Image style={estilo.img} source={require("./assets/Cons.jpg")}/>

    </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
  },

  titulo:{
    fontSize:60,
    marginTop:20,
    color: "#FF0000",	
  },

  jogo:{
    fontSize: 40,
  },

  img:{
    width:390,
    marginTop:10,
    color:"#00FF7F",
    
  },

  Con1:{
    marginTop:10,
    fontSize: 10,
    marginBottom: 8,
    
  },

  Con2:{

  },

  Con3:{

  },

  Cons:{

  },







});
