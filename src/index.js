import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın

document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!
/* 
--mouseover
--keydown
wheel
load
focus
resize
scroll
select
dblclick
drag / drop 
*/

// document.querySelector("footer").addEventListener("mouseover", (event) => {
//   alert("Bana tıkladın!");
// });

document.querySelector(".footer").onmouseover = (event) => {
  event.target.style.backgroundColor = "aliceblue";
  event.target.style.borderTop = "2px solid #C0C0C0";
};

document.querySelector("footer").onmouseover = (event) => {
  event.target.style.backgroundColor = "aliceblue";
};

document.querySelector("footer").onmouseout = (event) => {
  event.target.style.backgroundColor = "";
};

const btns = document.querySelectorAll(".btn");

btns.forEach((e, i) => {
  btns[i].ondblclick = function (event) {
    event.target.style.textSize = "10rem";
  };
});

btns.forEach((e, i) => {
  btns[i].onmouseout = function (event) {
    event.target.style.textSize = "";
  };
});

document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowDown") {
    alert("alt tusa tıkladın!");
  } else if (e.code === "ArrowUp") {
    alert("ust tusa tıkladın!");
  } else if (e.code === "ArrowLeft") {
    alert("sol tusa tıkladın!");
  } else if (e.code === "ArrowRight") {
    alert("sag tusa tıkladın!");
  }
});

/* querySelector(".content-section .inverse-content").onwheel = function (e) {
  e.target.style.backgroundColor = "blue";
};
 */
