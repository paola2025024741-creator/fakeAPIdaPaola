import { useContext } from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { CarrinhoContext } from '../../App';
import { Titulo } from '../home/styles';
import { ItemNome, ItemPreco, Faixa, Cabecalho } from './styles';

export default function Cart() {

    const { carrinho, setCarrinho } = useContext(CarrinhoContext);
    const insets = useSafeAreaInsets();
    const valorTopo = insets.top + 'px';


    return (
        <Faixa style={{ flex: 1 }}>
            <Cabecalho style={{ paddingTop: valorTopo }}>
                <Titulo>  Carrinho:</Titulo>
            </Cabecalho>

            <SafeAreaView style={{ flex: 1, backgroundColor: '#796da9' }}>

                <FlatList data={carrinho} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                    <View>
                        <ItemNome>{item.nome}</ItemNome>
                        <ItemPreco>R${item.preco.toFixed(2)}</ItemPreco>

                    </View>
                )}
                />



            </SafeAreaView>
        </Faixa>

    )



}