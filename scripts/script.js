"use strict";

let fillerEle = document.querySelectorAll(".small-glass");

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
});
