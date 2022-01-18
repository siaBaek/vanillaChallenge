const h2 = document.createElement("h2");
document.body.appendChild(h2);
h2.innerText = "Hello!";
h2.style.color = "white";

function handleResize() {
  const width = window.innerWidth;
  if (width >= 1500) {
    document.body.classList.remove("bg2", "bg3");
    document.body.classList.add("bg1");
  } else if (width >= 800 && width < 1500) {
    document.body.classList.remove("bg1", "bg3");
    document.body.classList.add("bg2");
  } else if (width < 800) {
    document.body.classList.remove("bg1", "bg2");
    document.body.classList.add("bg3");
  }
}

window.addEventListener("resize", handleResize);
