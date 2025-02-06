
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
        console.log(e.target)
        if (e.target.classList.contains("header-select option")) {
            bodyWrapper.classList.remove("body-overflow")
            navList.classList.remove("active");
            hamburgerBtn.classList.remove("active");
        }
    })

    select.addEventListener('change', (e) => {
        bodyWrapper.classList.remove('body-overflow');
        navList.classList.remove('active');
        hamburgerBtn.classList.remove('active');
    });
}

const korpusMap = {
    1: "./assets/images/map-1.png",
    2: "./assets/images/map-2.png"
}

const floors = {
    1: "./assets/images/map-1.png",
    2: "./assets/images/korpus1-floor2.png",
    3: "./assets/images/korpus1-floor3.png",
    4: "./assets/images/korpus1-floor4.png",
}

const map = document.querySelector(".map-image");
const select = document.querySelector(".header-select");
const btns = document.querySelectorAll(".button-floor");

function changeCorpus() {
    select.addEventListener("change", (e) => {
        let target = e.target.value;
        switch(target) {
            case "1":
                map.src = korpusMap[1];
                    btns.forEach(item => {
                    item.classList.remove("btn-active");
                    if(item.value === "1") {
                        item.classList.add("btn-active")
                    }
                })
                break;
            case "2":
                map.src = korpusMap[2];
                btns.forEach(item => {
                    item.classList.remove("btn-active");
                    if(item.value === "1") {
                        item.classList.add("btn-active")
                    }
                })
                break;
        }
    })
}

function checkCurrentCorpus(target) {
    let corpus = 0;
        if (target === "1") {
            corpus = 1;
        } else {
            corpus = 2;
        }
    return corpus;
}

function changeFloors() {
    btns.forEach(item => {
        item.addEventListener("click", (e) => {
            btns.forEach(btn => btn.classList.remove("btn-active"));
            let target = e.target;
            const select = document.querySelector(".header-select");
            const currentCorpus = checkCurrentCorpus(select.value);
            item.classList.add("btn-active")
            if (currentCorpus === 1) {
                switch(target.value) {
                    case "1":
                    map.src = floors[1];
                    break;
                    case "2":
                    map.src = floors[2];
                    break;
                    case "3":
                    map.src = floors[3];
                    break;
                    case "4":
                    map.src = floors[4];
                    break;
        }
            }
        })
    })
}


changeCorpus();
changeFloors();

hamburgerMenu();