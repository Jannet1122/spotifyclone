console.log("js opened")


const row1 = document.getElementById("songsRow");

document.querySelector(".right-btn")
.addEventListener("click", () => {

    row1.scrollBy({
        left:300,
        behavior:"smooth"
    });

});

document.querySelector(".left-btn")
.addEventListener("click", () => {

    row1.scrollBy({
        left:-300,
        behavior:"smooth"
    });

});
const row2 = document.getElementById("songsRow");

document.querySelector(".right-btn")
.addEventListener("click", () => {

    row2.scrollBy({
        left:300,
        behavior:"smooth"
    });

});

document.querySelector(".left-btn")
.addEventListener("click", () => {

    row2.scrollBy({
        left:-300,
        behavior:"smooth"
    });

});