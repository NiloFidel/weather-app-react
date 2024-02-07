const carousel = document.querySelector("")
const dragging = (e) => {
    console.log(e.pageX)
}
carousel.addEventListener("mouseMove", dragging)