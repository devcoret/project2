const timeButtons = document.querySelectorAll(".times button")
const popup = document.querySelector(".popup")
const confirmBtn = document.querySelector(".confirm")
const darkBtn = document.getElementById("darkToggle")

timeButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        timeButtons.forEach(b => b.classList.remove("active"))

        btn.classList.add("active")

    })

})


confirmBtn.onclick = function () {

    popup.style.display = "flex"

}


function closePopup() {

    popup.style.display = "none"

}


darkBtn.onclick = function () {

    document.body.classList.toggle("dark")

}


function toggleMenu() {

    document.querySelector(".nav-links").classList.toggle("active")

}