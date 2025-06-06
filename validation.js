const showInputError = (formEl, inputEl, errorMessage) => {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    errorMessageEl.textContent = errorMessage;
    inputEl.classList.add("modal__input_type_error");
};

const hideInputError = (formEl, inputEl) => {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    errorMessageEl.textContent = "";
    inputEl.classList.remove("modal__input_type_error");
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

const toggleButtonState = (inputList, buttonEl) {
    if (hasInvalidInput(inputList)) {
        buttonEl.disabled = true;
    } else {
        buttonEl.
    }
}

const setEventListeners = (formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
    const buttonElement = formEl.querySelector(".modal__submit-btn");

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formEl, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

function enableValidation() {
    const formList = document.querySelectorAll(".modal__form");
    formList.forEach((formEl) => {
        setEventListeners(formEl);
    });
};

enableValidation();