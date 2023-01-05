import "../style/style.css";
const URL = `https://api.jikan.moe/v4/anime?q=Naruto&sfw`;
// const URL = `https://api.jikan.moe/v4/naruto/{id}/pictures`;
// const URL = `https://api.jikan.moe/v4/anime?q=${anime}&sfw`;

async function getData(URL) {
  try {
    const aniout = await fetch(URL);
    if (aniout.status <= 199 || aniout.status >= 300) {
      throw new Error(aniout);
    } else {
      const data = await aniout.json();
      document.body.textContent = data.content;
      console.log(data.titles);
    }
  } catch (error) {
    console.log(error);
    console.log("No");
  }
}

getData(URL);
