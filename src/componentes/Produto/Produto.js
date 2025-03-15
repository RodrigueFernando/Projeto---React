import React from 'react';
import './Produto.css';

const Produto = ({ produto }) => {
  return (
    <div className="produto">
      <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
      <h3 className="produto-nome">{produto.nome}</h3>
      <p className="produto-secao">Seção: {produto.secao}</p> {/* Adicione a seção */}
      <p className="produto-marca">Marca: {produto.marca}</p> {/* Adicione a marca */}
      <p className="produto-preco">Preço: {produto.preco}</p>
      <p className="produto-condicao">Condição: {produto.novo ? 'Novo' : 'Usado'}</p>
    </div>
  );
};

export default Produto;