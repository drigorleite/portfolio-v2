document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("navbar-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("open");
        });
    }

    // Chama a função de clima quando o DOM estiver pronto
    getWeather();
});

//API WEATHER
async function getWeather() {
    const apiKey = "9d9bb80b98aa4afca28184756253001";
    const city = "Berrien Springs";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("Weather API Response:", data);

        const temp = data.current.temp_c;
        const weatherDesc = data.current.condition.text;
        const icon = data.current.condition.icon;

        document.getElementById("weather").innerHTML = 
            `<p>🌡️ ${temp}°C - ${weatherDesc} <img src="https:${icon}" alt="Weather icon"></p>`;
    } catch (error) {
        console.error("Erro ao buscar clima:", error);
        document.getElementById("weather").innerHTML = "<p>Error fetching weather data</p>";
    }
}

document.addEventListener("DOMContentLoaded", getWeather);

