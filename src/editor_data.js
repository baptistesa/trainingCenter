var attributesUsed = [];
var previousSelectedText = "";
var text = "";
var mapping = {};
var fullContent = "";

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("attribtes: ", localStorage.getItem("attributes"));
    attributesUsed = JSON.parse(localStorage.getItem("attributes"));
    for (let index = 0; index < attributesUsed.length; index++)
        mapping[attributesUsed[index]] = { value: "", position: "" };
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
                    mapping[event.path[0].outerText].value = text;
                    document.getElementById(event.path[0].outerText).innerHTML = text;
                    // find position of the word in the sentence
                    const wordIndex = fullContent.indexOf(text);
                    let endIndex;
                    if (wordIndex !== -1)
                        endIndex = wordIndex + text.length - 1;
                    mapping[event.path[0].outerText].position = [wordIndex, endIndex];
                    document.getElementById("position" + event.path[0].outerText).innerHTML = "[" + wordIndex + "," + endIndex + "]";
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

// Go from text area to text selection and change buttons to vlidate
function transformArea() {
    fullContent = document.getElementById("contentTextArea").value;
    document.getElementById("contentTextArea").style.display = "none";
    document.getElementById("pageContainer").innerHTML += '<div id="generatedText" class="selectableDiv">' + fullContent + '</div>';
    document.getElementById("generatedText").addEventListener("mouseup", () => {
        selectedText();
    });
    document.getElementById("attributesMapping").style.display = "block";
    for (let index = 0; index < attributesUsed.length; index++)
        document.getElementById("attributeTable").innerHTML += '<tr><td>' + attributesUsed[index] + '</td><td id="' + attributesUsed[index] + '" class="tableItem"></td><td id="position' + attributesUsed[index] + '" class="tableItem"></td></tr>';
    document.getElementById("buttonsValidation").style.display = "none";
    document.getElementById("buttonsPush").addEventListener("click", () => {
        clickPushButton();
    });
    document.getElementById("buttonsPush").style.display = "block";
    
}

// Handle the selection of text
function selectedText() {
    if (window.getSelection)
        text = window.getSelection().toString();
}

// Last button which displays screen end
function clickPushButton() {
    generateJSON();
    document.location.href = "./editor_end.html";
}

// Generate the final json string
function generateJSON() {
    let finalJson = {
        id: "",
        text: fullContent,
        meta: {},
        annotation_approver: null,
        labels: []
    };
    for (let key in mapping) {
        mapping[key].position.push(key);
        let tmp = mapping[key].position;
        finalJson.labels.push(tmp);
    }
    localStorage.setItem("finalJson", JSON.stringify(finalJson));
}