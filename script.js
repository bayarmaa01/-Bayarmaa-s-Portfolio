function handleSubmit(event) {
    event.preventDefault(); 
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('contactForm').reset();

    return false; 
}

