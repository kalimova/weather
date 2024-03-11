import React, { useState, useEffect } from "react";
import axios from "axios";
// на странице мейн отправляем запрос для получ погоды-статичный запрос, в комп хедер слушаем событие которое позволит получить то что написал пользователь, при нажатии на интер из хедера передаем инф о том что ввел пользователь в мейн, подставляем что ввел пользователь в ссылку
const Main = ({ city }) => {
  const [pogoda, setPogoda] = useState({});
  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c15601da476242f8e33e17e82e4421e2`
    ).then(({ data }) => setPogoda(data));
  }, [city]);
  console.log(pogoda);
  return (
    <>
      <p className="city">City: {city}</p>
      <p>{Math.round(pogoda?.main?.temp - 275.15)} </p>
      <p className="max">День: {Math.round(pogoda?.main?.temp_max - 275.15)}</p>
      <p className="min">Ночь: {Math.round(pogoda?.main?.temp_min - 275.15)}</p>

     
<img src={`http://openweathermap.org/img/w/${pogoda.weather && pogoda.weather[0].icon}.png`} className="cloud"/>
    </>
  );
};
export default Main;
