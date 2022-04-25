const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

const btnMenuEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnMenuEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//smooth scrolling animation
const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav--open");
  });
});

//sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting) document.body.classList.remove("sticky");
    if (ent.isIntersecting === false) document.body.classList.add("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
