// THUMBNAIL SLIDER

const thumbs = document.querySelectorAll(".thumbnails img")
const main = document.getElementById("mainSlider")

thumbs.forEach(img => {
    img.onclick = () => {
        main.src = img.src
    }
})


// FAVORITE

const fav = document.getElementById("fav")

fav.onclick = () => {
    fav.classList.toggle("active")
    fav.style.color = fav.classList.contains("active") ? "red" : "black"
}


// SHARE

document.getElementById("share").onclick = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("تم نسخ رابط العقار")
}


// SCROLL ANIMATION

const faders = document.querySelectorAll(".fade")

window.addEventListener("scroll", () => {

    faders.forEach(el => {

        const top = el.getBoundingClientRect().top

        if (top < window.innerHeight - 100) {

            el.classList.add("show")

        }

    })

})


// LOGIN MODAL

const loginBtn = document.querySelector(".login")
const modal = document.getElementById("loginModal")
const close = document.querySelector(".closeModal")

loginBtn.onclick = () => {
    modal.style.display = "flex"
}

close.onclick = () => {
    modal.style.display = "none"
}

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}


// LOAN CALCULATOR

function calculate() {

    let amount = document.getElementById("loanAmount").value
    let years = document.getElementById("years").value

    let monthly = (amount / years) / 12

    document.getElementById("result").innerText = "القسط الشهري: " + monthly.toFixed(0)

}
let favorites = []

function saveFavorite(name) {

    favorites.push(name)

    localStorage.setItem("favorites", JSON.stringify(favorites))

    alert("تم الحفظ في المفضلة")

}
function bookProperty() {

    alert("تم ارسال طلب الحجز")

}
function sendMsg() {

    let msg = document.getElementById("msg").value

    let div = document.createElement("div")

    div.innerText = "انت: " + msg

    document.getElementById("chatBox").appendChild(div)

}
let otp

function sendOTP() {

    otp = Math.floor(100000 + Math.random() * 900000)

    alert("رمز التحقق " + otp)

}

function verifyOTP() {

    let c = document.getElementById("code").value

    if (c == otp) {

        alert("تم التوثيق")

    } else {

        alert("رمز خاطئ")

    }

}
function rateOwner(r) {

    document.getElementById("ratingResult").innerText = "تم تقييم المالك " + r + " نجوم"

}
function reportProperty() {

    alert("تم ارسال البلاغ وسيتم مراجعته")

}

