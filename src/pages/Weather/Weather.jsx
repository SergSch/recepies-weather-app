import React, { useEffect, useState } from 'react';
import classes from './Weather.module.css';
import { fetchWeather } from './../../utils/requests';
import { Link } from 'react-router-dom';
import location from './../../assets/images/Frame 3.svg';
import { daysOfWeek } from './../../utils/data';
import { monthsOfYear } from './../../utils/data';
import clear from './../../assets/images/weather/clear.png';
import clouds from './../../assets/images/weather/clouds.png';
import drizzle from './../../assets/images/weather/drizzle.png';
import mist from './../../assets/images/weather/mist.png';
import rain from './../../assets/images/weather/rain.png';
import snow from './../../assets/images/weather/snow.png';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');
  let newCity;
  let weatherImg;

  useEffect(() => {
    fetchWeather(setWeatherData, newCity);
  }, []);

  const weatherImage = weatherData.weather?.[0]?.main;

  const fileNames = {
    Clouds: clouds,
    Clear: clear,
    Rain: rain,
    Mist: mist,
    Drizzle: drizzle,
    Snow: snow,
  };

  if (fileNames[weatherData.weather?.[0]?.main]) {
    weatherImg = fileNames[weatherImage];
  }

  const inputHandler = (e) => {
    setCity(e.target.value);
  };

  const addCity = async (e) => {
    newCity = city;
    await fetchWeather(setWeatherData, city);
    setCity('');
  };

  let temperature = Math.round(weatherData.main?.temp);

  let weatherState = weatherData.weather?.[0]?.main;

  let date = new Date();
  let day = daysOfWeek[date.getDay()];
  let month = monthsOfYear[date.getMonth()];

  return (
    <div className={classes.wrap}>
      <div className={classes.top_block}>
        <div className={classes.left_block}>
          <label
            htmlFor="cityName"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img src={location} alt="location" />
            <p className={classes.city_name}>{weatherData.name}</p>
          </label>

          <h3 className={classes.weather_state}>{weatherState}</h3>
          <div>
            <h2 className={classes.temp}>{temperature}°C</h2>
            <div style={{ display: 'flex', gap: '5px' }}>
              <p>{day}</p>
              <p>{date.getDate()}</p>
              <p>{month}</p>
              <p>{date.getFullYear()}</p>
            </div>
          </div>
        </div>
        <div>
          <input
            className={classes.cityName}
            id="cityName"
            type="text"
            name="cityValue"
            placeholder="Enter your city"
            value={city}
            onChange={inputHandler}
          />
          <button className={classes.btn} onClick={addCity}>
            Find
          </button>
        </div>

        <div>
          <img src={weatherImg} alt={weatherImage} className={classes.img} />
        </div>
      </div>
      <Link className="link" to={'/'}>
        Home
      </Link>
    </div>
  );
};

export default Weather;
