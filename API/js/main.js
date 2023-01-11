import "../style/style.css";
const URL = `https://api.jikan.moe/v4/anime/{id}/episodes`;
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
      GetImg(URL);
      // data.data.forEach((el) => {
      //   document.body.insertAdjacentHTML(
      //     "afterbegin",
      //     `<img src="${el.images.jpg.large_image_url}" alt="">`
      //   );
      //   console.log("poop");
      // });
      // document.body.innerHTML = `<img src="${data.data[0].images.jpg.large_image_url}" alt="">`;
      // console.log("poop");
    }
  } catch (error) {
    console.log(error);
    console.log("No");
  }
}

async function GetImg(URL) {
  const aniout = await fetch(URL);
  const data = await aniout.json();
  data.data.forEach((el) => {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <img src="${el.images.jpg.large_image_url}" alt="">`
    );
  });
}

// GetImg();
getData(URL);

const products = {
  getImg: function () {
    data
      .filter((el) => el.type.includes(`meat`))
      .forEach((el) => {
        DOM.box.insertAdjacentHTML(
          "afterbegin",
          `<div class= "PCards">
          <img src="${el.img}"/>
            <h1>${el.name}</h1>
          </div>
        `
        );
      });
  },
  getName: function () {
    data
      .filter((el) => el.type.includes(`sushi`))
      .forEach((el) => {
        DOM.box.insertAdjacentHTML(
          "afterbegin",
          `<div class= "PCards">
          <img src="${el.img}"/>
            <h1>${el.name}</h1>
          </div>
        `
        );
      });
  },
  getDrinks: function () {
    data
      .filter((el) => el.type.includes(`drinks`))
      .map((el) => {
        DOM.box.insertAdjacentHTML(
          "afterbegin",
          `<div class= "PCards">
          <img src="${el.img}"/>
            <h1>${el.name}</h1>
          </div>
        `
        );
      });
  },
  getAll: function () {
    products.getMeat();
    products.getSushi();
    products.getDrinks();
  },
};
