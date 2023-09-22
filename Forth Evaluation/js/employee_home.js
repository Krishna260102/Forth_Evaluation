document.addEventListener('DOMContentLoaded', function() {

    // Function to display hardcoded view requests as buttons
    function displayViewRequests(requests) {
        var viewRequestsContainer = document.getElementById('viewRequestsContainer');

        requests.forEach(function(request, index) {
            var requestButton = document.createElement('button');
            requestButton.classList.add('request-item');
            requestButton.textContent = `View Request ${index + 1}`;

            requestButton.addEventListener('click', function() {
                // Handle button click, e.g., redirect to a detailed view page
                // You can use request to get details of the clicked request
                console.log(`Button ${index + 1} clicked! Request Details:`, request);
            });

            viewRequestsContainer.appendChild(requestButton);
        });
    }

    // Event listener for the "View Results" button
    document.getElementById('viewResults').addEventListener('click', function() {
        var resultsContainer = document.getElementById('resultsContainer');
        var resultsDiv = document.getElementById('results');

        // Replace this with your hardcoded results and places
        var hardcodedResults = [
            { place: "Destination 1", result: "Accepted" },
            { place: "Destination 2", result: "On Hold" },
            { place: "Destination 3", result: "Rejected" },
            { place: "Destination 4", result: "Rejected" },
            { place: "Destination 5", result: "On Hold" }
        ];

        // Clear any previous results
        resultsDiv.innerHTML = '';

        // Populate results
        hardcodedResults.forEach(function(data) {
            var resultItem = document.createElement('p');
            resultItem.textContent = `Place: ${data.place}, Result: ${data.result}`;
            resultsDiv.appendChild(resultItem);
        });

        // Show the results container
        resultsContainer.style.display = 'block';
    });

    document.getElementById('viewRequests').addEventListener('click', function() {
        var resultsContainer = document.getElementById('resultsContainer');
        var resultsDiv = document.getElementById('results');
    
        // Hardcoded view requests
        var viewRequests = [
            {
                empId: 'EMP001',
                empName: 'Krishna',
                project: 'Project A',
                travelCause: 'Client Meeting',
                source: 'New York',
                destination: 'Los Angeles',
                fromDate: '2023-09-25',
                noOfDays: 3,
                toDate: '2023-09-27',
                modeOfTravel: 'Flight'
            },
            {
                empId: 'EMP002',
                empName: 'Ram',
                project: 'Project B',
                travelCause: 'Conference',
                source: 'Chicago',
                destination: 'San Francisco',
                fromDate: '2023-10-05',
                noOfDays: 5,
                toDate: '2023-10-09',
                modeOfTravel: 'Train'
            },
            {
                empId: 'EMP003',
                empName: 'Sam',
                project: 'Project B',
                travelCause: 'Conference',
                source: 'Chicago',
                destination: 'San Francisco',
                fromDate: '2023-10-05',
                noOfDays: 5,
                toDate: '2023-10-09',
                modeOfTravel: 'Train'
            },
            {
                empId: 'EMP004',
                empName: 'Damu',
                project: 'Project C',
                travelCause: 'Training',
                source: 'Boston',
                destination: 'Seattle',
                fromDate: '2023-11-15',
                noOfDays: 7,
                toDate: '2023-11-22',
                modeOfTravel: 'Bus'
            },
            {
                empId: 'EMP005',
                empName: 'Sarath',
                project: 'Project D',
                travelCause: 'Client Visit',
                source: 'Miami',
                destination: 'Dallas',
                fromDate: '2023-12-10',
                noOfDays: 4,
                toDate: '2023-12-14',
                modeOfTravel: 'Car'
            }
        ];
    
        // Clear any previous view requests
        resultsDiv.innerHTML = '';
    
        // Display the hardcoded view requests as buttons
        viewRequests.forEach(function(request) {
            var requestButton = document.createElement('button');
            requestButton.textContent = `Request ${request.empId}`;
            requestButton.onclick = function() {
                // Display details when button is clicked
                resultsDiv.innerHTML = `
                    <p>Employee ID: ${request.empId}</p>
                    <p>Employee Name: ${request.empName}</p>
                    <p>Project: ${request.project}</p>
                    <p>Cause for Travel: ${request.travelCause}</p>
                    <p>Source: ${request.source}</p>
                    <p>Destination: ${request.destination}</p>
                    <p>From Date: ${request.fromDate}</p>
                    <p>No of Days: ${request.noOfDays}</p>
                    <p>To Date: ${request.toDate}</p>
                    <p>Mode of Travel: ${request.modeOfTravel}</p>
                `;
            };
            resultsDiv.appendChild(requestButton);
        });
    
        // Show the results container
        resultsContainer.style.display = 'block';
    });
    
    
    // Add event listener for the "New Request" button
    document.getElementById('newRequest').addEventListener('click', function() {
        window.location.href = 'travel_request_form.html';
    });

    // Function to handle logout
    document.getElementById('logout').addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    // Function to handle logout
    document.getElementById('goback').addEventListener('click', function() {
        window.location.href = 'employee_home.html';
    });

});
