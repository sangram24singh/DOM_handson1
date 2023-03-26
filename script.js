let text = document.getElementById('text');
function callme(){
    console.log(text.innerHTML)
}
let para = document.getElementsByTagName('p');
function myfun(){
    console.log(para[0].innerHTML);
}
let food = document.getElementsByClassName('list')
function mylist(){
    console.log(food[0].innerHTML)
}
let head = document.getElementsByTagName('h2');
function myform(){
    
  head[0].innerHTML = "Hello world"
}
let txt = document.getElementById('mytxt');
function mytext(){
    txt.innerHTML = "welcome to Elevation academy"
}
let helloo = document.getElementById('hy')
helloo.addEventListener('click', ()=>{
    helloo.setAttribute('style', 'color:red');
})
let ckh = document.getElementById('flex1')
let bot = document.getElementsByClassName('btn')
bot[0].addEventListener('click',()=>{
    ckh.setAttribute('style', 'display:block');
})
let bot1 = document.querySelector('#myclock')
 function time(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (hours>12){
        hours = hours - 12
    }
    let timezone = `${hours}:${minutes}:${seconds}`;
    bot1.innerHTML = timezone
}
setInterval(() => {
    time()
},1000);




    







