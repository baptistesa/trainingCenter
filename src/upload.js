document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("backButton").addEventListener("click", () => {
        goBack();
    });
});

function goBack() {
    document.getElementsByTagName("body")[0].classList.add("fadeOutLeft");
    setTimeout(() => {
        window.history.back();
    }, 500)
}