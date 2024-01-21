let email = document.querySelector(".email")
let pass = document.querySelector(".pass")
let emailerr = document.querySelector(".email_alert")
let passerr = document.querySelector(".pass_alert")
let btn = document.querySelector(".btn")
let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let show = document.querySelector("#show")
let hide = document.querySelector("#hide")

btn.addEventListener("click",function(){
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
    if(pass.value == ""){
        passerr.innerHTML = "*password requred"
        pass.style.borderBottom = "1px solid red"
    }else{
        passerr.innerHTML = ""
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