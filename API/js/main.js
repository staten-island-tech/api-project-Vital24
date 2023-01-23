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
    console.log(GunData);
    AA = GunData.data.filter((el) => el.displayName.includes("Odin"));
    console.log(AA);

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
  },

  GetEp: async function () {
    const URLEP = `https://api.jikan.moe/v4/anime/20/episodes`;
    const epout = await fetch(URLEP);
    const epdata = await epout.json();

    console.log(epdata.data.title_english);
    epdata.data.forEach((el) => {
      DOM.reponse.insertAdjacentHTML(
        "beforeend",
        `<div class=>>
        <h2>Name:${el.title}</h2>
        </div>
        `
      );
    });
  },
};
// info.GetEp();
// GetImg();
getData(URL);

DOM.Submit.addEventListener("submit", function (abc) {
  abc.preventDefault();
  document.getElementById("form").reset();
});
