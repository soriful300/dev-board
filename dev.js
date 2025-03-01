let taskNumber = document.getElementById('complete-task-number');
let minusTask = document.getElementById('minus-task');
let mobileButton = document.getElementById('mobile-button');
let cloudButton = document.getElementById('cloud-button');
let swiftButton = document.getElementById('swift-button');
let metaButton = document.getElementById('meta-button');
let googleButton = document.getElementById('google-button');
let glassButton = document.getElementById('glass-button');

document
  .getElementById('all-history-clear')
  .addEventListener('click', function () {
    document.getElementById('history-container').innerHTML = '';
  });

// mobile button
document
  .getElementById('mobile-button')
  .addEventListener('click', function (event) {
    let currentNumber = parseInt(taskNumber.innerText);
    taskNumber.innerText = currentNumber + 1;
    let minusCurrentTask = parseInt(minusTask.innerText);
    minusTask.innerText = minusCurrentTask - 1;
    mobileButton.disabled = true;
    let today = new Date();
    let formeTedTime = today.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    let mobileTitle = document.getElementById('title-mobile').innerText;
    let createHistory = document.createElement('div');
    createHistory.innerHTML = `
    <div class=" mt-4 bg-[#F4F7FF] m-8  p-2 rounded-md">
          <h4 class="text-start">You have Complete The Task Add  ${mobileTitle} at ${formeTedTime} </h4>
        </div>
    `;
    let historyContainer = document.getElementById('history-container');
    historyContainer.appendChild(createHistory);
  });

// cloud button
document.getElementById('cloud-button').addEventListener('click', function () {
  let currentNumber = parseInt(taskNumber.innerText);
  taskNumber.innerText = currentNumber + 1;
  let minusCurrentTask = parseInt(minusTask.innerText);
  minusTask.innerText = minusCurrentTask - 1;
  cloudButton.disabled = true;
  let today = new Date();
  let formeTedTime = today.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  let mobileTitle = document.getElementById('title-dark').innerText;
  let createHistory = document.createElement('div');
  createHistory.innerHTML = `
    <div class=" mt-4 bg-[#F4F7FF] m-8  p-2 rounded-md">
          <h4 class="text-start">You have Complete The Task  ${mobileTitle} at ${formeTedTime} </h4>
        </div>
    `;
  let historyContainer = document.getElementById('history-container');
  historyContainer.appendChild(createHistory);
});

// swift-button

document.getElementById('swift-button').addEventListener('click', function () {
  let currentNumber = parseInt(taskNumber.innerText);
  taskNumber.innerText = currentNumber + 1;
  let minusCurrentTask = parseInt(minusTask.innerText);
  minusTask.innerText = minusCurrentTask - 1;
  swiftButton.disabled = true;
  let today = new Date();
  let formeTedTime = today.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  let mobileTitle = document.getElementById('title-Home').innerText;
  let createHistory = document.createElement('div');
  createHistory.innerHTML = `
    <div class=" mt-4 bg-[#F4F7FF] m-8  p-2 rounded-md">
          <h4 class="text-start">You have Complete The Task Add  ${mobileTitle} at ${formeTedTime} </h4>
        </div>
    `;
  let historyContainer = document.getElementById('history-container');
  historyContainer.appendChild(createHistory);
});

// meta-button

document.getElementById('meta-button').addEventListener('click', function () {
  let currentNumber = parseInt(taskNumber.innerText);
  taskNumber.innerText = currentNumber + 1;
  let minusCurrentTask = parseInt(minusTask.innerText);
  minusTask.innerText = minusCurrentTask - 1;
  metaButton.disabled = true;
  let today = new Date();
  let formeTedTime = today.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  let mobileTitle = document.getElementById('title-emoji').innerText;
  let createHistory = document.createElement('div');
  createHistory.innerHTML = `
    <div class=" mt-4 bg-[#F4F7FF] m-8  p-2 rounded-md">
          <h4 class="text-start">You have Complete The Task Add  ${mobileTitle} at ${formeTedTime} </h4>
        </div>
    `;
  let historyContainer = document.getElementById('history-container');
  historyContainer.appendChild(createHistory);
});

// google-button

document.getElementById('google-button').addEventListener('click', function () {
  let currentNumber = parseInt(taskNumber.innerText);
  taskNumber.innerText = currentNumber + 1;
  let minusCurrentTask = parseInt(minusTask.innerText);
  minusTask.innerText = minusCurrentTask - 1;
  googleButton.disabled = true;
  let today = new Date();
  let formeTedTime = today.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  let mobileTitle = document.getElementById('title-openai').innerText;
  let createHistory = document.createElement('div');
  createHistory.innerHTML = `
    <div class=" mt-4 bg-[#F4F7FF] m-8  p-2 rounded-md">
          <h4 class="text-start">You have Complete The Task Add  ${mobileTitle} at ${formeTedTime} </h4>
        </div>
    `;
  let historyContainer = document.getElementById('history-container');
  historyContainer.appendChild(createHistory);
});

// glass-button

document.getElementById('glass-button').addEventListener('click', function () {
  let currentNumber = parseInt(taskNumber.innerText);
  taskNumber.innerText = currentNumber + 1;
  let minusCurrentTask = parseInt(minusTask.innerText);
  minusTask.innerText = minusCurrentTask - 1;
  glassButton.disabled = true;
  let today = new Date();
  let formeTedTime = today.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  let mobileTitle = document.getElementById('title-Improve').innerText;
  let createHistory = document.createElement('div');
  createHistory.innerHTML = `
    <div class=" mt-4 bg-[#F4F7FF] m-8  p-2 rounded-md">
          <h4 class="text-start">You have Complete The Task Add  ${mobileTitle} at ${formeTedTime} </h4>
        </div>
    `;
  let historyContainer = document.getElementById('history-container');
  historyContainer.appendChild(createHistory);
});

let today = new Date();
let formateDate = today.toLocaleDateString('en-US', {
  weekly: 'short',
  month: 'short',
  day: '2-digit',
  year: 'numeric',
});

let currentDate = document.getElementById('curent-date');
currentDate.innerText = formateDate;

const buttons = document.querySelectorAll('.task-btn');
console.log(buttons);

let taskRemaining = buttons.length;
for (let button of buttons) {
  button.addEventListener('click', function () {
    button.ariaDisabled = true;
    this.disabled = true;
    taskRemaining--;
    alert('Board Updated Successfully');
  });
}

// go to another class code
document
  .getElementById('discover-somthing')
  .addEventListener('click', function () {
    location.href = 'blogs.html';
  });

// theme button code
document.getElementById('theme-btn').addEventListener('click', function () {
  let newRandomColor = Math.floor(Math.random() * 16777215).toString(16);
  let rgbValue = '#' + newRandomColor;
  document.body.style.backgroundColor = rgbValue;
});

//
