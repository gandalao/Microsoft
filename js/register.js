let e_mail = document.querySelector(".e_mail input"),
    phone = document.querySelector(".phone span"),
    newE_mail = document.querySelector(".newE_mail span"),
    changeE_mail = document.querySelector(".changeE_mail a"),
    clickPhone = document.querySelector(".clickPhone a"),
    clickNewE_mail = document.querySelector(".clickNewE_mail a"),
    phoneRule = document.querySelector(".phone input"),
    e_mailRule = document.querySelector(".e_mail input"),
    next = document.querySelector(".next span")
// console.log(e_mailRule.value, phone, clickPhone, clickE_mail);
clickPhone.onclick = function () {
    init()
    changeInput("num")
}
changeE_mail.onclick = function () {
    init()
    changeInput("email")
}
clickNewE_mail.onclick = function () {
    init()
    changeInput("newEmail")
}
function init() {
    e_mail.classList.add("show")
    newE_mail.classList.add("show")
    clickNewE_mail.classList.add("show")
    changeE_mail.classList.add("show")
    phone.classList.add("show")
    clickPhone.classList.add("show")
}
function changeInput(val) {
    if (val == "num") {
        phone.classList.remove("show")
        changeE_mail.classList.remove("show")
    } else if (val == "email") {
        e_mail.classList.remove("show")
        clickPhone.classList.remove("show")
        clickNewE_mail.classList.remove("show")
    }
    else {
        newE_mail.classList.remove("show")
        clickPhone.classList.remove("show")
        changeE_mail.classList.remove("show")
    }
}

function setRule() {
    const emailrule = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (!e_mailRule.value) {
        alert("请输入邮箱")
    } else if (!emailrule.test(e_mailRule.value)) {
        alert("请输入正确的邮箱格式")
    }else{
        alert("注册成功")
    }
}
next.onclick = function () {
    setRule()
}