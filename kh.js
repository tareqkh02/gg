let btnopen = document.getElementById('open')
let btnclose= document.getElementById('close')
let container = document.querySelector('.name')

btnclose.onclick=function(){
    container.classList.add("hid")
    this.classList.add("hid")
    btnopen.classList.remove('hid')
}
btnopen.onclick=function(){
    this.classList.add('hid')
    container.classList.remove("hid")
    btnclose.classList.remove("hid")
}

