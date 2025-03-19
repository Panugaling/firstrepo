document.addEventListener("DOMContentLoaded", () => {
    const characterContainer = document.createElement("div");
    characterContainer.id = "character-container";
    document.body.insertBefore(characterContainer, document.querySelector("ul"));
    
    const baseCharacter = document.createElement("img");
    baseCharacter.id = "character";
    baseCharacter.src = "./assets/character.png";
    baseCharacter.style.position = "absolute";
    baseCharacter.style.zIndex = "1";
    characterContainer.appendChild(baseCharacter);

    const armorParts = {
        helmet: null,
        armor: null,
        leggings: null,
        boots: null
    };
    
    document.querySelectorAll(".armor-options img").forEach(img => {
        img.addEventListener("click", () => {
            const part = img.getAttribute("data-part");
            armorParts[part] = img.src;
            updateCharacter();
            highlightSelection(img);
        });
    });
    
    function updateCharacter() {
        document.querySelectorAll(".equipped-armor").forEach(el => el.remove());
        
        Object.entries(armorParts).forEach(([part, src]) => {
            if (src) {
                const img = document.createElement("img");
                img.src = src;
                img.classList.add("equipped-armor", part);
                img.style.position = "absolute";
                img.style.zIndex = "2";
                img.style.width = "100px";
                img.style.height = "auto";
                
                switch (part) {
                    case "helmet":
                        img.style.top = "-10px";
                        img.style.left = "0px";
                        break;
                    case "armor":
                        img.style.top = "30px";
                        img.style.left = "0px";
                        break;
                    case "leggings":
                        img.style.top = "80px";
                        img.style.left = "0px";
                        break;
                    case "boots":
                        img.style.top = "130px";
                        img.style.left = "0px";
                        break;
                }
                
                characterContainer.appendChild(img);
            }
        });
    }
    
    function highlightSelection(selectedImg) {
        document.querySelectorAll(`[data-part="${selectedImg.getAttribute("data-part")}"]`).forEach(img => {
            img.classList.remove("selected");
        });
        selectedImg.classList.add("selected");
    }
    
    characterContainer.style.position = "relative";
    characterContainer.style.width = "100px";
    characterContainer.style.height = "200px";
    characterContainer.style.margin = "auto";
});
