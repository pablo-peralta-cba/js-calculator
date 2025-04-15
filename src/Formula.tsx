

import React from 'react';

interface FormulaProps {
  formula: string;
}

const Formula: React.FC<FormulaProps> = ({ formula }) => {
  return (
    <div className="formulaScreen">
      {formula}
    </div>
  );
};

export default Formula;