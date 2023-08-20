import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const LOCALS_KEY = "feedback-form-state"; 

form.addEventListener("input", throttle(saveInput, 500));
form.addEventListener("submit", submitForm)

let inputs = JSON.parse(localStorage.getItem(LOCALS_KEY)) || {};

const { email, message } = form.elements;

email.value = inputs.email || "";
message.value = inputs.message || "";

function saveInput(evt) {
    evt.preventDefault();
    inputs[evt.target.name] = evt.target.value;
localStorage.setItem(LOCALS_KEY, JSON.stringify(inputs));
};

function submitForm(evt) {
    evt.preventDefault();
    console.log(inputs);
    localStorage.removeItem(LOCALS_KEY);
};