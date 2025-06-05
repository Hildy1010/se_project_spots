const showInputError = (formEl, inputEl, errorMessage) => {
    const errorMessageID = inputEl.id + "-error";
    const errorMessageEl = formEl.querySelector("# + errorMessageID");
    errorMessageEl.textContent = errorMessage;
};

const hideInputError = (formEl, inputEl) => {
    const errorMessageID = inputEl.id + "-error";
    const errorMessageEl = formEl.querySelector("# + errorMessageID");
    errorMessageEl.textContent = "";
};

function checkInputValidity(formEl, inputEl) {
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, inputEl.validationMessage);
    } else {
        hideInputError(formEl, inputEl);
    };
};

function setEventListeners(formEl) {
    const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
    const buttonElement = formEl.querySelector(".modal__submit");

    toggleBittonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formEl, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

function enableValidation() {
    const formList = document.querySelectorAll(".modal__form");
    formList.foreach((formEl) => {
        setEventListeners(formEl);
    });
};

enableValidation();