'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
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
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

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



///////////////////////////////////////
// PROMISES AND FETCH API, HANDLING ERRORS
/////////////////////////////////////
const request = fetch(`https://restcountries.com/v3.1/name/italy`);

function getJSON(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
}

//

const getCoutryData = country =>
  // Country 1
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
      // console.error(`💥 ${err}`);
      renderError(
        `Something went wrong 🤷🏻 🤷🏻 🤷🏻  Error:'${err.message}'. Try again 💁🏻`
      );
    })
    .finally(() => (countriesContainer.style.opacity = 1));

// btn.addEventListener('click', () => getCoutryData('italy'));

//////////////////////////////////
// Example of event Loop
//
/*
console.log(`Test start`); // 1
setTimeout(() => {
  console.log(`0 sec timer`);
}, 0); // 4
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3
console.log('Test end'); // 2




//////////////////////////////////
// Building a simple promise
//
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery 🎟`);
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(`You WIN 💶`);
    } else {
      reject(new Error(`You are looser 🤦🏻`));
    }
  }, 3000);
});

lotteryPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));

// More real example
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(1);
  })
  .then(() => console.log(`I waited for 1 seconds`));

//
Promise.resolve('Immediately resolved promise').then(x => console.log(x));





function getPosition() {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   error => reject(error)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
getPosition().then(position => console.log(position));

function whereAmI() {
  // new code
  getPosition()
    .then(position => {
      const { latitude, longitude } = position.coords;
      console.log(latitude);
      console.log(longitude);
      return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
    })
    .then(result => {
      if (!result.ok)
        throw new Error(`Problem with geocoding ${result.status}`);
      return result.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(result => {
      if (!result.ok) throw new Error(`Country not found (${result.status})`);
      return result.json();
    })
    .catch(error => console.error(`${error.message} 💥`));
}

btn.addEventListener('click', whereAmI);



// Async/Await
function getPostition() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}

const whereAmI = async function () {
  try {
    // Geolocation
    const position = await getPostition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse geocoding
    const responseGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (!responseGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await responseGeo.json();

    // Country data
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!response.ok) throw new Error(`Problem to found country`);
    const data = await response.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    renderError(`Something went wrong ${error.message}`);

    // Reject promise returned from async function
    throw error;
  }
};
console.log(`1: Will get location`);

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (error) {
    console.log(`2: ${error.message} 🤦🏻`);
  }
  console.log(`3: Finished getting location`);
})();



*/

// Running promises in parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.flatMap(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};
// get3Countries('ukraine', 'italy', 'Canada');

// Challange 3
// const imgBox = document.querySelector('.images');
// let currentImg;
// function wait(seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// }
// function createImage(imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', () => {
//       imgBox.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', () => {
//       reject(new Error(`Image not found`));
//     });
//   });
// }

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.log(err));

const imgBox = document.querySelector('.images');
let currentImg;
function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}
function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgBox.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`Image not found`));
    });
  });
}

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.log(err));

////////////////////////
const loadNPause = async function () {
  try {
    // Load img 1
    let img = await createImage('img/img-1.jpg');
    console.log(`Image 1 loaded`);
    await wait(2);
    img.style.display = 'none';
    // Load img 2
    img = await createImage('img/img-2.jpg');
    console.log(`Image 2 loaded`);
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
};
// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.log(error);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
