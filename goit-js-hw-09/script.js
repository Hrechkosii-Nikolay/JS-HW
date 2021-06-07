import gallery from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  imageModal: document.querySelector(".lightbox__image"),
  closeModalBtn: document.querySelector(".lightbox__button"),
};

// Create gallery
const galleryMarkup = createGalleryMarkup(gallery);
refs.gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

//Event Listeners

refs.gallery.addEventListener("click", onClickItemGallery);
refs.closeModalBtn.addEventListener("click", onCloceModal);

//Callbacks

function onClickItemGallery(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  refs.imageModal.src = e.target.dataset.source;
  refs.imageModal.alt = e.target.alt;
  refs.lightbox.classList.add("is-open");
  window.addEventListener("keydown", onPressEsc);
  refs.lightbox.addEventListener("click", onBackDropClick);
}

function onCloceModal() {
  refs.lightbox.classList.remove("is-open");
  refs.imageModal.src = "";
  refs.imageModal.alt = "";

  //Event Listeners keydown
  window.removeEventListener("keydown", onPressEsc);
  refs.lightbox.removeEventListener("click", onBackDropClick);
}

function onBackDropClick(e) {
  if (e.target.nodeName !== "IMG") {
    onCloceModal(e);
  }
}

function onPressEsc(e) {
  if (e.key === "Escape") {
    onCloceModal(e);
  }
}
