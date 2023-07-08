"use strict";
let mainHeading = document.getElementById("main-heading");
let fillerEle = document.querySelectorAll(".small-glass");
let mainSpanElement = document.getElementById("main-span");

let fillerFil = document.getElementById("filling");
window.addEventListener("click", function (event) {
  let fillerEle = document.querySelectorAll(".small-glass");
  const differentFiller = [
    "below-half-level",
    "half-level",
    "onebythree-level",
    "onebyfour-level",
    "twobyone-level",
    "twobytwo-level",
    "twobythree-level",
    "twobyfour-level",
  ];

  let fillerPercentage = document.getElementById("filler-percentage");
  let oneSmallGlass = document.getElementById("small-glass-One");

  for (let i = 0; i < fillerEle.length; i++) {
    let currentNode = fillerEle[i];

    if (event.target === currentNode) {
      if (currentNode.classList.contains("small-glass-filled")) {
        for (let k = i; k < fillerEle.length; k++) {
          fillerEle[k].classList.remove("small-glass-filled");
        }
      } else {
        for (let j = 0; j <= i; j++) {
          fillerEle[j].classList.add("small-glass-filled");
        }

        for (let k = i + 1; k < fillerEle.length; k++) {
          fillerEle[k].classList.remove("small-glass-filled");
        }
      }

      let nextNode = currentNode.nextSibling;
      let previousNode = currentNode.previousSibling;

      console.log("Next node:", nextNode);
      console.log("Previous node:", previousNode);
      console.log(currentNode);
    }
  }

  fillerFil.className = "filling";

  let filledIndices = Array.from(fillerEle).reduce(
    (indices, element, index) => {
      if (element.classList.contains("small-glass-filled")) {
        indices.push(index);
      }
      return indices;
    },
    []
  );

  let classToAdd = "empty";
  if (filledIndices.length > 0) {
    let lastIndex = filledIndices[filledIndices.length - 1];
    classToAdd = differentFiller[lastIndex] || "empty";
  }

  fillerFil.classList.add(classToAdd);

  for (const element of differentFiller) {
    console.log(element);
  }

  if (classToAdd === differentFiller[0]) {
    fillerPercentage.innerText = "12.5%";
    mainHeading.innerText = "1.75L";
  } else if (classToAdd === differentFiller[1]) {
    fillerPercentage.innerText = "25%";
    mainHeading.innerText = "1.5L";
  } else if (classToAdd === differentFiller[2]) {
    fillerPercentage.innerText = "37.5%";
    mainHeading.innerText = "1.25L";
  } else if (classToAdd === differentFiller[3]) {
    fillerPercentage.innerText = "50%";
    mainHeading.innerText = "1L";
    fillerPercentage.classList.add("filler-dynamic-change");
  } else if (classToAdd === differentFiller[4]) {
    fillerPercentage.innerText = "62.5%";
    mainHeading.innerText = "0.75L";
  } else if (classToAdd === differentFiller[5]) {
    fillerPercentage.innerText = "75%";
    mainHeading.innerText = "0.5L";
  } else if (classToAdd === differentFiller[6]) {
    fillerPercentage.innerText = "87.5%";
    mainHeading.innerText = "0.25L";
    mainHeading.style.fontSize = "1rem";
    mainSpanElement.style.fontSize = "0.7rem";
    if (mainHeading.style.fontSize === "1rem") {
      mainHeading.style.fontSize = "";
      mainSpanElement.innerText = "Remained";
      mainSpanElement.style.fontSize = "";
    }
  } else if (classToAdd === differentFiller[7]) {
    fillerPercentage.innerText = "100%";
    mainHeading.innerText = "";
    mainSpanElement.innerText = "";
  }
});
