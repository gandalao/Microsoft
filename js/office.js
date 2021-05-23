
// 常见问题解答
let problem = this.document.querySelectorAll(".problem ul li>div:first-child"),
  anwser = this.document.querySelectorAll(".problem ul li .pd"),
  allopen = this.document.querySelector(".problem .allopen"),
  allfold = this.document.querySelector(".problem .allfold"),
  jiantou = this.document.querySelectorAll(".problem ul li>div:first-child i"),
  num = 0,
  len = problem.length;
// console.log(jiantou, allfold);


for (let i = 0; i < len; i++) {
  problem[i].state = false
  problem[i].onclick = function () {
    problem[i].state = !problem[i].state
    anwser[i].classList.toggle("show")
    setjiantou(problem[i].state, i)
    if (problem[i].state) {
      num++
    } else {
      num--
    }
    isdisabled()
  }
}
// allopen.onmouseover = function () {
//   allopen.style.backgroundColor = "#005da6"
//   allopen.style.color = "#fff"
// }

allfold.onmouseover = function () {
  if (num === len) {
    allfold.style.backgroundColor = "#005da6"
    allfold.style.color = "#fff"
  }
}
allfold.onmouseout = function () {
  if (num === len) {
    // allfold.style.backgroundColor = ""
    // allfold.style.color = ""
    setBgColorInit()
  }
}
allopen.onmouseover = function () {
  if (num !== len) {
    allopen.style.backgroundColor = "#005da6"
    allopen.style.color = "#fff"
  }
}
allopen.onmouseout = function () {
  if (num !== len) {
    setBgColorInit()
    // allopen.style.backgroundColor = ""
    // allopen.style.color = ""
  }
}
function setBgColorInit() {
  allfold.style.backgroundColor = ""
  allfold.style.color = ""
  allopen.style.backgroundColor = ""
  allopen.style.color = ""
}

allopen.onclick = function () {
  allopen.state = false
  allfold.state = true
  isactive(1)
  num = len
  isdisabled()
  setBgColorInit()
}
allfold.onclick = function () {
  allfold.state = false
  allopen.state = true
  isactive(0)
  num = 0
  isdisabled()
  setBgColorInit()
}
function isactive(bool) {
  for (let i = 0; i < len; i++) {
    if (bool) {
      problem[i].state = true
      anwser[i].classList.remove("show")
      setjiantou(problem[i].state, i)
    } else {
      problem[i].state = false
      anwser[i].classList.add("show")
      setjiantou(problem[i].state, i)
    }
  }

}
function isdisabled() {
  if (num === len) {
    allopen.disabled = "true"
    allfold.disabled = ""
    allopen.classList.remove("allcolor")
    allopen.classList.add("state")
    allfold.classList.add("allcolor")
    allfold.classList.remove("state")
  } else {
    allopen.disabled = ""
    allfold.disabled = "true"
    allopen.classList.add("allcolor")
    allopen.classList.remove("state")
    allfold.classList.remove("allcolor")
    allfold.classList.add("state")
  }
}
function setjiantou(val, i) {
  if (val) {
    jiantou[i].classList.remove("icon-jiantou")
    jiantou[i].classList.add("icon-jiantoudown")
  }
  else {
    jiantou[i].classList.add("icon-jiantou")
    jiantou[i].classList.remove("icon-jiantoudown")
  }
}
  // function getdisabled() {
  //   allopen.classList.toggle("allcolor")
  //   allopen.classList.toggle("state")
  //   allfold.classList.toggle("allcolor")
  //   allfold.classList.toggle("state")
  // }