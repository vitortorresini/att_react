// /mnt/data/Timer.jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date());
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const messageTimeout = setTimeout(() => {
      setShowMessage(false);
    }, 10000); // Mensagem some após 5 segundos

    // Cleanup
    return () => {
      clearInterval(timerInterval);
      clearTimeout(messageTimeout);
    };
  }, []);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      {showMessage && <p>Esta mensagem desaparecerá em 5 segundos.</p>}
    </div>
  );
};

export default Timer;
