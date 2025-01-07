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
