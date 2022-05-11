'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// Rendering of country
function renderCountry(data, className = '') {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${flag}" />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}
const request = fetch('https://restcountries.com/v3.1/name/portugal');

function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
}

///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

// This is helper function for error handling
function getJSON(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg}: ${response.status}`);
    return response.json();
  });
}

function getCountryData(country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => {
      if (!data) return;
      [data] = data;
      renderCountry(data, 'neighbour');
    })
    .catch(error => {
      renderError(`Something went wrong: ${error.message}`);
      console.error(`${error} 🤬`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
}
btn.addEventListener('click', () => getCountryData('usa'));

/////////////////////////////
// Coding challenge
function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) throw new Error(`Somenthing went wrong`);
      return response.json();
    })
    .then(data => {
      if (!data) return;
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .then(data => renderCountry(data[0]))
    .catch(renderError(`Something went wrong`))
    .finally(() => (countriesContainer.style.opacity = 1));
}
whereAmI(52.508, 13.381);
