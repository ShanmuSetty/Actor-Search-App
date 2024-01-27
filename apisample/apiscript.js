const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show_more");
let inputData = "";
let page = 1;

async function searchImages() {
  inputData = inputE1.value;
  console.log(inputData);
  const url = `https://imdb146.p.rapidapi.com/v1/find/?query=${inputData}/`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "041b77b6c7msh12ca5288d5bd401p1ee3e3jsn0c11ded684a1",
      "X-RapidAPI-Host": "imdb146.p.rapidapi.com",
    },
  };

  let p = fetch(url, options);
  const response = await p;
  console.log("Response Recieved");
  const data = await response.json();
  console.log(data);
  if (page === 1) {
    searchResults.innerHTML = "";
  }
  if (inputData != "") {
    for (let i = 0; i < 5; i++) {
      //   const division = document.createElement("div");
      //   const newE = document.createElement("img");
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("search-result");
      const image = document.createElement("img");
      console.log(imageWrapper);
      //   newE.classList.add("search-result");
      image.src = data.nameResults.results[i].avatarImageModel.url;
      imageWrapper.appendChild(image);
      searchResults.appendChild(imageWrapper);
      //   document.body.appendChild(newE);
    }
  }
  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
}
searchImages();
formE1.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener("click", () => {
  searchImages();
});
