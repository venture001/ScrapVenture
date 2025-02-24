function scrollToForm() {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
}

function selectCategory(category) {
    document.getElementById('category').value = category;
}

function submitForm(event) {
    event.preventDefault();
    alert('Form submitted! Our team will contact you soon.');
    document.getElementById('pickupForm').reset();
}
