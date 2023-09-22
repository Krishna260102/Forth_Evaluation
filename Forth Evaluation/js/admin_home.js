document.addEventListener('DOMContentLoaded', function() {
    // Function to handle redirection to admin_actions.html
    document.getElementById('viewRequestsTab').addEventListener('click', function() {
        window.location.href = 'admin_actions.html';
    });

    // Function to handle logout
    document.getElementById('logout').addEventListener('click', function() {
        window.location.href = 'login.html';
    });

});