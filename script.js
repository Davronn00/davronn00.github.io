// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Sticky nav state
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu toggle
const toggle = document.querySelector(".nav__toggle");
const mobile = document.getElementById("mobileNav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  if (open) {
    mobile.classList.remove("is-open");
    mobile.hidden = true;
  } else {
    mobile.hidden = false;
    requestAnimationFrame(() => mobile.classList.add("is-open"));
  }
});
mobile.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    toggle.setAttribute("aria-expanded", "false");
    mobile.classList.remove("is-open");
    mobile.hidden = true;
  }
});

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
