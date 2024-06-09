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

async function addCard(coffeeType) {
  if (coffeeType === "Hot") {
    await hotCoffeeAPI();
  } else if (coffeeType === "Iced") {
    await icedCoffeeAPI();
  } else {
    await hotCoffeeAPI();
    await icedCoffeeAPI();
  }

  for (let i = 0; i < coffeeList.length; i++) {
    let template = document
      .getElementById("coffee-template")
      .content.cloneNode(true);
    template.querySelector(".card-img-top").src = coffeeList[i].image;
    template.querySelector(".card-title").innerText = coffeeList[i].title;
    template.querySelector(".card-text").innerText = coffeeList[i].description;
    template.querySelector(".card-ingredients").innerText =
      "Ingredients: " + coffeeList[i].ingredients;
    document.getElementById("card-list").appendChild(template);
  }
}

window.onload = function () {
  addCard("");
};

let isLoading = false;

async function filterItems(e) {
  coffeeList = [];
  document.getElementById("card-list").textContent = "";
  isLoading = true;
  let loadingScreen = document.getElementsByClassName("loading-container");
  if (loadingScreen.length > 0) {
    loadingScreen[0].style.opacity = 1;
  }

  document.getElementById("filter-btn").classList.remove("show")
  let dropdownMenu = document.getElementById("dropdown")
  dropdownMenu.classList.remove("show")
  dropdownMenu.style = ""

  if (e.value === "Hot" || e.value === "Iced") {
    addCard(e.value).then(() => {
      isLoading = false;
      if (loadingScreen.length > 0) {
        loadingScreen[0].style.opacity = 0;
      }
    });
  }
}
