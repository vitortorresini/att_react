import React, { useState, useMemo } from 'react';

const Fatorial_func = () => {
  const [numero, setNumero] = useState(0);

  const calcularFatorial = (num) => {
    if (num < 0) return NaN;
    if (num === 0) return 1;
    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
      fatorial *= i;
    }
    return fatorial;
  };

  const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

  return (
    <div className="fatorial">
      <h2>Calculadora de Fatorial</h2>
      <label>
        Digite um número:
        <input type="number" onChange={(e) => setNumero(Number(e.target.value))}/>
      </label>
      <p>O fatorial de {numero} é: {fatorial}</p>
    </div>
  );
};

export default Fatorial_func;
