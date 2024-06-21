// function search() {
//   let filter = document.getElementById("find").value.toUpperCase();
//   let item = document.querySelectorAll(".product");
//   let l = document.getElementsByTagName("h3");
//   for (var i = 0; i <= l.length; i++) {
//     let a = item[i].getElementsByTagName("h3")[0];
//     let value = a.innerHTML || a.innerText || a.textContent;
//     if (value.toUpperCase().indexOf(filter) > -1) {
//       item[i].style.display = "";
//     } else {
//       item[i].style.display = "none";
//     }
//   }
// }

// When Scrolled Then Navbar

document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (600 < window.scrollY) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (300 < window.scrollY) {
    navbar.classList.add("pre");
  } else if (600 < window.scrollY) {
    navbar.classList.remove("pre");
  } else {
    navbar.classList.remove("pre");
  }
});

// Show Input Search When Hovering
document.addEventListener("DOMContentLoaded", () => {
  const searchContainer = document.querySelector(".search-container");
  const searchInput = document.querySelector(".search-input");

  searchContainer.addEventListener("mouseover", () => {
    searchInput.style.width = "200px";
    searchInput.style.opacity = "1";
  });

  searchContainer.addEventListener("mouseout", () => {
    searchInput.style.width = "0";
    searchInput.style.opacity = "0";
  });
});

// Show hamburger menu on phone
const hmbGetMidside = document.querySelector(".nav-midside");
document.querySelector("#hmb").onclick = () => {
  hmbGetMidside.classList.toggle("active");
};

// Show up button when scrolledY is above 100vh

document.addEventListener("scroll", () => {
  const upButton = document.querySelector(".up-btn-container");

  if (window.scrollY > 700) {
    upButton.classList.add("active");
  } else {
    upButton.classList.remove("active");
  }
});
