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
});

function clickOnUpload() {
    document.location.href = "./src/upload.html";
}

function clickOnEditor() {
    document.location.href = "./src/editor.html";    
}

function clickOnGenerator() {
    console.log("generator")
}