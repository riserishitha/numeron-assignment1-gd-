var referredtime = 0;
let num1 = document.getElementById('number1')
let num2 = document.getElementById('number2')
let timered = document.getElementById('timer')
reset();
let score = 0;
let no1 = Math.floor(Math.random()*100)
let no2 = Math.floor(Math.random()*100)
num1.innerHTML = no1;
num2.innerHTML = no2;

let great = document.getElementById('greater-than');
great.addEventListener('click',function(){
    if (no1>no2){
        score = score+1;
        no1 = Math.floor(Math.random()*100)
        no2 = Math.floor(Math.random()*100)
        num1.innerHTML = no1;
        num2.innerHTML = no2;
        clearInterval(referredtime);
        reset();
        console.log("Correct")
    }else{
        localStorage.setItem('score',score);
        window.location.href="./gameover.html";
        console.log("wrong")
    }
})

let equal = document.getElementById('equal-to');
equal.addEventListener('click',function(){
    if (no1==no2){
        score = score+1;
        no1 = Math.floor(Math.random()*100)
        no2 = Math.floor(Math.random()*100)
        num1.innerHTML = no1;
        num2.innerHTML = no2;
        clearInterval(referredtime);
        reset();
        console.log("Correct")
    }else{
        localStorage.setItem('score',score);
        window.location.href="./gameover.html";
        console.log("wrong")
    }
})

let less = document.getElementById('lesser-than');
less.addEventListener('click',function(){
    if (no1<no2){
        score = score +1;
        no1 = Math.floor(Math.random()*100)
        no2 = Math.floor(Math.random()*100)
        num1.innerHTML = no1;
        num2.innerHTML = no2;
        clearInterval(referredtime);
        reset();
        console.log("Correct")
    }else{
        localStorage.setItem('score',score);
        window.location.href="./gameover.html";
        console.log("wrong")
    }
})

function reset(){
    var t = 5;
    timered.innerHTML= t;
    referredtime = setInterval(()=>{
        t = t -1;
        timered.innerText = t;
        if (t==0){
            localStorage.setItem("score",score);
            window.location.href= './gameover.html'
        }
    },1000)

}
