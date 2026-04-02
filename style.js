const darkBtn = document.getElementById("darkMode")

darkBtn.onclick = () => {
    document.body.classList.toggle("dark")
}

const langBtn = document.getElementById("langToggle")

let currentLang = "ar"

langBtn.onclick = () => {

    const elements = document.querySelectorAll("[data-ar]")

    elements.forEach(el => {

        if (currentLang === "ar") {

            el.innerText = el.dataset.en
            document.documentElement.dir = "ltr"
            currentLang = "en"
            langBtn.innerText = "AR"

        } else {

            el.innerText = el.dataset.ar
            document.documentElement.dir = "rtl"
            currentLang = "ar"
            langBtn.innerText = "EN"

        }

    })

}

const menuToggle = document.getElementById("menuToggle")
const nav = document.querySelector(".nav")

menuToggle.onclick = () => {

    nav.classList.toggle("active")

}

document.querySelectorAll(".fav").forEach(icon => {

    icon.onclick = () => {

        icon.classList.toggle("fa-solid")

    }

})

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show")

        }

    })

})

document.querySelectorAll(".property,.cat,.step")
    .forEach(el => observer.observe(el))

const loginBtn = document.getElementById("loginBtn")

loginBtn.onclick = () => {

    loginBtn.innerText = "حسابي"

    alert("تم تسجيل الدخول")

}
