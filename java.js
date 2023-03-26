let ckhnum = document.querySelector('input');
let body = document.getElementsByClassName('A1');
let btn = document.getElementById('cl');
let bot2 = document.querySelector('p');
let para1 = document.querySelector('h2');
let randowno = Math.floor(Math.random()*100);
let count = 100;
btn.addEventListener('click', () => {
    console.log(randowno)
     if (randowno < parseInt(ckhnum.value)){  
        bot2.innertext = 'Number is High';
        count--;
     }
     else if (randowno > parseInt(ckhnum.value)){  
        bot2.innertext = 'Number is Low';
        count--;
     }
     else {
        body[0].setAttribute('style', 'background-color:green;')
        ckhnum.setAttribute('style', 'background-color:green;')
        console.log(`You guess the correct number ${randowno}`)
     }
     
})