'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderCountry(data, className = '') {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const languages = Object.values(data.languages)[0];
  const currencies = Object.values(data.currencies)[0].name;

  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${flag}" />
  <div class="country__data">
    <h3 class="country__name">${name}</h3>
    <h4 class="country__region">${region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${languages}</p>
    <p class="country__row"><span>💰</span>${currencies}</p>
  </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
}

function renderError(mgs) {
  countriesContainer.insertAdjacentText('beforeend', mgs);
  // countriesContainer.style.opacity = 1;
}

///////////////////////////////////////
// AJAX-CALL
/////////////////////////////////////
/*
function getCountryData(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const name = data.name.common;
    const flag = data.flags.svg;
    const region = data.region;
    const languages = Object.values(data.languages)[0];
    const currencies = Object.values(data.currencies)[0].name;

    const html = `
  <article class="country">
  <img class="country__img" src="${flag}" />
  <div class="country__data">
    <h3 class="country__name">${name}</h3>
    <h4 class="country__region">${region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${languages}</p>
    <p class="country__row"><span>💰</span>${currencies}</p>
  </div>
</article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
}
getCountryData('italy');
getCountryData('usa');
getCountryData('poland');



///////////////////////////////////////
// CALLBACK HELL
/////////////////////////////////////

function getCountryAndNeighbour(country) {
  // AJAX call coutry 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render Country 1
    renderCountry(data);

    // Get Neighbour Country (2)
    const [neighbour] = data.borders;
    if (!neighbour) return;
    // AJAX call coutry 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
}
getCountryAndNeighbour('italy');
// getCountryAndNeighbour('austria');


*/
///////////////////////////////////////
// PROMISES AND FETCH API, HANDLING ERRORS
/////////////////////////////////////
const request = fetch(`https://restcountries.com/v3.1/name/italy`);
console.log(request);

function getJSON(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
}

//

const getCoutryData = country =>
  // Dountry 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found');
      // const neighbour = 'asdfas';
      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => {
      [data] = data;
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      console.error(`💥 ${err}`);
      renderError(
        `Something went wrong 🤷🏻 🤷🏻 🤷🏻  Error:'${err.message}'. Try again 💁🏻`
      );
    })
    .finally(() => (countriesContainer.style.opacity = 1));

btn.addEventListener('click', () => getCoutryData('italy'));
getCoutryData('australia');
