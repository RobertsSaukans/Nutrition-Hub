document.addEventListener('DOMContentLoaded', function () {
    var moreInfoButton = document.getElementById('more');
    var infoBlock = document.getElementById('more-info');
    var contactForm = document.getElementById('contact-form');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var dateInput = document.getElementById('date');
    var addElementButton = document.getElementById('add');
    var removeElementButton = document.getElementById('remove');

    
    contactForm.addEventListener('submit', function (event) {

        // Validate name
        var nameRegex = /^[a-zA-Z]+$/;
        if (!nameRegex.test(nameInput.value)) {
            alert('Please enter your name (only letters)');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Validate email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Validate date
        var selectedDate = new Date(dateInput.value);
        var currentDate = new Date();

        if (selectedDate > currentDate || !dateInput.value) {
            alert('Please enter a valid date (not in the future)');
            event.preventDefault(); // Prevent form submission
            return;
        }
        
    });


    moreInfoButton.addEventListener('click', function () {
        toggleVisibility(infoBlock);
    });

    function toggleVisibility(element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }


    var jsonContent = {
        paragraph: '© 2024 Nutrition Hub. All rights reserved.'
    };

    // Function to create DOM elements from JSON
    function createElementsFromJSON(json) {
        var container = document.getElementById('footer');

        // Create paragraph
        var paragraphElement = document.createElement('p');
        paragraphElement.textContent = json.paragraph;
        container.appendChild(paragraphElement);
    }

    // Call the function with our JSON object
    addElementButton.addEventListener('click', function () {
        createElementsFromJSON(jsonContent);
    });

    // Manipulating the DOM using jQuery
    removeElementButton.addEventListener('click', function () {
        $('#footer').children().first().remove(); // Removing the first child of the footer using jQuery
    });

});
