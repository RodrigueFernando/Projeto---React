import React, { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Produto from './componentes/Produto/Produto';

function App() {
  const [produtos, setProdutos] = useState([]);

  const handleNovoProduto = (produto) => {
    setProdutos([...produtos, produto]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoNovoProduto={handleNovoProduto} />
      <div className="lista-produtos">
        {produtos.map((produto, index) => (
          <Produto key={index} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default App;