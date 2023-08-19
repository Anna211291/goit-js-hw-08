// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`).join("") 
}

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

let galleryModal = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});
galleryModal.on('show.simplelightbox', function () {

});
