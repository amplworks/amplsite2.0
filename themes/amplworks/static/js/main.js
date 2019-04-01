// var back = document.querySelector(".background"),
//   navLine1 = document.querySelector(".nav-line1"),
//   navLine2 = document.querySelector(".nav-line2"),
//   navLine3 = document.querySelector(".nav-line3");
//
// function lightsOn() {
//   back.classList.contains("lightsOn") || (back.classList.add("lightsOn"),
//     navLine1.style.backgroundColor = "#191919",
//     navLine2.style.backgroundColor = "#191919",
//     navLine3.style.backgroundColor = "#191919")
// }
// setTimeout(function() {
//     lightsOn()
//   }, 3e3),
//   document.addEventListener("click", function() {
//     lightsOn()
//   }, {
//     once: !0
//   }),
//   document.addEventListener("scroll", function() {
//     lightsOn()
//   }, {
//     once: !0
//   });
var toggleNav = document.querySelector(".nav-wrap")
navList = document.querySelectorAll(".navitem")
HTML = document.querySelector("html");

function navAction() {
  HTML.classList.toggle("navopen")
};
navList.forEach(function(e) {
  e.addEventListener("click", function() {
    HTML.classList.remove("navopen")
  });
});
toggleNav.addEventListener("click", function() {
  navAction()
});
//   window.onload = function() {
//     var e = document.getElementsByTagName("video");
//     for (let t = 0; t < e.length; t++)
//       e[t].addEventListener("mouseover", function(n) {
//         e[t].play()
//       }),
//       e[t].addEventListener("mouseout", function(n) {
//         e[t].pause()
//       })
//   };
// var cookie = document.querySelector(".cookies");
//
// function openCookie() {
//   cookie.classList.remove("cookieopen")
// }
// cookie.addEventListener("click", function() {
//     openCookie()
//   }),
//   setTimeout(function() {
//     openCookie()
//   }, 6e3);
var quotes = ["logos", "identities", "web", "strategy", "creative", "design"],
  i = 0,
  reset = setInterval(quoteChange, 2000);
function quoteChange() {
  var e = document.createElement("span"),
    t = document.createTextNode(quotes[i++]);
  e.appendChild(t),
    e.setAttribute("class", "sloganpt2");
  var n = document.querySelector(".slogan"),
    o = document.querySelector(".sloganpt2");
  n.replaceChild(e, o),
    i == quotes.length && (i = 0)
};
//
// function setHeight() {
//   var e = document.documentElement,
//     t = document.createElement("div");
//   t.style.visibility = "hidden",
//     t.style.position = "absolute",
//     t.style.height = "100vh",
//     e.appendChild(t);
//   var n = window.getComputedStyle(t).height,
//     o = window.innerHeight / parseInt(n, 10);
//   if (1 !== o) {
//     var i = 100 * o + "vh";
//     e.style.setProperty("--viewportHeight", i)
//   }
//   e.removeChild(t)
// }
//
// function ripstop(e) {
//   e.addEventListener("touchstart", function() {
//     var t = e.scrollTop;
//     0 !== e.scrollHeight - e.clientHeight - t ? t > 0 || (e.scrollTop = 1) : e.scrollTop = e.scrollHeight - e.clientHeight - 1
//   })
// }
// document.addEventListener("DOMContentLoaded", function() {
//     setHeight(),
//       CSS.supports("( -webkit-overflow-scrolling: touch )") && ripstop(document.querySelector(".stacks"))
//   }),
//   window.addEventListener("orientationchange", function() {
//     setHeight()
//   });
