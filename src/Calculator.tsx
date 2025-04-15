
import React, { useState } from 'react';

// Componentes
import Numbers from './Numbers';
import Formula from './Formula';
import Output from './Output';

const Calculator: React.FC = () => {
  const [currentVal, setCurrentVal] = useState<string>('0');
  const [prevVal, setPrevVal] = useState<string>('0');
  const [formula, setFormula] = useState<string>('');
  const [evaluated, setEvaluated] = useState<boolean>(false);

  // const maxDigitWarning = () => {
  //   setCurrentVal('Digit Limit Met');
  //   setTimeout(() => setCurrentVal(prevVal), 1000);
  // };

  const handleEvaluate = () => {
    if (!currentVal.includes("Limit")) {
      let expression = formula;
      // Remove the last operator if present
      while (/[+\-*/]$/.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression.replace(/x/g, "*").replace(/-/g, "-").replace("--", "-");
      let answer = Math.round(1e12 * eval(expression)) / 1e12;
      setCurrentVal(answer.toString());
      setFormula(expression.replace(/\*/g, "⋅").replace(/-/g, "-") + "=" + answer);
      setPrevVal(answer.toString());
      setEvaluated(true);
    }
  };



const handleOperators = (operator: string) => {
    if (!currentVal.includes("Limit")) {
      const lastChar = formula.charAt(formula.length - 1);
      const isLastCharOperator = /[+\-*/]$/.test(lastChar);
      const isLastCharNegativeSign = lastChar === "-";
      const isOperator = /[+\-*/]/.test(operator);
      const isNegativeSign = operator === "-";
  
      if (evaluated) {
        setFormula(prevVal + operator);
      } else if (isLastCharOperator) {
        if (isOperator && !isNegativeSign) {
          setFormula(formula.slice(0, -1) + operator);
        } else if (isNegativeSign && !isLastCharNegativeSign) {
          setFormula(formula + operator);
        } else if (isNegativeSign && isLastCharNegativeSign) {
          setFormula(formula);
        }
      } else {
        setFormula(formula + operator);
      }
  
      if (isOperator && !isNegativeSign && isLastCharOperator) {
        const lastTwoChars = formula.slice(-2);
        if (/[+\-*/]$/.test(lastTwoChars[0]) && lastTwoChars[0] !== operator) {
          setFormula(formula.slice(0, -2) + operator);
        }
      }
  
      setEvaluated(false);
    }
  };
  
  
  
  

  const handleNumbers = (num: string) => {
    if (!currentVal.includes("Limit")) {
      if (evaluated) {
        setCurrentVal(num);
        setFormula(num === "0" ? "" : num);
      } else {
        setCurrentVal((prev) => (prev === "0" ? num : prev + num));
        setFormula((prev) => (prev === "0" && num === "0" ? "" : prev + num));
      }
      setEvaluated(false);
    }
  };

  const handleDecimal = () => {
    const lastNumber = formula.match(/(-?\d+\.?\d*)$/)?.[0];
    if (!lastNumber?.includes(".")) {
      setCurrentVal(currentVal + ".");
      setFormula(formula + ".");
    }
  };

  const initialize = () => {
    setCurrentVal("0");
    setPrevVal("0");
    setFormula("");
    setEvaluated(false);
  };

  return (
    <div className="calculator" id='calculator'>
      <Formula formula={formula} />
      <Output currentValue={currentVal} />
      <Numbers
        handleDecimal={handleDecimal}
        handleEvaluate={handleEvaluate}
        initialize={initialize}
        handleNumbers={handleNumbers}
        handleOperators={handleOperators}
      />
    </div>
  );
};

export default Calculator;