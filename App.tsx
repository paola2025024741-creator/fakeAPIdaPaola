import { StatusBar, Pressable, StyleSheet, Text, View, TextInput, FlatList, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts,Nunito_400Regular,Nunito_700Bold } from '@expo-google-fonts/nunito';
import { useEffect, useState } from 'react';

 interface produto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

export default function App() {

  //CARREGAMENTO FONTES
  const [fontsLoaded] = useFonts({
  Nunito_400Regular,
  Nunito_700Bold,
});


//CONST DOS PRODUTOS e das categorias
  const [produtos, setProdutos] = useState<produto[]>([]);
  const categorias = [ 'todos', 'eletronic', 'joias', 'masc', 'fem' ];

  //FUNCAO DA BUSCA DA API
  useEffect(() => {
  async function buscarProdutos() {
    const resposta = await fetch('https://fakestoreapi.com/products');

    const dados = await resposta.json();

    setProdutos(dados);
  }

  buscarProdutos();
}, []);

//VERIFICA AS FONTESSS

 if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Fake Store API</Text>
        <TextInput placeholder="Buscar produtos..." placeholderTextColor="#fff" style={styles.input} />
        <Text style={styles.textoCategorias}>Categorias:</Text>
      <View style={styles.viewcategoria}>
       {categorias.map((categoria, index) => (
  <View key={index} style={styles.categoriaItem}>
    <Text style={styles.textoCategoria}>
      {categoria}
    </Text>
  </View>
))}
        </View>
         </View>

     <FlatList
  data={produtos}
  keyExtractor={(item) => String(item.id)}
  numColumns={2}
  contentContainerStyle={{ backgroundColor: '#796da9' }}
  renderItem={({ item }) => (
    <View style={styles.cardProduto}>
      <Image
        source={{ uri: item.image }}
        style={styles.imagemProduto}
        resizeMode="contain"
      />

      <Text style={styles.nomeProduto}>
        {item.title}
      </Text>

      <Text style={styles.precoProduto}>
        R$ {item.price.toFixed(2)}
      </Text>
    </View>
  )}
/>


    </SafeAreaView> 

  )
}

//ESTILIZACAOOOOO
const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#796da9',
    padding: 10,
    width: '100%',
  },
  titulo: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Nunito_700Bold',
    color: '#fff'
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    marginVertical: 10,
    color: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoriaItem: {
  backgroundColor: '#462b55',
  padding: 10,
  borderRadius: 8,
  marginRight: 10,
  marginBottom: 10,
},
textoCategoria: {
  color: '#fff',
  fontWeight: 'bold',
},
viewcategoria: {
  flexDirection: 'row',
  flexWrap: 'wrap',
},
textoCategorias: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10,
  fontFamily: 'Nunito_700Bold',
  color: '#fff'
},
cardProduto: {
  flex: 1,
  backgroundColor: '#75597e',
  margin: 8,
  padding: 10,
  borderRadius: 10,
  elevation: 3,
},

imagemProduto: {
  width: '100%',
  height: 140,
},

nomeProduto: {
  fontFamily: 'Nunito_400Regular',
  fontSize: 13,
  marginTop: 10,
  color: '#fff',
},

precoProduto: {
  fontFamily: 'Nunito_700Bold',
  fontSize: 16,
  marginTop: 5,
  color: '#fff'
},




});


