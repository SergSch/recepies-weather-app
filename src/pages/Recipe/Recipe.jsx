import React, { useEffect, useState } from 'react';
import classes from './Recipe.module.css';
import { Link } from 'react-router-dom';
import { fetchRecipies } from './../../utils/requests';
import RecipeDesciption from '../../components/RecipeDesciption/RecipeDesciption';

const Recipe = () => {
  const [singleRecipe, setSingleRecipe] = useState({});
  const [countId, setCountId] = useState(1);

  const buttonHandlerNext = () => {
    if (countId === 50) {
      setCountId(1);
    } else {
      setCountId((prev) => prev + 1);
      console.log(countId);
    }
  };

  const buttonHandlerPrev = () => {
    if (countId <= 1) {
      setCountId(50);
    } else {
      setCountId((prev) => prev - 1);
      console.log(countId);
    }
  };

  useEffect(() => {
    fetchRecipies(setSingleRecipe, countId);
  }, [countId]);

  return (
    <div className={classes.wrap}>
      <RecipeDesciption
        singleRecipe={singleRecipe}
        buttonHandlerNext={buttonHandlerNext}
        buttonHandlerPrev={buttonHandlerPrev}
      />
      <Link className="link" to={'/'}>
        Home
      </Link>
    </div>
  );
};

export default Recipe;
