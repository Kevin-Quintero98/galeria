function openModal(imageSrc) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');

    // Set the source of the image
    modalImage.src = imageSrc;

    // Show the modal
    modal.style.display = 'flex'; // Ensure the modal uses flexbox to center content

    // Wait for the image to load before calculating its position
    modalImage.onload = function() {
        // Calculate dimensions
        var modalRect = modal.getBoundingClientRect();
        var imageRect = modalImage.getBoundingClientRect();

        // Calculate center position
        var top = (modalRect.height - imageRect.height) / 2;
        var left = (modalRect.width - imageRect.width) / 2;

        // Center the image
        modalImage.style.position = 'absolute';
        modalImage.style.top = `${top}px`;
        modalImage.style.left = `${left}px`;
    };

    // In case image is cached and onload doesn't fire
    if (modalImage.complete) {
        modalImage.onload();
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
