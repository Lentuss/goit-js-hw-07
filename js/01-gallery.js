import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const createGallery = () => {
    galleryItems.map(({ preview, original, description }) => {

    const galleryItem = `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
        
gallery.insertAdjacentHTML('afterbegin', galleryItem);
    })
}

createGallery();

let instance;

const showImage = (e) => {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
    return;
  }

const imageOnClick = e.target.dataset.source;   
 
instance = basicLightbox.create(`
    <div class="modal">
         <img src="${imageOnClick}" width="800" height="600">
    </div>
`)

instance.show()

const visible = basicLightbox.visible();
    
if (visible) {
    const keyboardClose = e => {
    e.preventDefault();
    if (e.code === "Escape") {
        instance.close();
    }
}
gallery.addEventListener("keydown", keyboardClose);
    }
}

gallery.addEventListener("click", showImage);

console.log(galleryItems);
