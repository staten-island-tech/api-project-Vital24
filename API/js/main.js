import { DOM } from "./dom";
import "../style/style.css";
const URL = `https://api.jikan.moe/v4/anime?q=one-piece&sfw`;

// const URL = `https://api.jikan.moe/v4/naruto/{id}/picturens`;
// const URL = `https://api.jikan.moe/v4/anime?q=${anime}&sfw`;

async function getData(URL) {
  try {
    const aniout = await fetch(URL);
    if (aniout.status <= 199 || aniout.status >= 300) {
      throw new Error(aniout);
    } else {
      const data = await aniout.json();

      info.GetImg();
      // data.data.forEach((el) => {
      //   document.body.insertAdjacentHTML(
      //     "afterbegin",
      //     `<img src="${el.images.jpg.large_image_url}" alt="">`
      //   );
    }
    // document.body.innerHTML = `<img src="${data.data[0].images.jpg.large_image_url}" alt="">`;
    // console.log("poop");
  } catch (error) {
    console.log(error);
    console.log("No");
  }
}

// const EPID = data.data.forEach((el) => el.mal_id);
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

    for (const a in URLEParr) {
      setInterval(async () => {
        const epout = await fetch(`${URLEParr[a]}`);
        const epdata = await epout.json();

        console.log(epdata);
      }, 400);

      /* const epout = await fetch(`${URLEParr[a]}`);
      const epdata = await epout.json();
      console.log(epdata); */
    }
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
