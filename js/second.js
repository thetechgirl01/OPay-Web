    // Get the list options
    const options = document.querySelectorAll('.option');

    // Get the content section
    const contentSection = document.querySelector('.content');

    // Add click event listeners to each option
    options.forEach(option => {
      option.addEventListener('click', function() {
        // Get the target option from the data attribute
        const target = this.dataset.target;

        // Get the corresponding content div
        const content = document.querySelector(`.${target}.option-content`);

        // Clear the existing content in the content section
        contentSection.innerHTML = '';

        // Append the new content to the content section
        contentSection.appendChild(content.cloneNode(true));
      });
    });