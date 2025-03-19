document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nameInput").addEventListener("input", updateName);
    document.getElementById("bioInput").addEventListener("input", updateBio);
    document.getElementById("imageInput").addEventListener("change", updateImage);
    document.getElementById("bgColorInput").addEventListener("input", previewBgColor);
    document.getElementById("updateBgButton").addEventListener("click", updateBgColor);

    applyStyles();
});

function updateName() {
    const nameInput = document.getElementById("nameInput").value;
    document.getElementById("profileName").innerText = nameInput;
}

function updateBio() {
    const bioInput = document.getElementById("bioInput").value;
    document.getElementById("profileBio").innerText = bioInput;
}

function updateImage() {
    const imageInput = document.getElementById("imageInput");
    const profileImage = document.getElementById("profileImage");

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(imageInput.files[0]);
    }
}

function previewBgColor() {
    const bgColorInput = document.getElementById("bgColorInput").value;
    document.getElementById("profileCard").style.backgroundColor = bgColorInput;
}

function updateBgColor() {
    const bgColorInput = document.getElementById("bgColorInput").value;
    document.getElementById("profileCard").style.backgroundColor = bgColorInput;
}

function applyStyles() {
    const profileCard = document.getElementById("profileCard");
    profileCard.style.border = "1px solid #ccc";
    profileCard.style.padding = "20px";
    profileCard.style.width = "300px";
    profileCard.style.textAlign = "center";
    profileCard.style.margin = "20px auto";
    profileCard.style.backgroundColor = "#f9f9f9";

    const profileImage = document.getElementById("profileImage");
    profileImage.style.width = "100px";
    profileImage.style.height = "100px";
    profileImage.style.borderRadius = "50%";

    const controls = document.querySelector(".controls");
    controls.style.width = "320px";
    controls.style.margin = "20px auto";
    controls.style.textAlign = "center";
    controls.style.padding = "20px";
    controls.style.border = "1px solid #ccc";
    controls.style.backgroundColor = "#f0f0f0";
    controls.style.borderRadius = "8px";
}