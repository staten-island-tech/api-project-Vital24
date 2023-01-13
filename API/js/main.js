import { DOM } from "./dom";
import "../style/style.css";
const URL = `https://api.jikan.moe/v4/anime?q=Naruto&sfw`;

// const URL = `https://api.jikan.moe/v4/naruto/{id}/picturens`;
// const URL = `https://api.jikan.moe/v4/anime?q=${anime}&sfw`;
console.log(URL);

async function getData(URL) {
  try {
    const aniout = await fetch(URL);
    if (aniout.status <= 199 || aniout.status >= 300) {
      throw new Error(aniout);
    } else {
      const data = await aniout.json();
      // console.log(data.data);
      // console.log(data.data[0].images.jpg.large_image_url);
      console.log(data.data);
      info.GetImg();
      // data.data.forEach((el) => {
      //   document.body.insertAdjacentHTML(
      //     "afterbegin",
      //     `<img src="${el.images.jpg.large_image_url}" alt="">`
      //   );
      console.log("poop");
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
    data.data.forEach((el) => {
      DOM.reponse.insertAdjacentHTML(
        "beforeend",
        `<div class=>
        <img src="${el.images.jpg.large_image_url}" alt="">
        <h2>Name:${el.title_english} ID: ${el.mal_id}</h2>
        </div>
        `
      );
      // const URLEP = `https://api.jikan.moe/v4/anime/${el.mal.id}/episodes`;
    });
    // const EPID = data.data.forEach((el) => console.log(el.mal_id));
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

info.GetEp();
// GetImg();
getData(URL);

DOM.Submit.addEventListener("submit", function (abc) {
  abc.preventDefault();
  document.getElementById("form").reset();
});
