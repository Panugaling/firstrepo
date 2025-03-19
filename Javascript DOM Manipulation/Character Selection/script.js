document.addEventListener("DOMContentLoaded", () => {
    const characters = document.querySelectorAll(".character");
    const charName = document.getElementById("char-name");
    const charImage = document.getElementById("char-image");

    characters.forEach(character => {
        character.addEventListener("click", function() {
            document.querySelectorAll(".character").forEach(char => char.classList.remove("selected"));
            
            this.classList.add("selected");

            charName.textContent = this.getAttribute("data-name");
            charImage.src = this.getAttribute("data-img");
            charImage.alt = this.getAttribute("data-name");
        });
    });
});
