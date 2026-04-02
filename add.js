// ACTIVE TYPE

const types = document.querySelectorAll(".type-card")

types.forEach(card => {

    card.onclick = () => {

        types.forEach(c => c.classList.remove("active"))

        card.classList.add("active")

    }

})


// IMAGE PREVIEW

const dropArea = document.getElementById("dropArea")
const input = document.getElementById("fileInput")
const preview = document.getElementById("preview")

dropArea.onclick = () => input.click()

input.addEventListener("change", function () {

    preview.innerHTML = ""

    Array.from(this.files).forEach(file => {

        const reader = new FileReader()

        reader.onload = function (e) {

            const img = document.createElement("img")

            img.src = e.target.result

            preview.appendChild(img)

        }

        reader.readAsDataURL(file)

    })

})


// DESCRIPTION COUNTER

const desc = document.getElementById("description")
const count = document.getElementById("count")

desc.addEventListener("input", () => {

    count.innerText = desc.value.length

})


// STEPPER

const steps = document.querySelectorAll(".step")
const progress = document.querySelector(".progress")

steps.forEach((step, index) => {

    step.onclick = () => {

        steps.forEach(s => s.classList.remove("active"))

        step.classList.add("active")

        progress.style.width = (index / (steps.length - 1)) * 100 + "%"

    }

})


// VALIDATION

document.querySelector(".submit").onclick = function () {

    const price = document.getElementById("price").value

    if (price === "") {

        alert("يرجى إدخال السعر")

        return

    }

    alert("تم إضافة العقار بنجاح")

}
