const card = document.querySelectorAll("#card1");
const cardTitle = document.querySelectorAll(".card-title");
const input = document.getElementById("input");

input.addEventListener("input", (e) => filterCard(e.target.value));

function filterCard(searchValue) {
  card.forEach((item) => {
    if (searchValue.length > 0) {
      if (item.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
        item.classList.add("selected");
        item.classList.remove("off");
      } else {
        item.classList.add("off");
      }
    } else {
      item.classList.remove("selected");
      item.classList.remove("off");
    }
  });
}

// Show hamburger menu on phone
const hmbGetMidside = document.querySelector(".nav-midside");
document.querySelector("#hmb").onclick = () => {
  hmbGetMidside.classList.toggle("active");
};
