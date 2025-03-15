import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
//import

const Formulario = ({ aoNovoProduto }) => {
  const marcas = [
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadgets",
  ];
  const secoes = ["Hp", "Dell", "Positivo", "Asus", "Xing Ling Generico"];

  const [secao, setSecao] = useState("");
  const [marca, setMarca] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [novo, setNovo] = useState(false);
  const [usado, setUsado] = useState(false);

  const limparCampos = () => {
    setSecao("");
    setMarca("");
    setNome("");
    setPreco("");
    setNovo(false);
    setUsado(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const produto = {
      secao: secao,
      marca: marca,
      nome: nome,
      preco: preco,
      novo: novo,
      usado: usado,
      imagem: `/imagens/${marca.toLowerCase()}.jpg`,
    };
    aoNovoProduto(produto);
    limparCampos(); // Limpe os campos após o envio
  };

  return (
    <form onSubmit={handleSubmit}>
      <ListaSuspensa
        label="Seção"
        itens={secoes}
        aoAlterado={(valor) => setSecao(valor)}
        valor={secao}
      />
      <ListaSuspensa
        label="Marca"
        itens={marcas}
        aoAlterado={(valor) => setMarca(valor)}
        valor={marca}
      />
      <CampoTexto
        label="Nome"
        placeholder="Digite o nome"
        valor={nome}
        aoAlterado={(valor) => setNome(valor)}
      />
      <CampoTexto
        label="Preço"
        placeholder="Digite o preço"
        valor={preco}
        aoAlterado={(valor) => setPreco(valor)}
      />
      <div className="condicao">
        <label>
          <input
            type="checkbox"
            checked={novo}
            onChange={(e) => setNovo(e.target.checked)}
          />
          Novo
        </label>
        <label>
          <input
            type="checkbox"
            checked={usado}
            onChange={(e) => setUsado(e.target.checked)}
          />
          Usado
        </label>
      </div>
      <button type="submit">Inserir Produto</button>
    </form>
  );
};

export default Formulario;
