import React from 'react';

const Ingridients = ({ ingridient, dots }) => {
  return (
    <ol>
      <li style={{ listStyleType: 'none' }}>
        {ingridient}
        {dots}
      </li>
    </ol>
  );
};

export default Ingridients;
