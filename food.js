var brocolli = document.getElementById("brocolli")
var fish = document.getElementById("fish")
var watermelon = document.getElementById("watermelon")
var cat = document.getElementById("cat")
var btn = document.getElementById("btn")
food = 0

function increment(){
    food = food + 1;
    if (food == 1){
        cat.setAttribute("src", "img/food/cat2.PNG");
    }
    else if (food == 2){
        cat.setAttribute("src", "img/food/cat3.PNG");
    }
    else if (food == 3){
        cat.setAttribute("src", "img/food/Chonkiest.PNG");
        btn.style.visibility = "visible"
    }
}
brocolli.addEventListener('click', function() {
    brocolli.style.visibility = "hidden";
    increment();
})

fish.addEventListener('click',  function(){
    fish.style.visibility = "hidden";
    increment();

})

watermelon.addEventListener('click', function(){
    watermelon.style.visibility = "hidden";
    increment();
})
