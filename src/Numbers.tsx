
import React from "react";

// Tipos para las props que recibirá el componente
interface NumbersProps {
  handleDecimal: () => void;
  handleEvaluate: () => void;
  initialize: () => void;
  handleNumbers: (num: string) => void;
  handleOperators: (operator: string) => void;
}

const Numbers: React.FC<NumbersProps> = ({ handleDecimal, handleEvaluate, initialize, handleNumbers, handleOperators }) => {
  return (
    <div>
      {/* Botón AC para reiniciar */}
      <button className="jumbo" id="clear" onClick={initialize}>AC</button>
      
      {/* Operadores */}
      <button className="operators" id="divide" onClick={() => handleOperators("/")}>/</button>
      <button className="operators" id="multiply" onClick={() => handleOperators("*")}>x</button>
      
      {/* Números 7, 8, 9 */}
      <button id="seven" onClick={() => handleNumbers("7")}>7</button>
      <button id="eight" onClick={() => handleNumbers("8")}>8</button>
      <button id="nine" onClick={() => handleNumbers("9")}>9</button>
      
      {/* Operador resta */}
      <button className="operators" id="subtract" onClick={() => handleOperators("-")}>-</button>
      
      {/* Números 4, 5, 6 */}
      <button id="four" onClick={() => handleNumbers("4")}>4</button>
      <button id="five" onClick={() => handleNumbers("5")}>5</button>
      <button id="six" onClick={() => handleNumbers("6")}>6</button>
      
      {/* Operador suma */}
      <button className="operators" id="add" onClick={() => handleOperators("+")}>+</button>
      
      {/* Números 1, 2, 3 */}
      <button id="one" onClick={() => handleNumbers("1")}>1</button>
      <button id="two" onClick={() => handleNumbers("2")}>2</button>
      <button id="three" onClick={() => handleNumbers("3")}>3</button>
      
      {/* Número 0 */}
      <button className="jumbo" id="zero" onClick={() => handleNumbers("0")}>0</button>
      
      {/* Decimal */}
      <button id="decimal" onClick={handleDecimal}>.</button>
      
      {/* Botón de evaluación */}
      <button className="equals" id="equals" onClick={handleEvaluate}>=</button>
    </div>
  );
};

export default Numbers;