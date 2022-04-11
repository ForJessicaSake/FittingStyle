const buttonClickEffect = document.querySelectorAll(".btn");
for (let i = 0; i < buttonClickEffect.length; i++) {
    buttonClickEffect[i].addEventListener("click", function() {
        buttonClickEffect[i].style.backgroundColor = "red";
    });
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}
var shopmodal = document.getElementById("shopModal");
var shopbtn = document.getElementById("shopBtn");
var shopspan = document.getElementsByClassName("shopClose")[0];
shopbtn.onclick = function() {
    shopmodal.style.display = "block"
}

shopspan.onclick = function() {
    shopmodal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == shopmodal) {
        shopmodal.style.display = "none"
    }
}