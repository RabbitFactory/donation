document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const progressBar = document.getElementById("progressBar");

    if (!carousel || !prevBtn || !nextBtn || dots.length === 0) return;

    let currentIndex = 0;
    const totalSlides = carousel.children.length;

    function updateCarousel(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.remove("w-10", "bg-[#003E92]");
            dot.classList.add("w-6", "bg-[#6b91bc]");
            if (i === index) {
                dot.classList.add("w-10", "bg-[#003E92]");
                dot.classList.remove("w-6", "bg-[#6b91bc]");
            }
        });
    }

    function goToSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel(currentIndex);
        goToSlide(currentIndex);
    }

    function startProgress() {
        if (!progressBar) return;
        progressBar.style.transition = "none";
        progressBar.style.width = "0%";
        void progressBar.offsetWidth;
        progressBar.style.transition = "width 3s linear";
        progressBar.style.width = "100%";

        setTimeout(() => {
            nextSlide();
            startProgress();
        }, 3000);
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel(currentIndex);
        startProgress();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel(currentIndex);
        startProgress();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateCarousel(currentIndex);
            startProgress();
        });
    });

    updateCarousel(currentIndex);
    startProgress();
});
