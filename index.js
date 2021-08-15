document.getElementById('login-btn').addEventListener('click', function(){
    // Get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user PASSWORD
    const passField = document.getElementById('user-pass');
    const userPassword = passField.value;
    // security check
    if(userEmail == 'mahi121.mr@gmail.com' && userPassword == 'secret'){
        window.location.href = 'banking.html'; 
    }
});