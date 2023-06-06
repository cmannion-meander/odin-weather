import _ from 'lodash';
import getWeather from './print.js';
import './style.css';

function component() {
    const controls = document.querySelector(".controls");
    const btn = document.querySelector(".search-button")

    btn.addEventListener("click", getWeather, false);

    controls.appendChild(btn);
};

component();

