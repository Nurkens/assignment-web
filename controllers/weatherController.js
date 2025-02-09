import axios from "axios";

class WeatherController {
    async getWeather(req, res) { // ✅ Fix parameter order
        try {
            const { city } = req.params;
            if (!city) {
                return res.status(400).json({ message: "City is required" });
            }

            const apiKey = process.env.OPENWEATHER_API_KEY;
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );

            const weatherData = {
                city: response.data.name,
                temperature: `${response.data.main.temp}°C`,
                condition: response.data.weather[0].description,
            };

            res.status(200).json(weatherData);
        } catch (e) {
            console.error("Error fetching weather data:", e.response?.data || e.message);
            res.status(500).json({ message: "Failed to fetch weather data" });
        }
    }
}

export default new WeatherController();
