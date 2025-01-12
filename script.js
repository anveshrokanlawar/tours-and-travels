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
	
		        document.querySelectorAll('.grid-item').forEach(item => {
            let images = item.getAttribute('data-images').split(',');
            let index = 0;
            let interval;

            item.addEventListener('mouseover', () => {
                interval = setInterval(() => {
                    index = (index + 1) % images.length;
                    item.style.backgroundImage = `url(${images[index]})`;
                }, 500);
            });

            item.addEventListener('mouseout', () => {
                clearInterval(interval);
                item.style.backgroundImage = `url(${images[0]})`;
            });
        });

        document.querySelectorAll('.book-now').forEach(button => {
            button.addEventListener('click', () => {
                document.getElementById('booking-modal').style.display = 'flex';
            });
        });

        document.querySelector('.close-modal').addEventListener('click', () => {
            document.getElementById('booking-modal').style.display = 'none';
        });


    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('.modal-content form');  // Use the correct form selector

        form.addEventListener('submit', function (event) {
            event.preventDefault();  // Prevent the default form submission

            emailjs.sendForm('xmd5zzc', '014k9xn', form)  // Replace with actual service ID and template ID
                .then(function(response) {
                    showThankYouModal();  // Show the thank you modal on successful submission
                    form.reset();
                }, function(error) {
                    showErrorModal();  // Show error modal if something goes wrong
                    console.log(error);
                });
        });
    });
	
	    // Function to set the selected grid value
    function setGridValue(gridName) {
        document.getElementById('selectedGrid').value = gridName;
    }

    // Attach the click event to each grid item
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', function() {
            const gridName = item.querySelector('h2').innerText; // Get the grid name (e.g., Telangana, Gujarat)
            setGridValue(gridName); // Set the value of the hidden field
        });
    });
		
		

