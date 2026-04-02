const thumbs = document.querySelectorAll(".thumbs img")
const main = document.getElementById("mainImg")

thumbs.forEach(img => {

    img.onclick = () => {

        main.src = img.src

    }

})