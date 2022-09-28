document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("backButton").addEventListener("click", () => {
        goBack();
    });
});

function goBack() {
    document.getElementsByClassName("fadeInRight")[0].classList.add("fadeOutLeft");
    document.getElementsByClassName("fadeInRight")[1].classList.add("fadeOutLeft");
    setTimeout(() => {
        window.history.back();
    }, 500)
}
