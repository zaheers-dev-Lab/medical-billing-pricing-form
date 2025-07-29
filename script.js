const slider = document.getElementById("pricingSlider");
const textContainer = document.querySelector(".text-container");
const h2Element = textContainer.querySelector("h2");

slider.addEventListener("input", () => {
    const sliderValue = parseInt(slider.value);
    const sliderWidth = slider.offsetWidth;
    const textContainerWidth = textContainer.offsetWidth;

    const newLeftPosition = (sliderValue / 200) * (sliderWidth - textContainerWidth);
    textContainer.style.left = newLeftPosition + "px";

    // Update the Collecions text based on slider value
    if (sliderValue <= 50) {
        h2Element.textContent = "$50k";
    } else if (sliderValue <= 100) {
        h2Element.textContent = "$100k";
    } else if (sliderValue <= 150) {
        h2Element.textContent = "$5M+";
    } else {
        h2Element.textContent = "$10M+";
    }
});
