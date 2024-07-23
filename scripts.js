function copyEmail(event) {
    event.preventDefault(); // Prevent the default mailto action
    const email = event.target.innerText;
    navigator.clipboard.writeText(email).then(() => {
        alert('Email address copied to clipboard!');
        // You can optionally open the mail client here
        window.location.href = `mailto:${email}`;
    }).catch(err => {
        console.error('Failed to copy email address: ', err);
    });
}
