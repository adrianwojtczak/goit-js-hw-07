import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Add gallery to html
const galleryWrapper = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = preview;
  galleryImage.dataset.source = original;
  galleryImage.alt = description;

  galleryWrapper.append(galleryItem);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
});

// Basic Lightbox

const onImageClick = (e) => {
  if (!e.target.matches("img")) {
    return;
  }

  e.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
};

galleryWrapper.addEventListener("click", onImageClick);
