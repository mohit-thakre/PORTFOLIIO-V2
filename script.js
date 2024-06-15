window.addEventListener("load", function () {
  var preloader = document.getElementById("col-pre");
  preloader.style.display = "none";
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.refresh();

gsap.to(".page1 .main div ", {
  x: 500,
  opacity: 0,
  color: "blue",
  stagger: 1,
  color: "red",
  scrollTrigger: {
    trigger: ".page1 .main",
    scroller: "body",
    scrub: 1,
    start: "top 10%",
    pin: true,
    // markers: true,
  },
});
gsap.to(".page1 .main h1 ", {
  x: -500,
  opacity: 0,
  stagger: 1,
  color: "yellow",
  scrollTrigger: {
    trigger: ".page1 .main",
    scroller: "body",
    scrub: 1,
    start: "top 10%",

    // markers: true,
  },
});
gsap.to(".page1 .main h3 ", {
  x: 500,
  opacity: 0,
  stagger: 1,
  color: "blue",
  scrollTrigger: {
    trigger: ".page1 .main",
    scroller: "body",
    scrub: 1,
    start: "top 10%",

    // markers: true,
  },
});

gsap.to(".main div p span", {
  opacity: 0,
  duration: 0.4,
  yoyo: true,
  repeat: -1,
});
gsap.to(".page2 .name-div h1", {
  x: function (index, target) {
    return -window.innerWidth - target.offsetWidth;
  },
  ease: "none",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    scrub: 1,
    repeat: -1,
    yoyo: 1,
    // markers: true,
  },
});

gsap.from(".page2 .intro-div h1:nth-child(1)", {
  opacity: 0,
  y: 10,

  scrollTrigger: {
    trigger: ".page2 .intro-div h1:nth-child(1)",
    scroller: "body",
    // markers: true,
    start: "top 70%",

    end: "top 50%",
  },
});
gsap.from(".page2 .intro-div h1:nth-child(2)", {
  duration: 1,
  y: 30,

  opacity: 0,
  scrollTrigger: {
    trigger: ".page2 .intro-div h1:nth-child(2)",
    scroller: "body",
    // markers: true,
    start: "top 65%",
  },
});
gsap.from(".page2 .intro-div h1:nth-child(3)", {
  opacity: 0,
  y: 40,

  duration: 1,
  scrollTrigger: {
    trigger: ".page2 .intro-div h1:nth-child(3)",
    scroller: "body",
    // markers: true,
    start: "top 60%",
  },
});
gsap.set(".page2 .name-div1 h1", {
  x: -window.innerWidth,
});
gsap.to(".page2 .name-div1 h1", {
  x: 0,
  scrollTrigger: {
    trigger: ".page2 .name-div1 h1",
    scroller: "body",
    scrub: 1,
    repeat: -1,
    yoyo: 1,
    pin: true,
    start: "top 100%",
    // markers: true,
  },
});
gsap.to(".page2 .name-div h1 span", {
  rotate: 180,
  scrollTrigger: {
    trigger: ".page2 .name-div h1 span",
    scroller: "body",
    onUpdate: (self) => {
      const scrollDirection = self.direction;
      const rotation = scrollDirection === 1 ? 180 : 0;
      gsap.to(".page2 .name-div h1 span", { rotate: rotation, duration: 0.5 }); // Adjust duration as needed
    },
  },
});

gsap.from(".page2 .profection a", {
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page2 .profection a",
    scroller: "body",
    start: "top 60%",
  },
});
var split = new SplitType(".h3");
gsap.from(" .h3 .char", {
  y: 20,
  opacity: 0,
  stagger: 0.03,
  scrollTrigger: {
    trigger: ".h3",
    scroller: "body",
    // markers: true,
    start: "top 50%",
  },
});
var split1 = new SplitType(".sub_h5");
gsap.from(".sub_h5 .char", {
  y: 10,
  opacity: 0,
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".sub_h5",
    scroller: "body",
    // markers: true,
    start: "top 60%",
  },
});
gsap.from(".elem-div img", {
  scale: 0,
  stagger: 0.3,
  y: 100,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".elem-div img",
    scroller: "body",
    start: "top 60%",
    // markers: true,
  },
});
var split2 = new SplitType(".sub_p4");
gsap.from(".page4 .char", {
  y: 20,
  opacity: 0,
  stagger: 0.03,
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    start: "top 60%",
    end: "top 0%",
    // markers: true,
  },
});
var split2 = new SplitType(".sub_p41");
gsap.from(".page4 .sub_p41 .char", {
  y: 20,
  opacity: 0,
  stagger: 0.03,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    start: "top 60%",
    end: "top 0%",
    //markers: true,
  },
});

gsap.utils.toArray(".container").forEach((container) => {
  gsap.from(container, {
    x: 400,
    duration: 0.6,
    opacity: 0,
    scrollTrigger: {
      trigger: container,
      scroller: "body",
      start: "top 80%",
      end: "top 71%",
    },
  });
});

gsap.from(".page4 a img", {
  x: 30,
  repeat: -1,
  duration: 1,
  yoyo: true,
});
var split5 = new SplitType(".sub_p5");
gsap.from(".page5 .sub_p5 .char", {
  y: 20,
  opacity: 0,
  stagger: 0.03,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "body",
    start: "top 60%",
    end: "top 0%",
    //markers: true,
  },
});

gsap.from(".page5 .works a", {
  opacity: 0,
  y: -100,
  transformOrigin: "left top",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "body",
    start: "top 60%",
    // markers: true,
  },
});

gsap.from(".col-split span", {
  y: 20,
  stagger: 0.08,
  repeat: -1,
  pin: true,
  yoyo: true,
  opacity: 0,
});

gsap.to(".navlogo", {
  rotate: -90,
  scrollTrigger: {
    trigger: ".navlogo",
    scroller: "body",
    start: "top -15%",

    scrub: 3,
  },
});
gsap.to(".navlogo span", {
  color: "red",
  scrollTrigger: {
    trigger: ".navlogo",
    scroller: "body",
    start: "top -15%",
    end: "top -400%",
    scrub: 3,
  },
});

gsap.from(".scroller div", {
  y: 40,
  repeat: -1,
  yoyo: true,
});

gsap.from(".page6 .wrap h1 span", {
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page6",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from(".page6 .btn-wrap span ", {
  opacity: 0,
  x: -50,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".page6 .btn-wrap span a",
    scroller: "body",
    start: "top 70%",
  },
});
// document.body.style.overflow = "hidden";

// function call() {
//   document.body.style.overflow = "auto";
//   const t = gsap.timeline();

gsap.from(".page1 .main div ", {
  x: 500,
  duration: 1,
  opacity: 1,
  color: "blue",
  stagger: 1,
  color: "red",
});
gsap.from(".page1 .main h1 ", {
  x: -500,
  opacity: 1,
  duration: 1,
  stagger: 1,
  color: "yellow",
});
gsap.from(".page1 .main h3 ", {
  x: 500,
  opacity: 1,
  duration: 1,
  stagger: 1,
  color: "blue",
});
// }
// setTimeout(() => {
//   call();
// }, 1000);

if (window.innerWidth < 600) {
  alert(
    "🚨 Attention! 🚨\n\n" +
      "This website contains interactive animations optimized for desktop viewing. For the best experience, we recommend accessing it from a desktop or larger screen device. Thank you for visiting!"
  );
}

var main = document.querySelector("#content");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (e) {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
});

var inp = document.getElementById("input");
var dark = document.getElementById("toggle");
var dark1 = document.getElementById("toggle1");

inp.addEventListener("change", function () {
  if (inp.checked) {
    dark.setAttribute("href", "style.css");
    dark1.setAttribute("href", "./home/frontpage.css");
  } else {
    dark.setAttribute("href", "style1.css");
    dark1.setAttribute("href", "./home/frontpage1.css");
  }
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

const tilt = $(".js-tilt").tilt({
  scale: 1.2,
});
