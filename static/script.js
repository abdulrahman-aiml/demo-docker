document.addEventListener("DOMContentLoaded", () => {
    const servicesBtn = document.getElementById("servicesBtn");
    const servicesSection = document.getElementById("services");
    const animateBtn = document.getElementById("animateBtn");

    // Show services section with animation
    servicesBtn.addEventListener("click", (event) => {
        event.preventDefault();
        servicesSection.style.display = "block";
        setTimeout(() => {
            servicesSection.classList.remove("hidden");
        }, 100);
    });

    // Button click animation
    animateBtn.addEventListener("click", () => {
        animateBtn.style.transform = "rotate(360deg)";
        setTimeout(() => {
            animateBtn.style.transform = "rotate(0deg)";
        }, 500);
    });
});
