// import "../style/style.css";
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
      GetImg();
      // data.data.forEach((el) => {
      //   document.body.insertAdjacentHTML(
      //     "afterbegin",
      //     `<img src="${el.images.jpg.large_image_url}" alt="">`
      //   );
        console.log("poop");
      };
      // document.body.innerHTML = `<img src="${data.data[0].images.jpg.large_image_url}" alt="">`;
      // console.log("poop");
    }
  } catch (error) {
    console.log(error);
    console.log("No");
  }
}

function GetImg() {
  data.data.forEach((el) => {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <img src="${el.images.jpg.large_image_url}" alt="">`
    );
  });
}

getData(URL);
