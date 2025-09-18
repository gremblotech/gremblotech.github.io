const win = document.createElement("div");
document.querySelector(".desktop").appendChild(win);
win.innerHTML = "";

function makeWin(content) {
  document.querySelector(".desktop").appendChild(win);

  win.classList.add("window-container");
  win.innerHTML = `
    <div class="title-bar">
      <div class="title-bar-title">
        <img src="images/${content}.ico" />
        <p>${content}</p>
      </div>
      <div class="title-bar-right">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <embed type="text/html" />
  `;
}

function makeTab(content) {
  if (win.innerHTML === "") makeWin(content);

  if (content === "News") {
    win.querySelector("embed").src = "news/latest.html";
  }
}

function deleteWin() {
  win.innerHTML = "";
}

document.querySelectorAll(".desktop-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    makeTab(`${icon.querySelector("p").innerHTML}`);
  });
});
