async function createWindow(tab) {
  let page = await fetch("news-latest.html");
  let text = await page.text();

  console.log(text);
}