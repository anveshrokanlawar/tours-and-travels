function scrollPackages(direction) {
    const packageList = document.querySelector('.package-list');
    const packageWidth = document.querySelector('.package').offsetWidth + 20; // Width of a package plus margin
    const totalPackages = document.querySelectorAll('.package').length;
    const containerWidth = document.querySelector('.package-scroll-container').offsetWidth;

    // Calculate the max scroll position
    const maxScroll = (totalPackages * packageWidth) - containerWidth;

    let newScroll = packageList.scrollLeft + (direction * packageWidth * 3); // Scroll 3 packages at a time

    // Ensure the new scroll position is within bounds
    newScroll = Math.max(0, Math.min(newScroll, maxScroll));

    // Apply the new scroll position
    packageList.scrollLeft = newScroll;
}

(function() {
    emailjs.init('TDvjSxhyGxD6n9MAX'); // Replace with your actual EmailJS user ID
})();


    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('.enquiry-form form');  // Use the correct form selector

        form.addEventListener('submit', function (event) {
            event.preventDefault();  // Prevent the default form submission

            emailjs.sendForm('xmd5zzc', 'pjlb1y6', form)  // Replace with actual service ID and template ID
                .then(function(response) {
                    showThankYouModal();  // Show the thank you modal on successful submission
                    form.reset();
                }, function(error) {
                    showErrorModal();  // Show error modal if something goes wrong
                    console.log(error);
                });
        });
    });

    // Function to show the thank you modal
    function showThankYouModal() {
        const modal = document.getElementById('thank-you-modal');
        const modalMessage = modal.querySelector('.modal-message');
        modalMessage.textContent = 'Thank you for your enquiry. Our team will get in touch with you soon.';
        modal.style.display = 'block';
    }

    // Function to show the error modal
    function showErrorModal() {
        const modal = document.getElementById('error-modal');
        const modalMessage = modal.querySelector('.modal-message');
        modalMessage.textContent = 'Oops! Something went wrong. Please try again.';
        modal.style.display = 'block';
    }

    // Close modal function
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }

