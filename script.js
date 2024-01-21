let username = document.querySelector(".myname")
let email = document.querySelector(".email")
let number = document.querySelector(".number")
let pass = document.querySelector(".pass")
let nameerr = document.querySelector(".name_alert")
let emailerr = document.querySelector(".email_alert")
let numbererr = document.querySelector(".number_alert")
let btn = document.querySelector(".btn")
let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let numberregex = "NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)"

let show = document.querySelector("#show")
let hide = document.querySelector("#hide")

btn.addEventListener("click",function(){
    if(username.value == ""){
        nameerr.innerHTML = "*please enter your email"
        username.style.borderBottom = "1px solid red"
    }else{
        nameerr.innerHTML = ""
        username.style.borderBottom = ""
    }
    if(email.value == ""){
        emailerr.innerHTML = "*please enter your email"
        email.style.borderBottom = "1px solid red"
    }else if(!email.value.match(emailRegex)){
        emailerr.innerHTML = "*incorrect email format"
        email.style.borderBottom = "1px solid red"
    }
    else{
        emailerr.innerHTML = ""
        email.style.borderBottom = ""
    }
    if(number.value == ""){
        numbererr.innerHTML = "*please enter your number"
        number.style.borderBottom = "1px solid red"
    }else if(number.value.match(numberregex)){
        numbererr.innerHTML = "*incorrect number"
        number.style.borderBottom = "1px solid red"
    }
    else{
        numbererr.innerHTML = ""
        number.style.borderBottom = ""
    }
})

show.addEventListener("click",function(){
    if(pass.type == "password"){
        pass.type = "type"
        show.style.display = "none"
        hide.style.display = "block"
    }else{
        pass.type = "password"
    }
})

hide.addEventListener("click",function(){
    if(pass.type == "text"){
        pass.type = "password"
        show.style.display = "block"
        hide.style.display = "none"
    }else{
        pass.type = "text"
    }
})