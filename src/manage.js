document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("backButton").addEventListener("click", () => {
        goBack();
    });
});

function goBack() {
    document.getElementsByClassName("fadeInLeft")[0].classList.add("fadeOutRight");
    document.getElementsByClassName("fadeInLeft")[1].classList.add("fadeOutRight");
    setTimeout(() => {
        window.history.back();
    }, 500)
}
