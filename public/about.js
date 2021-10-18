// ********** Counter **********
let counterContainer = document.querySelector(".counter-container");
const counter = document.querySelectorAll(".counter");
const divider = 300;

const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      counter.forEach((element) => {
        function updateCount() {
          const target = +element.getAttribute("data-target");
          const count = +element.innerText;
          const increment = target / divider;

          if (count < target) {
            element.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 7);
          } else {
            element.innerText = target;
          }
        }
        updateCount();
      });
    } else {
      return;
    }
  });
};

const observer = new IntersectionObserver(callback, {
  threshold: 0.2,
});

observer.observe(counterContainer);

// ********** Glide JS Init (Testimonials) **********
const auto = {
  type: "carousel",
  autoplay: 10000,
  perView: 1,
  gap: 0,
  animationDuration: 800,
  animationTimingFunc: "linear",
};
new Glide(".glide", auto).mount();

// ********** Accordion **********
const accordionTab = document.querySelectorAll(".accordion-tab");
const accordionText = document.querySelectorAll(".accordion-text");
const firstTab = accordionText[0];

firstTab.style.height = firstTab.scrollHeight + "px";

for (let i = 0; i < accordionTab.length; i++) {
  let tab = accordionTab[i];
  let text = accordionText[i];

  tab.addEventListener("click", function () {
    for (let i = 0; i < accordionText.length; i++) {
      let text = accordionText[i];
      let tab = accordionTab[i];
      text.style.height = 0;
      tab.classList.remove("is-open");
    }
    if (text.offsetHeight === 0) {
      text.style.height = text.scrollHeight + "px";
      tab.classList.add("is-open");
    }
  });
}
