/* global pcs */
(function () {
  'use strict';

  const units = 'imperial';

  const zipInput = $('#zip');

  // USE YOUR OWN API KEY - REGISTER AT https://home.openweathermap.org/users/sign_up
  // but if you must, heres mine
  const apiKey = 'cb7c71219cf09eb0bb414b932669be97';
  const locationElem = $('#location');
  const weatherIcon = $('#weatherIcon');
  const descriptionElem = $('#description');

  zipInput.change(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zipInput.val()}&units=${units}`)
      .then(r => {
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
      })
      .then(weatherData => {
        console.log(weatherData);
        locationElem.text(weatherData.name);
        weatherIcon.attr('src', `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`);
        descriptionElem.text(`${weatherData.main.temp} and ${weatherData.weather[0].description}`);
      })
      .catch(err => pcs.messageBox(err));
  });


}());