document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("backButton").addEventListener("click", () => {
        goBack();
    });
});

function goBack() {
    window.history.back();
}