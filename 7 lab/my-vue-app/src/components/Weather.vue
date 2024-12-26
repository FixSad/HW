<template>
    <div>
      <h1>Погода</h1>
      <input v-model="city" placeholder="Введите город" id="city"/>
      <button @click="fetchWeather">Получить погоду</button>
      <div v-if="weather">
        <p>Температура: {{ weather.temp }}°C</p>
        <p>Средняя Температура: {{ weather.avg_temp }}</p>
        <p>Описание: {{ weather.description }}</p>
        <p>Локальное время: {{ weather.local_time }}</p>
        <p>Страна: {{ weather.country }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        weather: null,
      };
    },
    methods: {
      fetchWeather() {
        const URL = "https://api.weatherapi.com/v1/forecast.json?key=";
        const KEY = "2d3f3c14e12d4d29b84134343242612";
        const CITY = document.getElementById("city").value;
        fetch(`${URL}${KEY}&q=${CITY}`)
          .then(response => response.json())
          .then(data => {
            this.weather = {
              temp: data.current.temp_c,
              local_time: data.location.localtime,
              country: data.location.country,
              description: data.current.condition.text,
              avg_temp: data.forecast.forecastday[0].day.avgtemp_c
            };
        });
      },
    },
  };
  </script>