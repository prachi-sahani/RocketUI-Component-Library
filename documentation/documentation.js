const scrollToTop = document.querySelector(".scroll-to-top");
const componentsDiv = document.querySelector(".components");
const sidenavMenuBtn = document.querySelector(".sidenav-menu-btn");
const navbarMenuBtn = document.querySelector(".navbar-menu-btn-doc");
const sidenav = document.querySelector(".sidenav");
const navbarMenuList = document.querySelector(".navbar-menu-list-doc");
const dialogOpen = document.querySelector(".dialog-open");
const dialogWindow = document.querySelector(".dialog-window");
const dialogClose = document.querySelector(".dialog-close");
const snackbarOpenBL = document.querySelector(".snackbar-open-bl");
const snackbarBL = document.querySelector(".snackbar-bottom-left");
const snackbarClose = document.querySelector(".snackbar-close");


// show scroll to top button only when user scrolls more than 20px in div
componentsDiv.onscroll = () => showScrollToTop();

const showScrollToTop = () => {
  if (componentsDiv.scrollTop > 20) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
};

scrollToTop.addEventListener("click", () => (componentsDiv.scrollTop = 0));

sidenavMenuBtn.addEventListener("click", () => {
  if ((sidenav.style.display === "block")) {
    sidenav.style.display = "none";
    sidenavMenuBtn.style.transform = "rotate(360deg)";
  }
  else{
    sidenav.style.display = "block";
    sidenavMenuBtn.style.transform = "rotate(180deg)";
  }
});

navbarMenuBtn.addEventListener("click", () => {
  if ((navbarMenuList.style.display === "block")) {
    navbarMenuList.style.display = "none";
  }
  else{
    navbarMenuList.style.display = "block";
  }
});

dialogOpen.addEventListener('click', () => dialogWindow.style.display = 'flex')
dialogClose.addEventListener('click', () => dialogWindow.style.display = 'none')
snackbarOpenBL.addEventListener('click', () => snackbarBL.style.display = 'flex')
snackbarClose.addEventListener('click', () => snackbarBL.style.display = 'none')
