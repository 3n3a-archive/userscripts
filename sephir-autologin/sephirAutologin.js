// ==UserScript==
// @name            AutoLogin Sephir
// @description     Automatically Logs into Sephir
// @author          3n3a
// @supportURL      https://3n3a.ch
// @match           https://sephir.ch/*
// @version         0.0.1
// @license         MIT
// ==/UserScript==

const INPUT_FIELD_U = "input[name='email']";
const INPUT_FIELD_P = "input[name='passwort']";
const FORM_NAME = "form[name='login']";

const IFRAME = "#mainFrame";

const USERNAME = "<YOUR_EMAIL>";
const PASSWORD = "<YOUR_PASSWORD>";

function c(t) {
  return console.log(t);
}

function a(t) {
  return window.alert(t);
}

function init() {
  c("Started AutoLogin");
    // set username
  const inputFieldU = document.querySelector(INPUT_FIELD_U);
  inputFieldU.value = USERNAME;

  // set password
  const inputField = document.querySelector(INPUT_FIELD_P);
  inputField.value = PASSWORD;
  
  // submit form
  const form = document.querySelector(FORM_NAME);
  form.submit();
}

c("## Sephir AutoLogin Version 0.0.1 ##");

function isPageWith(part) {
  const url = window.location.pathname;
  if (url.indexOf(part) != -1) return true;
  return false;
}

if(!isPageWith('login.cfm') && isPageWith('index.cfm')) {
  c("You are on Home Page.");
  const iframe = document.querySelector(IFRAME);
  const url = iframe.src;
  window.location = url;
  return;
} else if (!isPageWith('login.cfm') && !isPageWith('index.cfm')) {
  c("You are on an unrecognized Page");
  return;
}

init();
