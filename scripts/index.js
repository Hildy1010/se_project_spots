const initialCards = [
    {name: "Val Thorens", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
    
    {name: "Restaurant Terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
    
    {name: "An outdoor cafe", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
    
    {name: "A very long bridge, over the forest and through the trees", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
    
    {name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
    
    {name: "Mountain house", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"},
];

const editModalBtn = document.querySelector(".profile__edit-btn");
const cardModalBtn = document.querySelector(".profile__add-btn");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const editModal = document.querySelector("#edit-profile-modal");
const editForm = editModal.querySelector(".modal__form");
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const nameInput = editModal.querySelector("#profile-name-input");
const descriptionInput = editModal.querySelector("#profile-description-input");

const cardModal = document.querySelector("#add-card-modal");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function openModal(modal) {
    modal.classList.add("modal_opened");
};

function closeModal(modal) {
    modal.classList.remove("modal_opened");
};

function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent = nameInput.value;
    profileDescriptionEl.textContent = descriptionInput.value;
    closeModal(editModal);
};

function getCardElement(data) {
    const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
    const cardNameEl = cardElement.querySelector(".card__title");
    const cardImageEl = cardElement.querySelector(".card__image");

    cardNameEl.textContent = data.name;
    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;
    
    return cardElement;
};

editModalBtn.addEventListener("click", () =>  {
    nameInput.value = profileNameEl.textContent;
    descriptionInput.value = profileDescriptionEl.textContent;
    openModal(editModal);
});

editModalCloseBtn.addEventListener("click", () => {
    closeModal(editModal);
});

cardModalBtn.addEventListener("click", () =>  {
    openModal(cardModal);
});

cardModalCloseBtn.addEventListener("click", () => {
    closeModal(cardModal);
});

editForm.addEventListener("submit", handleEditFormSubmit);

initialCards.forEach((item) => {
    const cardElement = getCardElement(item);
    cardsList.append(cardElement);
});