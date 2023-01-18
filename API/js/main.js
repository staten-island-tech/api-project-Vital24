import { DOM } from "./dom";
import "../style/style.css";
const URL = ``;

async function getData(URL) {
  try {
    const aniout = await fetch(URL);
    if (aniout.status <= 199 || aniout.status >= 300) {
      throw new Error(aniout);
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
    const aniout = await fetch(URL);
    const data = await aniout.json();
    const EPID = [];

    data.data.forEach((el) => {
      DOM.reponse.insertAdjacentHTML(
        "beforeend",
        `<div class=>
        <img src="${el.images.jpg.large_image_url}" alt="">
        <h2>Name:${el.title_english} ID: ${el.mal_id}</h2>
        <button class = "ShowEP id = "${el.mal_id}">Show Episodes</button>
        </div>
        `
      );
      EPID.push(`${el.mal_id}`);
    });
    //IM a GENIUS
    const URLEParr = [];

    EPID.forEach((el) => {
      `https://api.jikan.moe/v4/anime/${el}/episodes`;

      URLEParr.push(`https://api.jikan.moe/v4/anime/${el}/episodes`);
    });
    console.log(URLEParr);

    // for (const a in URLEParr) {
    //   setInterval(async function episodes() {
    //     const epout = await fetch(`${URLEParr[a]}`);
    //     const epdata = await epout.json();
    //     console.log(epdata);
    //   }, 1000);

    // console.log(epdata);
    // }
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
