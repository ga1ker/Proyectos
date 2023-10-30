const container = document.querySelector('.container');
const image = document.querySelector('#image')
const guardar = document.querySelector('#guardadito')

function setImage(e){
    const imageSrc= e.target.src;
    image.src= imageSrc;
}


container.addEventListener('click', setImage)

document.addEventListener("DOMContentLoaded", function() {
    let currentImageSrc = "";

    const imgThumbnails = document.querySelectorAll(".img-thumbnail");
    const modalImage = document.getElementById("image");
    const guardarButton = document.getElementById("guardadito");

    imgThumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            currentImageSrc = thumbnail.getAttribute("src");
            modalImage.setAttribute("src", currentImageSrc);
        });
    });

    guardarButton.addEventListener("click", () => {
        if (currentImageSrc) {
            // Crear un enlace invisible para descargar la imagen
            const a = document.createElement("a");
            a.style.display = "none";
            document.body.appendChild(a);
            a.href = currentImageSrc;
            a.download = "imagen.jpg";
            a.click();
            document.body.removeChild(a);
        }
    });
});