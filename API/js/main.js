import { DOM } from "./dom";
import "../style/style.css";
const URL = `https://valorant-api.com/v1/weapons`;

async function getData(URL) {
  try {
    const GunInfo = await fetch(URL);

    if (GunInfo.status <= 199 || GunInfo.status >= 300) {
      throw new Error(GunInfo);
    } else {
      // info.GetImg();
      // console.log(DOM.Poo.textContent);
    }
  } catch (error) {
    console.log(error);
    console.log("No");
  }
}

function clear() {
  document.querySelector("text-box").reset();
}

DOM.submit.addEventListener("submit", function (abc) {
  abc.preventDefault();
  info.GetImg();
  clear();
});

const info = {
  GetImg: async function () {
    const GunInfo = await fetch(URL);
    const GunData = await GunInfo.json();

    let UserInputIM = DOM.Input.value;
    const UserInput =
      UserInputIM.charAt(0).toUpperCase() + UserInputIM.slice(1);
    console.log(UserInput);

    GunData.data
      .filter((el) => el.displayName == `${UserInput}`)
      .map((el) => {
        DOM.reponse.insertAdjacentHTML(
          "beforeend",
          `<div>
            <img src="${el.displayIcon}" alt="">
            <img src="${el.skins[0].displayIcon}" alt="">
            <img src="${el.skins[1].displayIcon}" alt="">
            <img src="${el.skins[2].displayIcon}" alt="">
            <h1>${el.displayName}</h3>
            <h3>Fire Rate: ${el.weaponStats.fireRate} bullets per second</h3>
            <h3>Magazine Size: ${el.weaponStats.magazineSize} bullets</h3>
            <h3>Reload Time: ${el.weaponStats.reloadTimeSeconds} seconds</h3>
            <h3>Damage at 0~30m</h3>
            <h3>Head Shot Damage: ${el.weaponStats.damageRanges[0].headDamage}</h3>
            <h3>Body Shot Damage: ${el.weaponStats.damageRanges[0].bodyDamage}</h3>


          
          </div>`
        );
      });
  },
};
