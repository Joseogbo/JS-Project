let today = new Date();

let date =
  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

const day = document.querySelector('.day');
day.innerHTML = date;

let weather = {
  apiKey: '59309f60abc7fd19aeac34a080f1cd4e',
  fetchWeather: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=metri&appid=' +
        this.apiKey
    )
      .then((res) => res.json())
      .then((data) => {
        this.showWeather(data);
        // console.log(data);
      });
  },
  showWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;

    document.querySelector('.city').innerHTML = `${name}, ${country}`;

    document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/' + icon + '@2x.png';

    document.querySelector(
      '.description'
    ).innerHTML = `Description: ${description}`;

    document.querySelector('.temp').innerHTML = `Temp: ${temp}&#8451;`;

    document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}`;

    document.querySelector('.wind').innerHTML = `Wind Speed: ${speed} km/h`;

    document.querySelector('.weather').classList.remove('loading');

    document.querySelector('.intro').classList.add('hide');

    document.body.style.backgroundImage =
      "url('https://unsplash.com/s/photos/london)";
  },

  search: function () {
    this.fetchWeather(document.querySelector('.searchBar').value);
  },
};

document.querySelector('.btn').addEventListener('click', () => {
  weather.search();
});

document.querySelector('.searchBar').addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    weather.search();
  }
});
