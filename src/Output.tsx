

import React from 'react';

interface OutputProps {
  currentValue: string;
}

const Output: React.FC<OutputProps> = ({ currentValue }) => {
  return (
    <div className="outputScreen" id='display'>
      {currentValue}
    </div>
  );
};

export default Output;