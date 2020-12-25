
let pets = []; // 8
let fullPetsList = []; // 48
const request = new XMLHttpRequest();
request.open('GET', './pets.json');
request.onload = () => {console.log(request.response)};
fetch('./pets.json').then(res => res.json()).then(list => {
  pets = list;

  fullPetsList = (() => {
    let tempArr = [];

    for (let i = 0; i < 6; i++) {
      const newPets = pets;

      for (let j = pets.length; j > 0; j--) {
        let randInd = Math.floor(Math.random() * j);
        const randElem = newPets.splice(randInd, 1)[0];
        newPets.push(randElem);
      }

      tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
  })();

  fullPetsList = sort863(fullPetsList);

  createPets(fullPetsList);


  for (let i = 0; i < (fullPetsList.length / 6); i++) {
    const stepList = fullPetsList.slice(i * 6, (i * 6) + 6);

    for (let j = 0; j < 6; j++) {
      stepList.forEach((item, ind) => {
        if ( item.name === stepList[j].name && (ind !== j) ) {
          document.querySelector(".pet-slider").children[(i * 6) + j].style.border = '5px solid red';
        }
      })
    }
  }
})
// request.onload = () => {
//   pets = JSON.parse(request.response);


// }

const createPets = (petsList) => {
  const elem = document.querySelector(".pet-slider");
  elem.innerHTML += createElements(petsList);
}

createElements = (petsList) => {
  let str = '';
  for (let i = 0; i < petsList.length; i++) {
    str += `<div class="pet-item"> <img src=" ${ petsList[i].img } "> <p>${ petsList[i].name }</p> <button>Learn more</button></div>`;
  }
  return str;
}


request.send();

const sort863 = (list) => {
  let unique8List = [];
  let length = list.length;
  for (let i = 0; i < length / 8; i++) {
    const uniqueStepList = [];
    for (j = 0; j < list.length; j++) {
      if (uniqueStepList.length >= 8) {
        break;
      }
      const isUnique = !uniqueStepList.some((item) => {
        return item.name === list[j].name;
      });
      if (isUnique) {
        uniqueStepList.push(list[j]);
        list.splice(j, 1);
        j--;
      }
    }
    unique8List = [...unique8List, ...uniqueStepList];
  }
  list = unique8List;


  list = sort6recursively(list);

  return list;
}

const sort6recursively = (list) => {
  const length = list.length;

  for (let i = 0; i < (length / 6); i++) {
    const stepList = list.slice(i * 6, (i * 6) + 6);

    for (let j = 0; j < 6; j++) {
      const duplicatedItem = stepList.find((item, ind) => {
        return item.name === stepList[j].name && (ind !== j);
      });

      if (duplicatedItem !== undefined) {
        const ind = (i * 6) + j;
        const which8OfList = Math.trunc(ind / 8);

        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

        sort6recursively(list);
      }
    }
  }

  return list;
}


/* $('.pet-item').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});


let currentPage = 0;
document.querySelector("#prevPage").addEventListener('click', (e) => {
  if (currentPage > 0) {
    currentPage--;
    console.log(currentPage+1);
  }
  document.querySelector("#pets").style.top = `calc(35px - ${190 * currentPage}px)`;
  document.querySelector("#currentPage").innerText = (currentPage+1).toString();

});

document.querySelector("#nextPage").addEventListener('click', (e) => {
  if (currentPage < (document.querySelector("#pets").offsetHeight / 190) - 1) {
    currentPage++;
    console.log(currentPage+1);
  }

  document.querySelector("#pets").style.top = `calc(35px - ${190 * currentPage}px)`;
  document.querySelector("#currentPage").innerText = (currentPage+1).toString();
});




(fullPetsList / itemsPerPage)

let itemsPerPage = 8;

const checkItemsPerPage = () => {
if (document.querySelector("body").offsetWidth > 768 && document.querySelector("body").offsetWidth < 1280) {
    itemsPerPage = 6;

   }
 }
*/

