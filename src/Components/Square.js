import React from 'react';

function Square({ val, chooseSquare }) {
  return (
    <div className="square" onClick={chooseSquare}>
      <div className={`square__inner ${val === 'X' ? 'square__inner--x' : ''}`}>
        {val}
      </div>
    </div>
  );
}

export default Square;
