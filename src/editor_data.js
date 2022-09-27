var attributesUsed = [];
var previousSelectedText = "";
var text = "";
var mapping = {};

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("attribtes: ", localStorage.getItem("attributes"));
    attributesUsed = JSON.parse(localStorage.getItem("attributes"));
    for (let index = 0; index < attributesUsed.length; index++)
        mapping[attributesUsed[index]] = "";
    document.getElementById("backButton").addEventListener("click", () => {
        goBack();
    });
    document.getElementById("contentTextArea").value = "";
    document.getElementById("continueButton").addEventListener("click", () => {
        transformArea();
    });

    document.getElementById("pageContainer").addEventListener("contextmenu", event => {
        event.preventDefault();
        const { clientX: mouseX, clientY: mouseY } = event;
        var contextMenu = document.getElementById("context-menu");

        let allAttributes = JSON.parse(localStorage.getItem("attributes"));
        contextMenu.innerHTML = '<p style="padding: 8px 10px; font-size: 15px; font-weight: bold; margin: 0">Attributes</p>';
        for (let i = 0; i < allAttributes.length; i++) {
            contextMenu.innerHTML += '<div class="item">' + allAttributes[i] + '</div>';
            for (let j = 0; j < document.getElementsByClassName("item").length; j++)
                document.getElementsByClassName("item")[j].addEventListener("click", event => {
                    mapping[event.path[0].outerText] = text;
                    document.getElementById(event.path[0].outerText).innerHTML = text;
                    console.log(mapping);
                });
        }
        contextMenu.style.top = `${mouseY}px`;
        contextMenu.style.left = `${mouseX}px`;

        contextMenu.classList.add("visible");

        document.getElementsByTagName("body")[0].addEventListener("click", (event) => {
            if (event.target.offsetParent != "contextMenu")
                contextMenu.classList.remove("visible");
        });
        console.log(text);
        previousSelectedText = text;
    });
});

// Used to go to previous page
function goBack() {
    window.history.back();
}

// Go from text area to text selection
function transformArea() {
    let value = document.getElementById("contentTextArea").value;
    document.getElementById("contentTextArea").style.display = "none";
    document.getElementById("pageContainer").innerHTML += '<div id="generatedText" class="selectableDiv">' + value + '</div>';
    document.getElementById("generatedText").addEventListener("mouseup", () => {
        selectedText();
    });
    document.getElementById("attributesMapping").style.display = "block";
    for (let index = 0; index < attributesUsed.length; index++)
        document.getElementById("attributeTable").innerHTML += '<tr><td>' + attributesUsed[index] + '</td><td id="' + attributesUsed[index] + '" class="tableItem"></td></tr>';
}

// Handle the selection of text
function selectedText() {
    if (window.getSelection)
        text = window.getSelection().toString();
}