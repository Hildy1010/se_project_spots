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
const cardForm = cardModal.querySelector(".modal__form");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
const cardNameInput = cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");

const previewModal = document.querySelector("#preview-modal");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-icon");

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

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    const inputValues = { name: cardNameInput.value, link: cardLinkInput.value };
    const cardEl = getCardElement(inputValues);
    cardsList.prepend(cardEl);
    cardForm.reset();
    closeModal(cardModal);
};

function getCardElement(data) {
    const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
    const cardNameEl = cardElement.querySelector(".card__title");
    const cardImageEl = cardElement.querySelector(".card__image");
    const cardLikeBtn = cardElement.querySelector(".card__like-btn");

    cardNameEl.textContent = data.name;
    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;

    cardLikeBtn.addEventListener("click", () => {
        cardLikeBtn.classList.toggle("card__like-btn_liked");
    });

    cardImageEl.addEventListener("click", () => {
        openModal(previewModal);
        previewModalImageEl.src = data.link;
        previewModalImageEl.alt =  data.name;
        previewModalCaptionEl.textContent = data.name;
    });
    
   const cardDeleteIconEl = cardElement.querySelector(".card__delete-icon");
   cardDeleteIconEl.addEventListener("click", () => {
    cardDeleteIconEl.closest(".card").remove();
   });
    
   return cardElement;
};

previewModalCloseBtn.addEventListener("click", () =>{
    closeModal(previewModal);
});

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
cardForm.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach((item) => {
    const cardElement = getCardElement(item);
    cardsList.append(cardElement);
});