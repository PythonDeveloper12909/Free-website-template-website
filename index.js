let menu = document.querySelector(".menu");
let menuDiv = document.createElement("div");
let cross = document.createElement("span");
let home = document.createElement("p");
let about = document.createElement("p");
let contact = document.createElement("p");
let sign = document.createElement("button");
let div = document.createElement("div");
div.append(home, about, contact, sign);
menuDiv.append(div);
[home, about, contact].forEach((el) => {
  el.classList.add("menu_p");
  el.style.fontSize = "clamp(2rem, 5vw, 3rem)";
  el.style.fontFamily = "Inter";
  el.style.weight = "300";
});
sign.textContent = "Sign Up";
sign.style.fontSize = "clamp(1.1rem,5vw,3rem)";
sign.style.fontFamily = "Poppins";
sign.style.fontWeight = "300";
sign.style.backgroundColor = "rgb(0, 55, 255)";
sign.style.color = "white";
sign.style.borderRadius = "40px";
sign.style.padding = "5px";
sign.style.textAlign = "center";
sign.style.paddingLeft = "30px";
sign.style.paddingRight = "30px";
sign.style.cursor = "pointer";
sign.style.width = "clamp(1.3rem,25vw,53rem)";
sign.style.marginTop = "2rem";
div.style.marginTop = "20%";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.gap = "2rem";
div.classList.add("menu_div");
menuDiv.prepend(cross);
home.textContent = "Home";
about.textContent = "About";
contact.textContent = "Contact";
cross.textContent = "✖";
cross.style.zIndex = "1001";
cross.style.fontSize = "3rem";
cross.style.position = "fixed";
cross.style.left = "90%";
menuDiv.style.position = "fixed";
menuDiv.style.top = "0";
menuDiv.style.right = "0";
menuDiv.style.width = "40%";
menuDiv.style.height = "100vh";
menuDiv.style.backgroundColor = "rgb(250, 250, 250)";
menuDiv.style.borderRadius = "20px 0 0 20px";
menuDiv.style.overflowY = "auto";
menuDiv.style.fontSize = "4rem";
menuDiv.style.display = "none";
menuDiv.style.zIndex = "1000";

let isMenuOpen = false;

menu.addEventListener("click", (event) => {
  if (!isMenuOpen) {
    menuDiv.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.prepend(cross);
    document.body.appendChild(menuDiv);
    isMenuOpen = true;
  }
});

cross.addEventListener("click", (event) => {
  if (isMenuOpen) {
    menuDiv.style.display = "none";
    document.body.style.overflow = "";
    document.body.removeChild(cross);
    document.body.removeChild(menuDiv);
    isMenuOpen = false;
  }
});
