const zoomContainer = document.getElementById('zoom-container');
const zoomImage = document.getElementById('zoom-image');

zoomContainer.addEventListener('mouseenter', () => {
    zoomImage.style.transform = 'scale(1.5)';
});

zoomContainer.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = zoomContainer.getBoundingClientRect();

    const xPercent = (clientX - left) / width;
    const yPercent = (clientY - top) / height;

    const moveX = (xPercent - 0.5) * (-600); // Ajuste conforme necessário
    const moveY = (yPercent - 0.5) * (-400); // Ajuste conforme necessário

    zoomImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.5)`;
});

zoomContainer.addEventListener('mouseleave', () => {
    zoomImage.style.transform = 'translate(0, 0) scale(1)';
});