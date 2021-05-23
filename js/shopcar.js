let p = this.document.querySelectorAll(".topbar p"),
topbar = this.document.querySelector(".topbar"),
index = 0,
timer = null

console.log(p);
timer = this.setInterval(setchange, 3000)

function setchange() {
change(index, ++index)
}

function change(i, next) {
// debugger
p[i].classList.add("show")
if (next > p.length - 1) next = 0
p[next].classList.remove("show")
index = next
}