var attributesAdded = [];

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("attribtes: ", localStorage.getItem("attributes"));
    document.getElementById("backButton").addEventListener("click", () => {
        goBack();
    });
    document.getElementById("contentTextArea").value = "";
    document.getElementById("continueButton").addEventListener("click", () => {
        transformArea();
    })
});

function goBack() {
    window.history.back();
}

// Go from text area to text selection
function transformArea() {
    console.log("ok")
}