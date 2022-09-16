const mainMenu = document.querySelector("header");
const menuButton = document.querySelector("#menu_button");

menuButton.addEventListener("click", () =>{
    const menuVisible = mainMenu.getAttribute('menu-visible');

    if (menuVisible === "false"){
        mainMenu.setAttribute("menu-visible", true);
        document.querySelector("#menu_button").innerHTML=`<i class="fa-solid fa-arrow-left"></i>`;

    }else{
        mainMenu.setAttribute("menu-visible", false);
        document.querySelector("#menu_button").innerHTML=`<span> Menu</span>`;
    }


});

const navMain = document.querySelector("#navbar");
const navHamburger = document.querySelector("#hamburger");

navHamburger.addEventListener("click", () =>{
    const navVisible = navMain.getAttribute('navbar-visible');

    if (navVisible === "false"){
        navMain.setAttribute("navbar-visible", true);

    }else{
        navMain.setAttribute("navbar-visible", false);
    }


});