// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

subButton = document.getElementById('submit-button')
function clearAndThank() {
    document.getElementById('contact-page').classList.remove('contact')
    document.getElementById('contact-page').classList.add('submitted')
    document.getElementById('contact-page').innerHTML = '<p>Thank you for your message!</p>'
}
subButton.addEventListener('click', clearAndThank);

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

