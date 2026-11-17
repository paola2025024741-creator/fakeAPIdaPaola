import Cart from './screens/cart';
import Home from './screens/home';
import { createContext, useState } from 'react';

export const CarrinhoContext = createContext<any>(null);


export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      <Cart />
    </CarrinhoContext.Provider>
  );




}

