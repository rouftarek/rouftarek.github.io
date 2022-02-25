const colorArr = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");
const project = document.getElementById("container");

console.log (btn + " " + color);
    //hex color genarator
    
    //after loop

    btn.addEventListener("click", function() {
    let bgColor ="#";
    for(let i=0; i<=5;i++){
        bgColor += colorArr[Math.floor(Math.random()*colorArr.length)];
    }
    console.log(bgColor);
    color.textContent = bgColor;
    document.body.style.backgroundColor = bgColor;});

