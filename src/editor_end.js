document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("backButton").addEventListener("click", () => {
        goBack();
    });
    let generatedArrayValues = "";
    for(let index = 0; index < JSON.parse(localStorage.getItem("finalJson")).length; index++)
        generatedArrayValues += JSON.stringify(JSON.parse(localStorage.getItem("finalJson"))[index]) + '\n';
    document.getElementById("result").value = generatedArrayValues;
    document.getElementById("confirmButton").addEventListener("click", () => {
        sendData();
    });
    document.getElementById("addDataButton").addEventListener("click", () => {
        addData();
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
    document.getElementById("generatedString").classList.add("fadeOutLeft");
    document.getElementById("buttonsValidation").classList.add("fadeOutLeft");
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
    localStorage.removeItem("finalJson");
    localStorage.removeItem("attributes");
    document.location.href = "../index.html";
}

// function to add more data to the same dataset
function addData() {
    document.location.href = "./editor_data.html";
}

