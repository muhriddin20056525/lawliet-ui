// ======================= Get HTMl Elements
const navList = document.querySelector(".nav-list");
const openNavListBtn = document.querySelector(".fa-bars");
const closeNavListBtn = document.querySelector(".fa-xmark");

// ======================= Open Mobile Nav Menu
openNavListBtn.addEventListener("click", () => navList.classList.add("active"));

// ======================= Close Mobile Nav Menu
closeNavListBtn.addEventListener("click", () =>
  navList.classList.remove("active")
);
