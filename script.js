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
