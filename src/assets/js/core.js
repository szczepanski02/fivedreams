/* Preloader */
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add("fade-out");
    }, 1000);
    setTimeout(() => {
        document.getElementById('preloader').style.display = "none";
    }, 2000);
});

/* Header btn */
function btnValue() {
    var button = document.getElementById("offer-download");
    if (window.innerWidth < 768) {
        button.innerHTML = "OK";
    } else {
        button.innerHTML = "Umów spotkanie";
    }
}

function arrowValue() {
    var arrowImg = document.getElementById("arrow-value")
    if (window.innerWidth < 768) {
        arrowImg.style.float = "none";
    } else {
        arrowImg.style.float = "left";
    }

}

/* faq */
function fn1() {
    document.getElementById('faq1').style.display = "inline";
    document.getElementById('faq2').style.display = "none";
    document.getElementById('faq3').style.display = "none";
    document.getElementById('faq4').style.display = "none";

    document.getElementById('first-faq').style.color = "#ba3f96";
    document.getElementById('second-faq').style.color = "black";
    document.getElementById('third-faq').style.color = "black";
    document.getElementById('fourth-faq').style.color = "black";

    document.getElementById('first-faq').style.opacity = "1";
    document.getElementById('second-faq').style.opacity = "0.35";
    document.getElementById('third-faq').style.opacity = "0.35";
    document.getElementById('fourth-faq').style.opacity = "0.35";
}

function fn2() {
    document.getElementById('faq1').style.display = "none";
    document.getElementById('faq2').style.display = "inline";
    document.getElementById('faq3').style.display = "none";
    document.getElementById('faq4').style.display = "none";

    document.getElementById('first-faq').style.color = "black";
    document.getElementById('second-faq').style.color = "#ba3f96";
    document.getElementById('third-faq').style.color = "black";
    document.getElementById('fourth-faq').style.color = "black";

    document.getElementById('first-faq').style.opacity = "0.35";
    document.getElementById('second-faq').style.opacity = "1";
    document.getElementById('third-faq').style.opacity = "0.35";
    document.getElementById('fourth-faq').style.opacity = "0.35";
}

function fn3() {
    document.getElementById('faq1').style.display = "none";
    document.getElementById('faq2').style.display = "none";
    document.getElementById('faq3').style.display = "inline";
    document.getElementById('faq4').style.display = "none";

    document.getElementById('first-faq').style.color = "black";
    document.getElementById('second-faq').style.color = "black";
    document.getElementById('third-faq').style.color = "#ba3f96";
    document.getElementById('fourth-faq').style.color = "black";

    document.getElementById('first-faq').style.opacity = "0.35";
    document.getElementById('second-faq').style.opacity = "0.35";
    document.getElementById('third-faq').style.opacity = "1";
    document.getElementById('fourth-faq').style.opacity = "0.35";

}

function fn4() {
    document.getElementById('faq1').style.display = "none";
    document.getElementById('faq2').style.display = "none";
    document.getElementById('faq3').style.display = "none";
    document.getElementById('faq4').style.display = "inline";

    document.getElementById('first-faq').style.color = "black";
    document.getElementById('second-faq').style.color = "black";
    document.getElementById('third-faq').style.color = "black";
    document.getElementById('fourth-faq').style.color = "#ba3f96";

    document.getElementById('first-faq').style.opacity = "0.35";
    document.getElementById('second-faq').style.opacity = "0.35";
    document.getElementById('third-faq').style.opacity = "0.35";
    document.getElementById('fourth-faq').style.opacity = "1";
}

/* navbar */
$(document).ready(function() {
    $(document).click(function(event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});
$(document).ready(function() {
    $(document).scroll(function(event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

/* site generator */
function onLoad() {
    document.getElementById('igsTextContent').style.display = "none";
    document.getElementById('exampleTextContent').style.display = "none";
}

function igsClickEvent() {
    location.href = "site.html";
    localStorage.setItem("checkStatus", 1);
    setSiteContent();
}

function exampleClickEvent() {
    location.href = "site.html";
    localStorage.setItem("checkStatus", 2);
    setSiteContent();
}

function setSiteContent() {
    if (localStorage.checkStatus == 1) {
        document.getElementById('igsTextContent').style.display = "inline";
        document.title = "Infinity Growth System";
    } else if (localStorage.checkStatus == 2) {
        document.getElementById('exampleTextContent').style.display = "inline";
        document.title = "Example page";
        document.getElementById('menuGen').innerHTML = "Example Page";
        document.getElementById('mobileMenuGen').innerHTML = "Example";
    }
}

/* btn center for contact.html */
function btnCenter() {
    var centerBtn = document.getElementById("btn-center");
    if (window.innerWidth < 768) {
        centerBtn.classList.add('d-flex');
        centerBtn.classList.add('justify-content-center');
    } else {
        centerBtn.classList.remove('d-flex');
        centerBtn.classList.remove('justify-content-center');
    }
}