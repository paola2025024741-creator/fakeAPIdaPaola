
import styled from 'styled-components/native';

// ESTILIZAÇÃO

export const Cabecalho = styled.View`
  background-color: #796da9;
  padding: 10px;
  width: 100%;
`;

export const Titulo = styled.Text`
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  font-family: Nunito_700Bold;
  color: #fff;
`;

export const Input = styled.TextInput`
  border-radius: 5px;
  border-width: 1px;
  border-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #fff;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const CategoriaItem = styled.View`
  background-color: #462b55;
  padding: 10px;
  border-radius: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const TextoCategoria = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Viewcategoria = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TextoCategorias = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: Nunito_700Bold;
  color: #fff;
`;

export const CardProduto = styled.View`
  flex: 1;
  background-color: #75597e;
  margin: 8px;
  padding: 10px;
  border-radius: 10px;
`;

export const ImagemProduto = styled.Image`
  width: 100%;
  height: 140px;
`;

export const NomeProduto = styled.Text`
  font-family: Nunito_400Regular;
  font-size: 13px;
  margin-top: 10px;
  color: #fff;
`;

export const PrecoProduto = styled.Text`
  font-family: Nunito_700Bold;
  font-size: 16px;
  margin-top: 5px;
  color: #fff;
`;
