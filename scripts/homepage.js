const win = document.createElement("div");
document.querySelector(".desktop").appendChild(win);
win.innerHTML = "";

let isMinimized;

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
        <button onclick="deleteWin();"></button>
        <button></button>
        <button onclick="minimizeWin();"></button>
      </div>
    </div>
    <embed type="text/html" />
  `;
}

function makeTab(content) {
  if (win.innerHTML === "") makeWin(content);

  if (isMinimized) unminimizeWin();

  if (content === "News") {
    win.querySelector("embed").src = "news/latest.html";
  }
}

function deleteWin() {
  win.innerHTML = "";
  win.classList.remove("window-container");
}

function minimizeWin() {
  win.style.top = "100vh";
  isMinimized = true;
}

function unminimizeWin() {
  win.style.top = "min(160px, 20%)";
}

document.querySelectorAll(".desktop-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    makeTab(`${icon.querySelector("p").innerHTML}`);
  });
});
