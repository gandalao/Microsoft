window.addEventListener("load", function () {
    // console.log(this);
    let wenhao = document.querySelector(".wenhao"),
        tips = this.document.querySelector(".tips"),
        tips2 = this.document.querySelector(".tips2"),
        close = this.document.querySelector(".tips .close"),
        close2 = this.document.querySelector(".tips2 .close"),
        login = this.document.querySelector(".page .login ul "),
        login2 = this.document.querySelector(".page2 .login2 ul "),
        key_login = this.document.querySelector(".page2  .login2 ul li:nth-child(2) "),
        git_login = this.document.querySelector(".page2  .login2 ul li:nth-child(3) "),
        login_option = this.document.querySelector(".login_option"),
        lastOne = this.document.querySelector(".lastOne"),
        next = this.document.querySelector(".next"),
        page = this.document.querySelector(".page"),
        page2 = this.document.querySelector(".page2"),
        inp = this.document.querySelector(".page ul li input ")
    console.log(close2);
    wenhao.addEventListener("click", function () {
        tips.style.display = "block"
    })
    key_login.addEventListener("click", function () {
        tips.style.display = "block"
    })
    git_login.addEventListener("click", function () {
        tips2.style.display = "block"
    })
    close.children[0].addEventListener("mousedown", function () {
        closeStyle(1, close.children[0])
    })
    close.children[0].addEventListener("click", function () {
        tips.style.display = "none"
    })
    close.children[0].addEventListener("mouseup", function () {
        closeStyle(2, close.children[0])
    })
    close2.children[0].addEventListener("mousedown", function () {
        closeStyle(1, close2.children[0])
    })
    close2.children[0].addEventListener("click", function () {
        tips2.style.display = "none"
    })
    close2.children[0].addEventListener("mouseup", function () {
        closeStyle(2, close2.children[0])
    })
    // close.children[0].addEventListener("mousedown", function () {
    //     close.children[0].style.textDecoration = "none";
    //     close.children[0].style.border = "0";
    //     close.children[0].style.opacity = ".9";
    // })

    // close.children[0].addEventListener("mouseup", function () {
    //     close.children[0].style.textDecoration = "underline";
    //     close.children[0].style.border = "2px solid #000";
    //     close.children[0].style.opacity = "1";
    // })
    function closeStyle(val, item) {
        if (val == 1) {
            item.style.textDecoration = "none";
            item.style.border = "0";
            item.style.opacity = ".9";
        } else {
            item.style.textDecoration = "underline";
            item.style.border = "2px solid #000";
            item.style.opacity = "1";
        }
    }
    login_option.onclick = function () {
        login.style.transform = "translateX(-440px)";
        next.style.transform = "translateX(-440px)";
        setTimeout(setLoginShow, 200)
    }

    lastOne.onclick = function () {
        login2.style.transform = "translateX(440px)";
        lastOne.style.transform = "translateX(440px)";
        setTimeout(setLogin2Show, 200)
    }
    function setLoginShow() {
        setShow()
        // page.style.display = "none"
        // page2.style.display = "block"
        login.style.transform = "translateX(0)";
        next.style.transform = "translateX(0)";
    }
    function setLogin2Show() {
        setShow()
        // page2.style.display = "none"
        // page.style.display = "block"
        login2.style.transform = "translateX(0)";
        lastOne.style.transform = "translateX(0)";
    }
    function setShow() {
        page.classList.toggle("show")
        page2.classList.toggle("show")
    }
    // function change(val) {
    //     if (val == 1) {
    //         return login.style.transform = "translateX(0)",
    //             next.style.transform = "translateX(0)";
    //     } else {
    //         return login2.style.transform = "translateX(0)",
    //             lastOne.style.transform = "translateX(0)";
    //     }
    // }
    next.onclick = function () {
        const emailrule = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (!inp.value) {
            alert("请输入邮箱")
        } else if (!emailrule.test(inp.value)) {
            alert("请输入正确的邮箱格式")
        }else {
            alert("登录成功")
        }
    }
})