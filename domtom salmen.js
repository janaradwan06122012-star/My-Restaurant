let cutie = document.getElementById("Mickey mouse")

let danke = document. getElementById("order")


danke.addEventListener("click" , function(event) {
event.preventDefault()
localStorage.setItem("dankeName", cutie.value)
window.location.href = "hhhh.html";
})