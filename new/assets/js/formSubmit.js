const form = document.getElementById('signupForm');
const radio1 = document.getElementById('isMQStudent1');
const radio2 = document.getElementById('isMQStudent2');
const studentID = document.getElementById('studentID');
const axios = require('axios');

const val = (id) => document.getElementById(id).value;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // TODO - verify email

  const data = {
    name: val('nameInput'),
    email: val('email'),
    isMQStudent: document.getElementById('isMQStudent1').checked,
    studentID: val('studentId'),
  };

  axios.post('https://2b16b5fc4d2db6dab2425b695e3851bc.m.pipedream.net', data);
});

radio1.addEventListener('click', () => {
  studentID.classList.remove('hidden');
  studentID.classList.add('visible');
});

radio2.addEventListener('click', () => {
  studentID.classList.remove('visible');
  studentID.classList.add('hidden');
});
