const btnNavEl = document.querySelector(".button-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    

    if (link.classList.contains('navigation-link'))
      headerEl.classList.toggle('nav-open');
  });
});
