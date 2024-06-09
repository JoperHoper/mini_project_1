let coffeeList = [];
console.log(coffeeList);

async function hotCoffeeAPI() {
  let res = await fetch("https://api.sampleapis.com/coffee/hot");
  if (res.status === 200) {
    let coffeeArray = await res.json();
    for (let i = 0; i < coffeeArray.length; i++) {
      coffeeList.push(coffeeArray[i]);
    }
  }
}

async function icedCoffeeAPI() {
  let res = await fetch("https://api.sampleapis.com/coffee/iced");
  if (res.status === 200) {
    let coffeeArray = await res.json();
    for (let i = 0; i < coffeeArray.length; i++) {
      coffeeList.push(coffeeArray[i]);
    }
  }
}

function randomCoffee() {
  let randomIndex = Math.floor(Math.random() * coffeeList.length);
  let template = document.getElementById("randomizer-container");
  console.log(template.querySelector(".img-fluid"))
  template.querySelector(".img-fluid").src =
    coffeeList[randomIndex].image;
  template.querySelector(".card-title").innerText =
    coffeeList[randomIndex].title;
  template.querySelector(".card-text").innerText =
    coffeeList[randomIndex].description;
}

window.onload = async function () {
  await hotCoffeeAPI();
  await icedCoffeeAPI();
  randomCoffee();
};
