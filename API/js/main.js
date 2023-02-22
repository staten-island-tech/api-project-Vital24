import { DOM } from "./dom";
import "../style/style.css";
const URL = `https://valorant-api.com/v1/weapons`;

async function getData(URL) {
  try {
    const GunInfo = await fetch(URL);

    if (GunInfo.status <= 199 || GunInfo.status >= 300) {
      throw new Error(GunInfo);
    } else {
      GunList();
    }
  } catch (error) {
    console.log(error);
    console.log("No");
  }
}

function ClearInput() {
  document.querySelector(".UserInput").value = "";
}

function removal(event) {
  event.target.parentElement.remove();
}

DOM.submit.addEventListener("submit", async function (abc) {
  abc.preventDefault();
  await getInfo();
  ClearInput();
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", removal);
  });
});

async function GunList() {
  const GunInfo = await fetch(URL);
  const GunData = await GunInfo.json();
  GunData.data.forEach((el) => {
    DOM.list.insertAdjacentHTML("beforeend", `<li>${el.displayName}</li>`);
  });
}

async function getInfo() {
  const GunInfo = await fetch(URL);
  const GunData = await GunInfo.json();
  let UserInputIM = DOM.Input.value.toLowerCase();

  const UserInput = UserInputIM.charAt(0).toUpperCase() + UserInputIM.slice(1);
  console.log(UserInput);

  const Guns = [];
  GunData.data.forEach((el) => Guns.push(`${el.displayName}`));
  console.log(Guns);

  if (UserInput == "Melee") {
    GunData.data
      .filter((el) => el.displayName == `${UserInput}`)
      .map((el) => {
        DOM.reponse.insertAdjacentHTML(
          "beforeend",
          `<div class="suu">
          <img src="${el.displayIcon}" alt="${el.displayName}">
          <img src="${el.skins[0].displayIcon}" alt="${el.skins[0].displayName}">
          <img src="${el.skins[1].displayIcon}" alt="${el.skins[1].displayName}">
          <img src="${el.skins[2].displayIcon}" alt="${el.skins[2].displayName}">
          <h1>${el.displayName}</h3>

    
          <button class="remove">Clear</button>
        
        </div>`
        );
      });
  } else if (Guns.includes(`${UserInput}`)) {
    GunData.data
      .filter((el) => el.displayName == `${UserInput}`)
      .map((el) => {
        DOM.reponse.insertAdjacentHTML(
          "beforeend",
          `<div class="suu">
        <img src="${el.displayIcon}" alt="${el.displayName}">
        <img src="${el.skins[0].displayIcon}" alt="${el.skins[0].displayName}">
        <img src="${el.skins[1].displayIcon}" alt="${el.skins[1].displayName}">
        <img src="${el.skins[2].displayIcon}" alt="${el.skins[2].displayName}">
        <h1>${el.displayName}</h3>
        <h3>Fire Rate: ${el.weaponStats.fireRate} bullets per second</h3>
        <h3>Magazine Size: ${el.weaponStats.magazineSize} bullets</h3>
        <h3>Reload Time: ${el.weaponStats.reloadTimeSeconds} seconds</h3>
        <h3>Damage at 0~30m</h3>
        <h3>Head Shot Damage: ${el.weaponStats.damageRanges[0].headDamage}</h3>
        <h3>Body Shot Damage: ${el.weaponStats.damageRanges[0].bodyDamage}</h3>
      
        <button class="remove">Clear</button>
      
      </div>`
        );
      });
  } else {
    DOM.reponse.insertAdjacentHTML(
      "beforeend",
      `<div class="suu">
    <h1>${UserInput} isn't a weapon</h3>

  
    <button class="remove">Clear</button>
  
  </div>`
    );
  }
}

getData(URL);
