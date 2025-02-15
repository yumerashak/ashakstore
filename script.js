document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute("data-hover");

        img.addEventListener("mouseover", function() {
            img.src = hoverSrc;
        });

        img.addEventListener("mouseout", function() {
            img.src = originalSrc;
        });
    });
});
