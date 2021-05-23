
window.addEventListener('load', function () {
  let btn = document.querySelector(".menu .btn"),
    nav_min = document.querySelector(".nav_min"),
    more = nav_min.querySelector("i"),
    menu_list = document.querySelector(".menu_list"),
    nav_list = document.querySelector(".nav_list"),
    allLi = document.querySelectorAll(".imgbox li"),
    dot = document.querySelectorAll(".slider .dot"),
    lastOne = document.querySelector(".last"),
    nextOne = document.querySelector(".next"),
    select = document.querySelectorAll(".select"),
    suspend = document.querySelector(".slider .st"),
    suspendicon = document.querySelector(".st span i"),
    open = document.querySelector(".search"),
    inp = document.querySelector(".inp"),
    close = document.querySelector(".close"),
    qiuxiao = document.querySelector(".btn2"),
    logo = document.querySelector(".logo"),
    list_warp = document.querySelector(".nav  .list-wrap"),
    menu = document.querySelector(".menu"),
    info = document.querySelector(".info"),
    w = window.innerWidth,
    moreselect = document.querySelectorAll(".moreselect"),
    timer = null,
    index = 0,
    flag = 0,
    len = dot.length
  // console.log(moreselect[0].children);
  //监听窗口变化
  window.addEventListener('resize', function () {
    if (window.innerWidth < 788) {
      logo.style.display = "block";
      menu_list.classList.add("listshow")
      clickClose()
      list_warp.style.display = "none"
      cc = 1
    }

    if (window.innerWidth > 788) {
      nav_list.classList.add("navshow")
      list_warp.style.display = "flex"
      cc = 0
      more.className = ""
      more.className = "iconfont icon-gengduo"
      flag = 0
    }
    if (window.innerWidth > 960) {
      moreselect[0].children[1].classList.add("ulshow")
    }
    if (window.innerWidth <= 905) {
      moreselect[0].children[1].classList.add("ulshow")
    }
    if (window.innerWidth > 905) {
      moreselect[1].children[1].classList.add("ulshow")
    }
    if (window.innerWidth <= 860) {
      moreselect[1].children[1].classList.add("ulshow")
    }
    if (window.innerWidth > 860) {
      moreselect[2].children[1].classList.add("ulshow")
    }
  })

  //所有的
  btn.onclick = function () {
    menu_list.classList.toggle("listshow")
  }
  //更多
  nav_min.onclick = function () {
    nav_list.classList.toggle("navshow")
    if (flag == 0) {
      more.className = ""
      more.className = "iconfont icon-guanbi"
      flag = 1
    }
    else {
      more.className = ""
      more.className = "iconfont icon-gengduo"
      flag = 0
    }
  }
  // 轮播图
  dot.forEach((item, i) => [
    item.onclick = function () {
      change(index, i)
    }
  ])

  // 左右按钮
  lastOne.onclick = function () {
    // index <= 0 ? index = 1 : index--
    change(index, --index)
  }
  nextOne.onclick = function () {
    // index >= 1 ? index = 0 : index++
    change(index, ++index)
  }
  function change(i, next) {
    allLi[i].style.display = "none"
    dot[i].style.background = "white"
    if (next < 0) next = len - 1
    if (next > len - 1) next = 0
    allLi[next].style.display = "block"
    dot[next].style.background = "black"
    index = next
  }
  // 定时器
  timer = setInterval(nextOne.onclick, 2000)
  nextOne.parentNode.onmouseover = function () {
    //清除定时器
    clearInterval(timer)
    nextOne.parentNode.onmouseout = function () {
      if (stop == 0) {
        timer = setInterval(nextOne.onclick, 2000)
      } else
        clearInterval(timer)
    }
  }

  //下拉菜单
  var aa = 0
  for (let i = 0; i < select.length; i++) {
    select[i].onclick = function () {
      this.children[1].classList.toggle("show")
      this.children[2].classList.toggle("selectupdown")
    }
  }
  for (let j = 0; j < moreselect.length; j++) {
    moreselect[j].onclick = function () {
      this.children[1].classList.toggle("ulshow")
    }
  }
  //暂停
  var stop = 0;
  suspend.onclick = function () {
    if (stop == 0) {
      clearInterval(timer)
      suspendicon.className = ""
      suspendicon.className = "iconfont icon-zanting1"
      this.children[1].innerText = "播放幻灯片"
      stop = 1
    } else {
      suspendicon.className = ""
      suspendicon.className = "iconfont icon-zanting"
      this.children[1].innerText = "暂停幻灯片"
      stop = 0
    }
  }

  var cc = 0
  if (w < 788) {
    cc = 1
  }

  function clickopen() {
    inp.style.display = "block"
    list_warp.style.display = "none"
    menu.style.display = "none"
    info.style.display = "none"
  }
  function clickClose() {
    inp.style.display = "none"
    list_warp.style.display = "flex"
    menu.style.display = "block"
    info.style.display = "block"
  }
  // 打开搜索框
  open.onclick = function () {
    if (cc == 0) {
      clickopen()
    } else {
      clickopen()
      logo.style.display = "none";
    }
  }
  //取消
  qiuxiao.onclick = function () {
    clickClose()

  }
  close.onclick = function () {
    clickClose()
    logo.style.display = "block";
    list_warp.style.display = "none"
  }




})
