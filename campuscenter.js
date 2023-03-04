var door1= document.getElementById("door1")
var doo2 = document.getElementById("door2")
var door3 = document.getElementById("door3")
var btn = document.getElementById("btn")
var doorOpening = document.getElementById("audio")
let random = Math.floor(Math.random() * 2);

function openDoor(number, el){
    if (el.getAttribute("src") == "img/doors/closed.PNG"){

        if (random==number){
            el.setAttribute("src", "img/doors/cat.PNG");
            btn.style.visibility = "visible"
        }
        else{
            el.setAttribute("src", "img/doors/no cat.PNG")
        }
        doorOpening.play()
    }
}
door1.addEventListener("click", function() {
    openDoor(0, door1);
});
  
door2.addEventListener("click", function() {
openDoor(1, door2);
});
  
door3.addEventListener("click", function() {
openDoor(2, door3);
})