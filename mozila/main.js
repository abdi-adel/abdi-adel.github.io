myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/img2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

// message personnalisé

myButton = document.querySelector("button");
myHeading = document.querySelector("h1");
function setUserName() {
  myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "Mozilla est cool, " + myName;
}
if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  storedName = localStorage.getItem("nom");
  myHeading.textContent = "Mozilla est cool, " + storedName;
}
myButton.addEventListener("click", function () {
  setUserName();
});
