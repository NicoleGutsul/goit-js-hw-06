const inputEl = document.querySelector("input");
inputEl.addEventListener("blur", (event) => {
    const changeClass = (val, inval) => {
        event.target.classList.add(val);
        event.target.classList.remove(inval);
    };
    if (event.currentTarget.value.length !== +inputEl.getAttribute("data-length")) {
        changeClass("invalid", "valid");
    } else {
        changeClass("valid", "invalid");
    }

});