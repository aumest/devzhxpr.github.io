/*!
* Start Bootstrap - One Page Wonder v6.0.4 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';

setVisible('.body', false);
setVisible('.loadingbox', true);

document.addEventListener('DOMContentLoaded', () =>
  wait(1000).then(() => {
    setVisible('body', true);
    setVisible('.loadingbox', false);
  }));
