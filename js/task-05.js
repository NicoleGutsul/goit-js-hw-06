const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", textInputChange);
outputEl.addEventListener("change", textInputChange);

function textInputChange(evt) {
    outputEl.textContent = evt.currentTarget.value;
    if (evt.currentTarget.value === ""){
        outputEl.textContent = "Anonymous";
    }
}

