const carrusel = document.querySelector(".producto-img"),
firstImg = carrusel.querySelectorAll("img") [0];
arrowIcons = document.querySelectorAll(".contenedor1 i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWhidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carrusel.scrollLeft += icon.id == "izquierda" ?- firstImgWhidth : firstImgWhidth;
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carrusel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    console.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carrusel.addEventListener("mousedown", dragStart);
carrusel.addEventListener("mousemove", dragging);
carrusel.addEventListener("mouseup", dragStop);
