import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Fake Store Paola</Text>
        <TextInput placeholder="Buscar produtos..." style={styles.input} />
        <Text>Categorias</Text>

      </View>

      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#eb5757',
    padding: 50,
    width: '100%',
  },
  titulo: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1b1313',
    padding: 10,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


