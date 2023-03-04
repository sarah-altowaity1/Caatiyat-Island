var brocolli = document.getElementById("brocolli")
var fish = document.getElementById("fish")
var watermelon = document.getElementById("watermelon")
var cat = document.getElementById("cat")
var btn = document.getElementById("btn")
var munching = document.getElementById("audio")
food = 0

function increment(el){
    el.style.visibility = "hidden";
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
    munching.play()
}
brocolli.addEventListener('click', function() {
    increment(brocolli);
})

fish.addEventListener('click',  function(){
    increment(fish);

})

watermelon.addEventListener('click', function(){
    increment(watermelon);
})
