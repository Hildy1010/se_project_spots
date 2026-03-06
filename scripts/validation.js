const showInputError = (formEl, inputEl, errorMessage,config) => {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-errorClass`);
    errorMessageEl.textContent = errorMessage;
    inputEl.classList.add(config.inputErrorClass);
};

const hideInputError = (formEl, inputEl, config) => {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-errorClass`);
    errorMessageEl.textContent = "";
    inputEl.classList.remove(config.inputErrorClass);
};

const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, inputEl.validationMessage);
    } else {
        hideInputError(formEl, inputEl);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
        return !input.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonEl) => {
    if (hasInvalidInput(inputList)) {
        buttonEl.disabled = true;
    } else {
        buttonEl.disabled = false;
    }
}

function setEventListeners(formEl) {
    const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
    const buttonElement = formEl.querySelector(".modal__submit-btn");

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formEl, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

function enableValidation() {
    const formList = document.querySelectorAll(".modal__form");
    formList.forEach((formEl) => {
        setEventListeners(formEl);
    });
};

enableValidation();