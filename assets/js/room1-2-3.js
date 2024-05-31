//script per caricare la foto a massima risoluzione dopo aver cliccato l'anteprima

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const images = document.querySelectorAll('.gallery-thumb');
    let currentIndex = 0;

    function showModal(index) {
        if (index >= 0 && index < images.length) {
            modal.style.display = 'block';
            modalImg.src = images[index].getAttribute('data-full');
            currentIndex = index;
        }
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            showModal(index);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            showModal(currentIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            showModal(currentIndex + 1);
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
