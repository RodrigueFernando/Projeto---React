import React from 'react';
import './ListaSuspensa.css';

const ListaSuspensa = ({ label, itens, aoAlterado, valor }) => {
  const aoEscolhido = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="lista-suspensa">
      <label>{valor ? valor : label}</label> {/* Use valor se existir, senão use label */}
      <select onChange={aoEscolhido} value={valor}>
        <option value="">Selecione...</option> {/* Adicione uma opção padrão */}
        {itens.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;