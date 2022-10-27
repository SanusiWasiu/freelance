var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("customer-profile");

    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }

    x[slideIndex-1].style.display = "block";  
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "container") {
      x.className += "-responsive";
    } else {
      x.className = "container";
    }
}

function scrollFunction1() {
    let e = document.getElementById("about-me");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
}

function scrollFunction2() {
    let e = document.getElementById("reviews");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
}