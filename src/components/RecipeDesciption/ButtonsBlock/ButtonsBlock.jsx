import React from 'react';
// import RecipeBtn from '../../../UI/RecipeBtn/RecipeBtn';
import classes from './ButtonBlock.module.css';

const ButtonsBlock = ({ buttonHandlerNext, buttonHandlerPrev }) => {
  return (
    <div style={{ display: 'flex', gap: '50px', justifyContent: 'center' }}>
      <button onClick={buttonHandlerPrev} className={classes.btn}>
        Prev Recipe
      </button>
      <button onClick={buttonHandlerNext} className={classes.btn}>
        Next Recipe
      </button>
    </div>
  );
};

export default ButtonsBlock;
