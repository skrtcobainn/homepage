const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=34a551b7c616442e85033735230509&q=portland';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const location = data.location.name;
        const tempFahrenheit = data.current.temp_f;
        const conditionText = data.current.condition.text;

        const outputString = `<div class ="weathercontainer"> 
        ${location}, ${conditionText}, ${tempFahrenheit}°</div>`;

        // Set the innerHTML of a specific element with the data
        document.getElementById('weatherInfo').innerHTML = outputString;
    })
    .catch(error => {
        console.error('Error:', error);
    });