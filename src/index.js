function submitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input");
  let cityElement = document.querySelector("#app-city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search");
searchFormElement.addEventListener("submit", submitSearch);
