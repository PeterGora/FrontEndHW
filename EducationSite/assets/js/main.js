let navigation = document.getElementById("nav");
window.addEventListener("scroll", function () {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 0) {
        navigation.classList.add("sticky")
    }
    else {
        navigation.classList.remove("sticky")
    }
})


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


AOS.init();


let scrollUp = document.getElementById("scrollUp");
window.addEventListener("scroll", function () {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 0) {
        scrollUp.classList.add("sticky")
    }
    else {
        scrollUp.classList.remove("sticky")
    }
})