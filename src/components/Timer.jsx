import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Timer = ({ onTimeUp }) => {
  // definir tempo
  const initialTime = 3 // 15 segundos para exemplo

  // guardar o tempo restante
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // Função para o tempo correr de minutos e segundos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    // quando o tempo for 0 ele para e aciona o callback
    if (timeLeft === 0) {
      onTimeUp();  // Notifica o Screen que o tempo acabou
      return;
    }

    // diminuir o tempo a cada segundo
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Limpa o intervalo quando desmonta ou o tempo atualiza
    return () => clearInterval(timerInterval);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="text-4xl text-center font-mono mt-5 flex flex-col gap-2 ">
      <h1 className="font-mono text-[25px] font-[700] text-white">TEMPO RESTANTE</h1>
      <h1 className="font-mono text-[80px] font-[700] text-white">{formatTime(timeLeft)}</h1>
    </div>
  );
};
Timer.propTypes = {
  initialTime: PropTypes.number.isRequired,
  onTimeUp: PropTypes.func.isRequired
};

export default Timer;
