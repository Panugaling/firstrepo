document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('jackInTheBox');
    const button = document.getElementById('toggleButton');

    // Function to toggle the box state
    function toggleBox() {
        if (box.dataset.state === 'closed') {
            box.src = box.dataset.openImage;
            box.dataset.state = 'open';
        } else {
            box.src = box.dataset.closedImage;
            box.dataset.state = 'closed';
        }
    }

    // Event listeners for box click and button press
    box.addEventListener('click', toggleBox);
    button.addEventListener('click', toggleBox);
});