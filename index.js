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
    document.getElementsByTagName("body")[0].classList.add("fadeOutLeft");
    setTimeout(() => {
        document.location.href = "./src/upload.html";
    }, 500)
}

function clickOnEditor() {
    document.getElementsByTagName("body")[0].classList.add("fadeOutLeft");
    setTimeout(() => {
        document.location.href = "./src/editor.html";
    }, 500)
}

function clickOnGenerator() {
    console.log("generator")
}

function clickOnStatus() {
    document.getElementsByTagName("body")[0].classList.add("fadeOutLeft");
    setTimeout(() => {
        document.location.href = "./src/manage.html";
    }, 500)
}