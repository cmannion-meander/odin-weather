import _ from 'lodash';
import getWeather from './print.js';

 function component() {
   const element = document.createElement('div');
  const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.addEventListener("click", e=> getWeather("Boston"));

  element.appendChild(btn);

   return element;
 }

 document.body.appendChild(component());