import React, { useState } from 'react';
import './Gerenciamento.css'; // Importar os estilos específicos

const Gerenciamento = () => {
  const [saldo, setSaldo] = useState(0);
  const [despesas, setDespesas] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [novoSaldo, setNovoSaldo] = useState('');

  const adicionarDespesa = () => {
    if (descricao.trim() !== '' && valor !== '') {
      const novaDespesa = { descricao, valor: parseFloat(valor) };
      setDespesas([...despesas, novaDespesa]);
      setSaldo(saldo - novaDespesa.valor);
      setDescricao('');
      setValor('');
    }
  };

  const atualizarSaldo = () => {
    if (novoSaldo !== '') {
      setSaldo(parseFloat(novoSaldo));
      setNovoSaldo('');
    }
  };

  return (
    <div className="gerenciamento">
      <h2>Gerenciamento de Orçamento Pessoal</h2>

      <div className="saldo">
        <h3>Saldo Atual: R$ {saldo.toFixed(2)}</h3>
        <input
          type="number"
          placeholder="Adicionar Saldo"
          value={novoSaldo}
          onChange={(e) => setNovoSaldo(e.target.value)}
        />
        <button onClick={atualizarSaldo}>Atualizar Saldo</button>
      </div>

      <div className="entrada-despesas">
        <h3>Adicionar Despesa</h3>
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button onClick={adicionarDespesa}>Adicionar</button>
      </div>

      <div className="lista-despesas">
        <h3>Despesas</h3>
        <ul>
          {despesas.map((despesa, index) => (
            <li key={index}>
              {despesa.descricao}: R$ {despesa.valor.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <div className="calculadora-orcamento">
        <h3>Calculadora de Orçamento</h3>
        <p>Total de Despesas: R$ {despesas.reduce((acc, despesa) => acc + despesa.valor, 0).toFixed(2)}</p>
        <p>Saldo Final: R$ {(saldo).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Gerenciamento;
