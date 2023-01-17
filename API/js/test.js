for (const a in URLEParr) {
  setInterval(async () => {
    const epout = await fetch(`${URLEParr[a]}`);
    const epdata = await epout.json();

    // console.log(epdata);
  }, 400);

  const epout = await fetch(`${URLEParr[a]}`);
  const epdata = await epout.json();
  console.log(epdata);
}
