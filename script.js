var currentPath = window.location.pathname;
var currentPage = currentPath.split("/").pop();
var spanArray = document.getElementsByClassName("progress");
var imgContainerArray = document.getElementsByClassName("img_container");

if (currentPage == "index.html") {
  for (let i = 0; i < spanArray.length; i++) {
    const currentSpan = spanArray[i];
    if (currentSpan.className == "progress location") {
      currentSpan.classList.add("active");
      break;
    }
  }

  for (let i = 0; i < imgContainerArray.length; i++) {
    const currentImgContainer = imgContainerArray[i];
    if (currentImgContainer.className == "img_container location") {
      currentImgContainer.classList.add("active");
      currentImgContainer.children[0].classList.add("active");
      setInterval(() => {
        currentImgContainer.children[0].src =
          "icons/Icon=Location, Color=White.png";
      }, 2000);
      break;
    }
  }
}

if (currentPage == "direction.html") {
  for (let i = 0; i < spanArray.length; i++) {
    const currentSpan = spanArray[i];
    if (currentSpan.className == "progress direction") {
      setInterval(() => {
        currentSpan.classList.add("active");
      }, 2000);
      break;
    } else {
      currentSpan.classList.add("completed");
    }
  }

  for (let i = 0; i < imgContainerArray.length; i++) {
    const currentImgContainer = imgContainerArray[i];
    if (currentImgContainer.className == "img_container direction") {
      setInterval(() => {
        currentImgContainer.classList.add("active");
        currentImgContainer.children[0].classList.add("active");
      }, 2000);
      setInterval(() => {
        currentImgContainer.children[0].src =
          "icons/Icon=Direction, Color=White.png";
      }, 4000);
      break;
    } else {
      currentImgContainer.classList.add("completed");
      currentImgContainer.children[0].classList.add("completed");
      setInterval(() => {
        currentImgContainer.children[0].src =
          "icons/Icon=" +
          currentImgContainer.children[0].alt +
          ", Color=Primary.png";
      }, 2000);
    }
  }
}
