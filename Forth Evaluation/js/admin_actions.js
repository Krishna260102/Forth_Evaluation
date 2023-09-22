function approveRequest(requestId) {
    // Logic to approve the request with id 'requestId'
    console.log('Request with ID ' + requestId + ' approved.');
}

function rejectRequest(requestId) {
    // Logic to reject the request with id 'requestId'
    console.log('Request with ID ' + requestId + ' rejected.');
}

function putOnHold(requestId) {
    // Logic to put the request with id 'requestId' on hold
    console.log('Request with ID ' + requestId + ' put on hold.');
}

// Function to handle logout
document.getElementById('goback').addEventListener('click', function () {
    window.location.href = 'admin_home.html';
});