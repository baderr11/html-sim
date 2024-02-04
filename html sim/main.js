function handleSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if(name == "") {
        alert('Your Name cannot be empty');
        return false;
    }
    if(email == "") {
        alert('Your Email cannot be empty');
        return false;
    }
    alert('Your message have been sent successfully')
    return false;
}