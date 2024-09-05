document.getElementById('trip-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const people = document.getElementById('people').value;

    alert(`Trip Planned!\nDestination: ${destination}\nDate: ${date}\nNumber of People: ${people}`);
});
