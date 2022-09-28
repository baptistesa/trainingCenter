document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("uploadButton").addEventListener("click", () => {
        clickOnUpload();
    });
    document.getElementById("editorButton").addEventListener("click", () => {
        clickOnEditor();
    });
    document.getElementById("generatorButton").addEventListener("click", () => {
        clickOnGenerator();
    });
    document.getElementById("statusButton").addEventListener("click", () => {
        clickOnStatus();
    });
});

function clickOnUpload() {
    document.getElementsByTagName("body")[0].classList.add("fadeOutRight");
    setTimeout(() => {
        document.location.href = "./src/upload.html";
    }, 1200)
}

function clickOnEditor() {
    document.location.href = "./src/editor.html";
}

function clickOnGenerator() {
    console.log("generator")
}

function clickOnStatus() {
    document.location.href = "./src/manage.html";
}