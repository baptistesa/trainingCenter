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
    document.getElementsByTagName("body")[0].classList.add("fadeOutLeft");
    setTimeout(() => {
        document.location.href = "./src/generator_ui.html";
    }, 500)
}

function clickOnStatus() {
    document.getElementsByTagName("body")[0].classList.add("fadeOutLeft");
    setTimeout(() => {
        document.location.href = "./src/manage.html";
    }, 500)
}