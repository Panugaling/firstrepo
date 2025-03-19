document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nameInput").addEventListener("input", updateName);
    document.getElementById("bioInput").addEventListener("input", updateBio);
    document.getElementById("imageInput").addEventListener("change", updateImage);
    document.getElementById("bgColorInput").addEventListener("input", previewBgColor);
    document.getElementById("updateBgButton").addEventListener("click", updateBgColor);
    document.getElementById("updateProfileButton").addEventListener("click", updateProfileCard);
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

function updateProfileCard() {
    updateName();
    updateBio();
    updateImage();
    updateBgColor();
}

// Add event listener to the update button
updateButton.addEventListener('click', () => {
    updateName();
    updateBio();
    updateImage();
    updateBgColor();
});