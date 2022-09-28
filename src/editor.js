var attributesAdded = [];

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("backButton").addEventListener("click", () => {
        goBack();
    });

    document.getElementById("attributesInput").addEventListener("keyup", event => {
        if (event.key == "Enter")
            addAttribute(document.getElementById("attributesInput"));
    });

    document.getElementById("continueButton").addEventListener("click", event => {
        confirmAttributes();
    });
});

function goBack() {
    document.getElementsByClassName("fadeInRight")[0].classList.add("fadeOutLeft");
    document.getElementsByClassName("fadeInRight")[1].classList.add("fadeOutLeft");
    document.getElementsByClassName("fadeInRight")[2].classList.add("fadeOutLeft");
    setTimeout(() => {
        window.history.back();
    }, 500)
}

// After each enter keystroke
function addAttribute(elm) {
    attributesAdded.push(elm.value);
    elm.value = "";
    refreshAddedAttributes();
}

function refreshAddedAttributes() {
    document.getElementById("tagsMainContainer").innerHTML += '<div class="attributeTag"><div class="attributeName">' + attributesAdded[attributesAdded.length - 1] + '</div><div class="closeButtonAttribute"><img src="../img/icons/close.png"></div></div>'
}

// used to handle green continue button
function confirmAttributes() {
    localStorage.setItem("attributes", JSON.stringify(attributesAdded));
    document.location.href = "./editor_data.html";
}