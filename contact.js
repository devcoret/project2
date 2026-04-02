const btn = document.querySelector(".sendBtn")
const popup = document.querySelector(".popup")

btn.onclick = function () {

    popup.style.display = "flex"

}

function closePopup() {

    popup.style.display = "none"

}

function toggleMenu() {

    document.querySelector(".nav-links").classList.toggle("active")

}