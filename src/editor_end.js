document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("backButton").addEventListener("click", () => {
        goBack();
    });
    document.getElementById("result").value = localStorage.getItem("finalJson");
    document.getElementById("confirmButton").addEventListener("click", () => {
        sendData();
    });
    document.getElementById("homeButton").addEventListener("click", () => {
        goHome();
    });
});

// Used to go to previous page
function goBack() {
    window.history.back();
}

// Confirm button validation
function sendData() {
    document.getElementById("generatedString").classList.add("fadeOutRight");
    document.getElementById("buttonsValidation").classList.add("fadeOutRight");
    setTimeout(() => {
        document.getElementById("generatedString").style.display = "none";
        document.getElementById("buttonsValidation").style.display = "none";
        document.getElementById("confirmationMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("homeButton").style.display = "block";
        }, 900)
    }, 1200)
}

// go back to home screen
function goHome() {
    document.location.href = "../index.html";
}