import { DOM } from "./dom";
import "../style/style.css";
const URL = `https://valorant-api.com/v1/weapons`;

async function getData(URL) {
  try {
    const GunInfo = await fetch(URL);

    if (GunInfo.status <= 199 || GunInfo.status >= 300) {
      throw new Error(GunInfo);
    } else {
      info.GetImg();
    }
  } catch (error) {
    console.log(error);
    console.log("No");
  }
}

const info = {
  GetImg: async function () {
    const GunInfo = await fetch(URL);
    const GunData = await GunInfo.json();

    // GunData.data.forEach((el) => {
    //   console.log(el.displayName.weaponStats);
    // });
    // console.log(GunData.data);
    GunData.data
      .filter((el) => el.displayName.includes("Odin"))
      .forEach((el) => {
        DOM.reponse.insertAdjacentHTML(
          "beforeend",
          `<div>
            <img src="${el.displayIcon}" alt="">
            <img src="${el.skins[0].displayIcon}" alt="">
            <h1>${el.displayName}</h3>
            <h3>Fire Rate: ${el.weaponStats.fireRate} bullets per second</h3>
            <h3>Magazine Size: ${el.weaponStats.magazineSize} bullets</h3>
            <h3>Reload Time: ${el.weaponStats.reloadTimeSeconds} seconds</h3>
            <h3>Damage from 0~30m</h3>
            <h3>Head Shot Damage: ${el.weaponStats.damageRanges[0].headDamage}</h3>
            <h3>Body Shot Damage: ${el.weaponStats.damageRanges[0].bodyDamage}</h3>
            <h3>Damage at 30m+</h3>
            <h3>Head Shot Damage: ${el.weaponStats.damageRanges[1].headDamage}</h3>
            <h3>Body Shot Damage: ${el.weaponStats.damageRanges[1].bodyDamage}</h3>
            

          </div>`
        );
      });
  },
};
info.GetImg();
// data.data.forEach((el) => {
// DOM.reponse.insertAdjacentHTML(
//   "beforeend",
//   `<div class=>
//   <img src="${el.images.jpg.large_image_url}" alt="">
//   <h2>Name:${el.title_english} ID: ${el.mal_id}</h2>
//   <button class = "ShowEP id = "${el.mal_id}">Show Episodes</button>
//   </div>
//   `
//   );
// });
// },

//   GetEp: async function () {
//     const URLEP = `https://api.jikan.moe/v4/anime/20/episodes`;
//     const epout = await fetch(URLEP);
//     const epdata = await epout.json();

//     console.log(epdata.data.title_english);
//     epdata.data.forEach((el) => {
//       DOM.reponse.insertAdjacentHTML(
//         "beforeend",
//         `<div class=>>
//         <h2>Name:${el.title}</h2>
//         </div>
//         `
//       );
//     });
//   },
// };
// info.GetEp();
// GetImg();
// getData(URL);

// DOM.Submit.addEventListener("submit", function (abc) {
//   abc.preventDefault();
//   document.getElementById("form").reset();
// });
