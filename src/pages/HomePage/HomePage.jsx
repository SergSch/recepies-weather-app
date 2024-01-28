import React from 'react';
import classes from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import Weather from '../Weather/Weather';

const HomePage = () => {
  return (
    <div className={classes.wrap}>
      <Link to={'/recipe'} className="link">
        Recipe
      </Link>
      <Link to={'/weather'} className="link">
        Weather
      </Link>
    </div>
  );
};

export default HomePage;
