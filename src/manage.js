document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("backButton").addEventListener("click", () => {
        goBack();
    });
    retrieveModels();
});

function goBack() {
    window.history.back();
}
