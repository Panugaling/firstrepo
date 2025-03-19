document.addEventListener('DOMContentLoaded', () => {
    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'];
    const colorNameDisplay = document.getElementById('color-name');
    const colorButtonsContainer = document.getElementById('color-buttons');

    colors.forEach(color => {
        const button = document.createElement('button');
        button.innerText = color;
        button.style.backgroundColor = color.toLowerCase();
        button.addEventListener('click', () => {
            document.body.style.backgroundColor = color.toLowerCase();
            colorNameDisplay.innerText = `Selected Color: ${color}`;
            document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
        colorButtonsContainer.appendChild(button);
    });
});