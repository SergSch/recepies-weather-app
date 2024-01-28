import React, { useState } from 'react';
import classes from './RecipeDesciption.module.css';
import Tags from './Tags/Tags';
import Ingridients from './Ingridients/Ingridients';
import ButtonsBlock from './ButtonsBlock/ButtonsBlock';

const RecipeDesciption = ({
  singleRecipe,
  buttonHandlerNext,
  buttonHandlerPrev,
}) => {
  let [isShowIngridients, setIsShowIngridients] = useState(false);
  let [isShowInstructions, setIsShowInstructions] = useState(false);

  return (
    <div className={classes.wrap}>
      <h2>Dish: {singleRecipe.name}</h2>
      <h4>Cuisine: {singleRecipe.cuisine}</h4>
      <h5>Difficulty: {singleRecipe.difficulty}</h5>
      <p>Calories per serving: {singleRecipe.caloriesPerServing}</p>
      <p>Time to prepare in minutes: {singleRecipe.cookTimeMinutes}</p>
      <div>
        <h4>Ingridients:</h4>
        {isShowIngridients
          ? singleRecipe.ingredients &&
            singleRecipe.ingredients.map((elem, i) => (
              <Ingridients key={elem} ingridient={elem} />
            ))
          : singleRecipe.ingredients &&
            singleRecipe.ingredients
              .slice(0, 1)
              .map((elem, i) => (
                <Ingridients key={elem} ingridient={elem} dots={'...'} />
              ))}
        <a
          onClick={() => setIsShowIngridients(!isShowIngridients)}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          {isShowIngridients ? 'Show less' : 'Show more'}
        </a>
      </div>
      <div>
        <h4>Instructions:</h4>
        {isShowInstructions
          ? singleRecipe.instructions &&
            singleRecipe.instructions.map((elem, i) => (
              <Ingridients key={elem} ingridient={elem} />
            ))
          : singleRecipe.instructions &&
            singleRecipe.instructions
              .slice(0, 1)
              .map((elem, i) => (
                <Ingridients key={elem} ingridient={elem} dots={'...'} />
              ))}
        <a
          onClick={() => setIsShowInstructions(!isShowInstructions)}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          {isShowInstructions ? 'Show less' : 'Show more'}
        </a>
      </div>
      <h6>Rating: {singleRecipe.rating}</h6>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        Tags:
        {singleRecipe.tags &&
          singleRecipe.tags.map((elem) => <Tags key={elem} tag={elem} />)}
      </div>
      <ButtonsBlock
        buttonHandlerNext={buttonHandlerNext}
        buttonHandlerPrev={buttonHandlerPrev}
      />
    </div>
  );
};

export default RecipeDesciption;
