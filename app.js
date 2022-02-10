const navbarMenuBtn = document.querySelector(".navbar-menu-btn-doc");
const navbarMenuList = document.querySelector(".navbar-menu-list-doc");

navbarMenuBtn.addEventListener("click", () => {
    if ((navbarMenuList.style.display === "block")) {
      navbarMenuList.style.display = "none";
    }
    else{
      navbarMenuList.style.display = "block";
    }
  });