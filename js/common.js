
window.addEventListener('load', function () {
  let btn = document.querySelector(".menu .btn"),
    nav_min = document.querySelector(".nav_min"),
    more = nav_min.querySelector("i"),
    menu_list = document.querySelector(".menu_list"),
    nav_list = document.querySelector(".nav_list"),
    open = document.querySelector(".search"),
    inp = document.querySelector(".inp"),
    close = document.querySelector(".close"),
    qiuxiao = document.querySelector(".btn2"),
    logo = document.querySelector(".logo"),
    list_warp = document.querySelector(".nav  .list-wrap"),
    menu = document.querySelector(".menu"),
    info = document.querySelector(".info"),
    w = window.innerWidth,
    flag = 0
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

