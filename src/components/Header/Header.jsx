import React, { useEffect, useState } from 'react';
import classes from './Header.module.css';

const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    let timerId = setInterval(() => {
      setTime(new Date().toLocaleString());
      return () => {
        clearInterval(timerId);
      };
    }, 1000);
  }, []);
  return (
    <div>
      <h2>Hi!</h2>
      <h4>{time}</h4>
    </div>
  );
};

export default Header;
