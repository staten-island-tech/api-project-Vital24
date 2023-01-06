const Base = require("myanimelist-api/lib/base");

const configurations = {
  auth: "auth",
  anime: "anime",
  forum: "forum",
  manga: "manga",
  user: "user",
};

Object.keys(configurations).forEach((prop) => {
  Object.defineProperty(Base.prototype, prop, {
    configurable: true,
    get: function get() {
      const resource = require(`./lib/${configurations[prop]}`);

      return Object.defineProperty(this, prop, {
        value: new resource(this),
      })[prop];
    },
    set: function set(value) {
      Object.defineProperty(this, prop, { value })[prop];
    },
  });
});

module.exports = Base;

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
