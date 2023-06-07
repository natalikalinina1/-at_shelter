const nameCats = [
  "Кот с усами",
  "Кошка с колпаком",
  "Кот с тыквой",
  "Кошка-балерина",
];

const imgCats = [
  "img/27063017_original1.png",
  "img/27065352_original 12.png",
  "img/27064387_original3.png",
  "img/27063713_original4.png",
];

for (let i = 0; i < nameCats.length; i++) {
  const dataNameCats = document.createTextNode(nameCats[i]);
  const textCats = document.getElementById(`name-cat-${i + 1}`);
  textCats.appendChild(dataNameCats);
}

const imgPaths = document.querySelectorAll(".thumb img");
for (let i = 0; i < imgPaths.length; i++) {
  imgPaths[i].src = imgCats[i];
  imgPaths[i].alt = nameCats[i];
}

const infoCats = [
  { 
      type: "Гладкошерстный", 
      color: "Белый с рыжими глазами", 
      vaccine: "Вакцинирована",
      passport: "Есть ветпаспорт",
      things: "Приучен к когтеточке",
      tray: "Знает лоточек"
  },
  { 
      type: "Гладкошерстный", 
      color: "Трёхцветная с зелеными глазами", 
      vaccine: "Вакцинирована",
      passport: "Есть ветпаспорт",
      things: "Приучен к когтеточке",
      tray: "Знает лоточек"
  },
  { 
      type: "Гладкошерстный", 
      color: "Черно-белый с зелеными глазами", 
      vaccine: "Вакцинирована",
      passport: "Есть ветпаспорт",
      things: "Приучен к когтеточке",
      tray: "Знает лоточек"
  },
  { 
      type: "Гладкошерстный", 
      color: "Трёхцветная с зелеными глазами", 
      vaccine: "Вакцинирована",
      passport: "Есть ветпаспорт",
      things: "Приучен к когтеточке",
      tray: "Знает лоточек"
  },
];

//формируем цикл и указываем, что установить каркас <ul> нужно после <p>, для которого мы устанавливали id=”name-cat-${i+1}”:
for (let i = 0; i < infoCats.length; i++) {
  const cat = infoCats[i];
  const infoList = `
    <ul>
      <li>${cat.type}</li>
      <li>${cat.color}</li>
      <li>${cat.vaccine}</li>
      <li>${cat.passport}</li>
      <li>${cat.things}</li>
      <li>${cat.tray}</li>
    </ul>
  `;
  const targetElement = document.querySelector(`#name-cat-${i+1}`);
  targetElement.insertAdjacentHTML('afterend', infoList);
}
