'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = '#404040';
  document.body.addEventListener('click', function () {
    header.style.color = '#fff';
  });
})();
