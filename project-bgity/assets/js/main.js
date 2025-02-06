
function hamburgerMenu() {
    const navList = document.querySelector(".nav-list");
    const hamburgerBtn = document.querySelector(".hamburger__icon");
    const bodyWrapper = document.querySelector("body");
    
    hamburgerBtn.addEventListener("click", () => {
        bodyWrapper.classList.toggle("body-overflow")
        hamburgerBtn.classList.toggle("active");
        navList.classList.toggle("active");
    })
    
    navList.addEventListener("click", (e) => {
        if (e.target.classList.contains("nav-list__link")) {
            bodyWrapper.classList.remove("body-overflow")
            navList.classList.remove("active");
            hamburgerBtn.classList.remove("active");
        }
    })
    }
    
hamburgerMenu();