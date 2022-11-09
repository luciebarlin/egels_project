//start the slideshow at the first image
let i = 0;
//create an empty array for the images to change into
let image = [
    "http://www.egelbescherming.nl/wp-content/uploads/2015/04/header-1-darktop.jpg",
    "http://www.egelbescherming.nl/wp-content/uploads/2015/04/header-4-darktop1.jpg",
    "http://www.egelbescherming.nl/wp-content/uploads/2015/04/header-2-darktop1.jpg",
    "http://www.egelbescherming.nl/wp-content/uploads/2015/04/header-6-darktop.jpg"
];

//set the timer for each slide in ms
let slideTime = 2000;

//access all elements in hero
const hero = document.querySelector(".hero")
const headerOne = document.querySelector("h1");
const headerTwo = document.querySelector("h2");
const firstBtn = document.querySelector(".first-btn");


//the function that the 'setTimeout' function will change
const changePicture = () => {
    //go into the background image of the hero
    hero.style.backgroundImage = "url(" + image[i] + ")";

    // the array starts from 0
    if (i < image.length - 1) {
        i++;
    } else {
        //i is more than image.length (4)
        i = 0;
    }
    
    if (i === 1) {
        headerOne.innerHTML = "Welkom";
        headerTwo.innerHTML = "bij Egelbescherming Nederland";
        firstBtn.style.display = "none";
    } else if (i === 2) {
        headerOne.innerHTML = "Steun ons!";
        headerTwo.innerHTML = "Elke bijdrage helpt!";
        firstBtn.style.display = "block";
    } else if (i === 0 || i === 3) {
        headerOne.innerHTML = "";
        headerTwo.innerHTML = "";
        firstBtn.style.display = "none";
    };


}
//start the slideshow
setInterval(changePicture, slideTime);


//make the header pink and fixed on scroll

const headerNav = document.getElementById("header");
const headerHeight = document.getElementById("header").style.height;
const navLogo = document.querySelector(".logo");
const jsMenuList = document.querySelectorAll(".js-menu-list");

const stickyPink = () => {
    if (window.pageYOffset > headerHeight) {
        headerNav.classList.add("sticky");
        navLogo.classList.remove("hidden");

        jsMenuList.forEach(listItem => {
            listItem.classList.add("sticky-list");
        });
      } else {
        headerNav.classList.remove("sticky");
        navLogo.classList.add("hidden");

        jsMenuList.forEach(listItem => {
            listItem.classList.remove("sticky-list");
        });
      }
};

window.addEventListener("scroll", stickyPink);

//dropdown menu on hover
// const menuBtn = document.querySelector(".js-menu-btn");
// const menuList = document.querySelector(".js-menu-list");


// const showDropdown = () => {
//     console.log("hello");
//     menuList.classList.toggle("hide-menu");

// }

// menuBtn.addEventListener("click", showDropdown);

//accordion

const menuBtns = document.querySelectorAll(".js-menu-btn");
const menuList = document.querySelectorAll(".js-menu-list");


// for (i = 0; i < menuBtn.length; i++) {
menuBtns.forEach(menuBtnItem => {
    //add the event listener to each clickable menu button
    menuBtnItem.addEventListener("click", function() {
        //returns the data-target value
        //const hideMenuElArr = document.querySelectorAll(".hide-menu");
        const targetStr = event.target.dataset.target;
        //returns target element from target string
        const target = document.querySelector('#' + targetStr);
        //toggles the hide-menu class of the selected element

        if (target.classList.contains("hide-menu")) {
            menuList.forEach(menuListItem => {
                menuListItem.classList.add("hide-menu");
            });
            target.classList.remove("hide-menu");
        } else {
            target.classList.add("hide-menu");
        }


    })
});
// } 

menuBtns.forEach(menuBtnItem => {
    menuBtnItem.addEventListener("click", function() {
        if (!menuBtnItem.classList.contains("is-pink")) {
            menuBtns.forEach(menuBtnItem => {
                menuBtnItem.classList.remove("is-pink");
            });
            menuBtnItem.classList.add("is-pink");
        } else {
            menuBtnItem.classList.remove("is-pink");
        }

    })
});

//close all menus on outside click



//--------------------------------------------------



//donation popup 

// const donationPopup = document.querySelector(".donation-popup");
// const popupListener = document.querySelector(".popup-listener");

// const showPopup = (event) => {
//     console.log(event.target);
//     console.log("hedgie");
//   donationPopup.classList.toggle("show");
// }

// popupListener.addEventListener("click", showPopup);

//modal 

const modal = document.getElementById("myModal");
const popupListener = document.querySelector(".popup-listener");
const span = document.getElementsByClassName("close")[0];

popupListener.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

//donation message 
//on donation amount: when number is entered and dank u clicked, 
//appears text that said your (amount) donation was received!
const donationMsg = document.querySelector(".donation-message");
const donationGiven = document.querySelector(".donation-amount");
const dankU = document.getElementById("dank-u");


const showDonationMsg = () => {
    let donationValue = donationGiven.value;
    
    console.log(typeof donationValue);
    
    let donationValueNumber = Number(donationValue);
    console.log(donationValueNumber);

    if (isNaN(donationValueNumber)) {
        donationMsg.innerHTML = "Please enter a valid number";
    } else {
        donationMsg.innerHTML = `Your €${donationValueNumber} was received!`;
    }

};

dankU.addEventListener("click", showDonationMsg);