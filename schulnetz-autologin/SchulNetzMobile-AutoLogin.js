// ==UserScript==
// @name            AutoLogin SchulNetz
// @description     Automatically Logs into Mobile Version of Schulnetz
// @author          3n3a
// @supportURL      https://3n3a.ch
// @match           <YOUR_SCHULNETZ_INSTANCE/*>
// @version         0.0.1
// @license         MIT
// @noframes
// ==/UserScript==

const INPUT_FIELD = "inputPin";
const FORM_NAME = "form[name='pinform']";

const PASSWORD = "<YOUR_PIN>";

function c(t) {
  return console.log(t);
}

function a(t) {
  return window.alert(t);
}

function init() {
  c("Started AutoLogin");

  // set password
  const inputField = document.getElementById(INPUT_FIELD);
  inputField.value = PASSWORD;
  
  // submit form
  const form = document.querySelector(FORM_NAME);
  form.submit();
}

function isLoggedIn() {
  const inputField = document.getElementById(INPUT_FIELD);
  if (inputField != null) return true;
  return false;
}

if(!isLoggedIn()) {
  c("You are Logged In");
  return;
}

init();
