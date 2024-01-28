export const fetchRecipies = async (setSingleRecipe, id) => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!response.ok) throw new Error(response.status);
    const data = await response.json();

    setSingleRecipe(data);
  } catch (error) {
    console.log(error);
  }
};
// /data/2.5/weather?units=metric&lat=${lat}
export const fetchWeather = async (setWeatherData, city = 'Chicago') => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=3fd0c36ac8840e50d3b5f5d2a25ff2ef`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setWeatherData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchFewDaysWeather = async (setWeatherData, city = 'Chicago') => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fd0c36ac8840e50d3b5f5d2a25ff2ef`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setWeatherData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
