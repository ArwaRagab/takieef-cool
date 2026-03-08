// navbar
let mobileMenu = document.querySelector(".mobile-menu");  
let navLinks = document.querySelector(".nav-links");
let icon = document.querySelector(".mobile-menu i");
let links = document.querySelectorAll(".nav-links a");
mobileMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  // نغير شكل الأيقونة
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});
// يقفل المنيو لما أضغط على لينك
links.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    // يرجع الأيقونة Bars
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});
// services cards
let cards = document.querySelectorAll(".service-card");
let observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.classList.add("show");
    }else{
        entry.target.classList.remove("show");
    }
    });
},{
    threshold:0.3
});
cards.forEach(card=>{
    observer.observe(card);
});
// statistics
let numbers = document.querySelectorAll(".number");
let statsSection = document.querySelector(".stats");
function startCount(el) {
    let target = +el.dataset.target;
    let count = 0;
    let increment = target / 150;
    let counter = setInterval(() => {
        count += increment;
        if (count >= target) {
            if (target == 4.9) {
                el.innerText = target + "/5";
            }else if(target == 98){
                el.innerText = target + "%";
            } else {
                el.innerText = target + "+";
            }
            clearInterval(counter);
        } else {
            el.innerText = Math.floor(count);
        }
    }, 10);
}
let observers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            numbers.forEach(num => {
                num.innerText = "0"; // يرجعه صفر
                startCount(num);
            });
        }
    });
}, {
    threshold: 0.5
});
observers.observe(statsSection);
// faq
function toggleFaq(element) {
    element.parentElement.classList.toggle('active');
}