document.addEventListener('DOMContentLoaded', function() {
    var fromDateInput = document.getElementById('fromDate');
    var toDateInput = document.getElementById('toDate');
    var noOfDaysInput = document.getElementById('noOfDays');

    var empIdInput = document.getElementById('empId');
    var empNameInput = document.getElementById('empName');
    var projectInput = document.getElementById('project');
    var travelCauseInput = document.getElementById('travelCause');
    var sourceInput = document.getElementById('source');
    var destinationInput = document.getElementById('destination');
    var modeOfTravelInput = document.getElementById('modeOfTravel');

    var today = new Date();
    var maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 60);

    function calculateNumberOfDays() {
        var fromDate = new Date(fromDateInput.value);
        var toDate = new Date(toDateInput.value);

        if (!isNaN(fromDate.getTime()) && !isNaN(toDate.getTime())) {
            var timeDiff = toDate - fromDate;
            var dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

            if (dayDiff >= 0) {
                noOfDaysInput.value = dayDiff;
            } else {
                alert("To Date must be after From Date.");
                noOfDaysInput.value = "";
            }
        }
    }

    fromDateInput.addEventListener('change', function() {
        var selectedDate = new Date(this.value);

        if (selectedDate < today || selectedDate > maxDate) {
            alert("Please select a date within the next 60 days.");
            this.value = "";
        }

        calculateNumberOfDays();
    });

    toDateInput.addEventListener('change', function() {
        var selectedDate = new Date(this.value);

        if (selectedDate < today || selectedDate > maxDate) {
            alert("Please select a date within the next 60 days.");
            this.value = "";
        }

        calculateNumberOfDays();
    });

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate other fields here
        if (empIdInput.value.trim() === '' ||
            empNameInput.value.trim() === '' ||
            projectInput.value.trim() === '' ||
            travelCauseInput.value.trim() === '' ||
            sourceInput.value.trim() === '' ||
            destinationInput.value.trim() === '' ||
            fromDateInput.value.trim() === '' ||
            toDateInput.value.trim() === '' ||
            modeOfTravelInput.value.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Process form submission here

        document.getElementById('form').style.display = 'none';
        document.getElementById('userView').style.display = 'block';
    });

    document.getElementById('backToForm').addEventListener('click', function() {
        document.getElementById('form').style.display = 'block';
        document.getElementById('userView').style.display = 'none';
    });

    document.getElementById('logout').addEventListener('click', function() {
        window.location.href = 'employee_home.html';
    });
});
