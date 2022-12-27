const actionsCol = document.querySelector(".actions");
const infoCol = document.querySelector(".info");

const spacer = document.createElement("div");
spacer.classList.add("spacer");

const pElement = document.createElement("p");

const writeToDoc = () => {
  const userInput = prompt("what do you want to write?");
  if (!userInput) return;

  let userInputElement = document.querySelector("p#user-input");
  if (!userInputElement) {
    userInputElement = pElement.cloneNode(false);
    userInputElement.id = "user-input";
  }

  userInputElement.innerText = userInput;
  actionsCol.insertBefore(userInputElement, actionsCol.children[3]);
  console.log(
    "🚀 ~ file: index.js:18 ~ writeToDoc ~ actionsCol.childNodes",
    actionsCol.childNodes
  );
};

const toggleImg = () => {
  const hideClass = "hide-img";
  const showClass = "show-img";
  const buttonController = document.querySelector("#image-controller");
  const img = document.querySelector("img");
  if (img.classList.contains(hideClass)) {
    buttonController.innerText = "hide image";
    img.classList.remove(hideClass);
    img.classList.add(showClass);
    return;
  }
  if (img.classList.contains(showClass)) {
    buttonController.innerText = "show image";
    img.classList.remove(showClass);
    img.classList.add(hideClass);
    return;
  }
};

disableCombo = () => {
  const selectElement = document.querySelector("select");
  const buttonController = document.querySelector("#combobox-controller");
  selectElement.disabled = !selectElement.disabled;
  if (selectElement.disabled) buttonController.innerText = "Enable combo box";
  else buttonController.innerText = "Disable combo box";
};

createBoxes = () => {
  let userInput = prompt("How many boxes do you want to create?");
  if (isNaN(userInput)) {
    alert("input must be a number");
    return;
  }
  while (userInput >= 1) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "new text box";
    actionsCol.insertBefore(input, actionsCol.lastElementChild);
    userInput -= 1;
  }
};

removeOption = () => {
  let userInput = prompt("what option do you want to remove?");
  const optionElement = document.querySelector(`option[value="${userInput}"]`);
  if (!optionElement) {
    alert("no option available with that value");
    return;
  }
  optionElement.remove();
};

const lastLink = pElement.cloneNode(false);
lastLink.innerText = `last link on the page: ${
  document.links[document.links.length - 1]
}`;

const modifiedDate = pElement.cloneNode(false);
modifiedDate.innerText = `time modified: ${document.lastModified}`;

infoCol.insertBefore(lastLink, infoCol.lastElementChild);
infoCol.insertBefore(modifiedDate, infoCol.lastElementChild);
