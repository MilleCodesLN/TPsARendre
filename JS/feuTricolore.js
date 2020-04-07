// const circles = document.querySelectorAll('.circle')
// let activeLight = 0;

// setInterval(() => {
//   changeLight();
// }, 1000);

// function changeLight() {
//   circles[activeLight].className = 'circle';
//   activeLight++;

//   if (activeLight > 2) {
//     activeLight = 0;
//   }

//   const currentLight = circles[activeLight]

//   currentLight.classList.add(currentLight.getAttribute('color'));
// }
//////////////////////////////////////////////////////////////////////////////////////////////////
let changementEtat = (function () {
    let etat = 0,
        circles = ["Red", "Yellow", "Green"],
        circlesLength = circles.length,
        order = [
            [8000, "Green"],
            [1000, "Yellow"],
            [5000, "Red"]

        ],
        orderLength = order.length,
        lampIndex,
        orderIndex,
        sId;

    return function (stop) {
        if (stop) {
            clearTimeout(sId);
            return;
        }

        let lamp,
            lampDOM;

        for (lampIndex = 0; lampIndex < circlesLength; lampIndex += 1) {
            lamp = circles[lampIndex];
            lampDOM = document.getElementById(lamp);
            if (order[etat].indexOf(lamp) !== -1) {
                lampDOM.classList.add("lamp" + lamp);
            } else {
                lampDOM.classList.remove("lamp" + lamp);
            }
        }

        sId = setTimeout(changementEtat, order[etat][0]);
        etat += 1;
        if (etat >= orderLength) {
            etat = 0;
        }
    };
}());

document.getElementById("trafficLight").addEventListener("click", (function () {
    let etat = false;

    return function () {
        changementEtat(etat);
        etat = !etat;
    };
}()), false);
/////////////////////////////////////////////////////////////////
// let feuTricolore = document.querySelector('#trafficLight');
// let feu = document.querySelector('.circle');
// let rouge = document.querySelector('#rouge');
// let orange = document.querySelector('#orange');
// let vert = document.querySelector('#vert');

// let changementEtat = (function () {
//   let etat = 0;
//   let feux = ["Red", "Yellow", "Green"];
//   let tailleTabFeux = feux.length;
//   let ordreDefilement = [[8000, "Green"], [1000, "Yellow"], [7000, "Red"]];
//   let tailleTabOrdre = ordreDefilement.length;
//   let cpt, indexFeux, indexOrdre,

//   return function (stop) {
//     if (stop) {
//       clearTimeout(sId);
//       return;
//     }
//   }



// }());
