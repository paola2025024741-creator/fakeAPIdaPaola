import { StatusBar, Pressable, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { useEffect, useState } from 'react';
import {
    Cabecalho, Titulo, Input, CategoriaItem, TextoCategoria, Viewcategoria,
    TextoCategorias, CardProduto, ImagemProduto, NomeProduto, PrecoProduto,
    Container
} from './styles';
import { CarrinhoContext } from '../../App';
import { useContext } from 'react';

interface produto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface ItemCarrinho {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantidade: number;
}

export default function Home() {

    const { carrinho, setCarrinho } = useContext(CarrinhoContext);
    const adicionarCarrinho = (produtoSelecionado: produto) => {

        //FUNCAO DO CARRINHOOOOOOOOO

        const produtoExistente = carrinho.find(
            (item: any) => item.id === produtoSelecionado.id
        );

        if (produtoExistente) {
            setCarrinho(carrinho.map((Item: ItemCarrinho) => Item.id === produtoSelecionado.id ? { ...Item, quantidade: Item.quantidade + 1 } : Item));
        } else {
            setCarrinho([...carrinho, { ...produtoSelecionado, quantidade: 1 }]);
        }
    };

    //CARREGAMENTO FONTES
    const [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
    });


    //CONST DAS COISAS
    const [produtos, setProdutos] = useState<produto[]>([]);
    const categorias = ['todos', 'electronics', 'jewelery', "men's clothing", "women's clothing"];
    const [busca, setBusca] = useState('');
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');

    //FUNCAO DA FILTRAGEM DOS BOTOES DE CATEGORIAS
    const produtosFiltrados = produtos.filter((item) => {
        const pesquisa = item.title.toLowerCase().includes(busca.toLowerCase());
        const categoria = categoriaSelecionada === 'todos' || item.category === categoriaSelecionada;

        return pesquisa && categoria
    });



    //FUNCAO DA BUSCA DA API
    useEffect(() => {
        async function buscarProdutos() {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                if (!resposta.ok) {
                    throw new Error('Erro ao buscar produtos');
                }
                const dados = await resposta.json();

                setProdutos(dados);
                console.log('Produtos buscados com sucesso:', dados.length);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        }

        buscarProdutos();
    }, []);

    //VERIFICA AS FONTESSS

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <Cabecalho>
                    <Titulo>Fake Store API</Titulo>
                    <Input placeholder="Buscar produtos..." placeholderTextColor="#fff"
                        value={busca}
                        onChangeText={setBusca} />
                    <TextoCategorias>Categorias:</TextoCategorias>
                    <Viewcategoria>
                        {categorias.map((categoria, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    setCategoriaSelecionada(categoria);
                                    console.log(categoria);
                                }}
                            >
                                <CategoriaItem>
                                    <TextoCategoria>
                                        {categoria}
                                    </TextoCategoria>
                                </CategoriaItem>
                            </TouchableOpacity>
                        ))}
                    </Viewcategoria>
                </Cabecalho>

                <FlatList
                    data={produtosFiltrados}
                    keyExtractor={(item) => String(item.id)}
                    numColumns={2}
                    contentContainerStyle={{ backgroundColor: '#796da9' }}
                    renderItem={({ item }) => (
                        <CardProduto>
                            <ImagemProduto
                                source={{ uri: item.image }}
                                resizeMode="contain"
                            />

                            <NomeProduto>
                                {item.title}
                            </NomeProduto>

                            <PrecoProduto>
                                R$ {item.price.toFixed(2)}
                            </PrecoProduto>
                        </CardProduto>
                    )}
                />

            </Container>
        </SafeAreaView>
    )
}





