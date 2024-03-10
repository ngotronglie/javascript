// function createPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
//   return obj;
// }
// const salva = createPerson("Salva");
// salva.introduceSelf();
// // "Hi! I'm Salva."

// console.log(salva);

// const frankie = createPerson("Frankie");
// frankie.introduceSelf();
// // "Hi! I'm Frankie."
// const liem = createPerson("Ngô TRọng Liêm");
// liem.introduceSelf();

// function Person(name) {
//   this.name = name;
//   this.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
// }
// const ngotrongliem = new Person("ngotrongliem");
// ngotrongliem.introduceSelf();
// // "Hi! I'm ngotrongliem."
// console.log(ngotrongliem);

// const ngominhthiet = new Person("ngominhthiet");
// ngominhthiet.introduceSelf();
// // "Hi! I'm ngominhthiet."
//----------------------------------------------------------------
// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

// // console.log(Date.prototype);
// // // Object { }
// // // null

// const myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDay());
// console.log(myDate.getMonth());
// console.log(myDate.getYear());

// myDate.getYear = function () {
//   console.log("something else!");
// };

// myDate.getYear(); // 'something else!'

//---------------------------
// const personPrototype = {
//   greet() {
//     console.log(`hello, my name is ${this.name}!`);
//   },
// };

// function Person(name) {
//   this.name = name;
//   //   this.greet = name;
// }

// Object.assign(Person.prototype, personPrototype);
// // or
// // Person.prototype.greet = personPrototype.greet;

// const ngotrongliem = new Person("ngotrongliem");
// ngotrongliem.greet(); // hello, my name is Reuben!
// const irma = new Person("Irma");

// console.log(Object.hasOwn(irma, "name")); // true
// console.log(Object.hasOwn(irma, "greet")); // false  => khi có dòng 69 thì cái này bằng true
// ----------------------------------------------------------------
//json
// 1:
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
populate();
function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}
function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

// 2 :
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
populate();
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
console.log(myString);
// -----------------------------------
async function logMovies() {
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
  );
  const movies = await response.json();
  console.log(movies);
}
logMovies();
