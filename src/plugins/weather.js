export const weatherPlugin = {
  async execute(city) {
    if (!city) return { error: 'Please provide a city name.' };
    try {
      const res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
      const data = await res.json();
      const current = data.current_condition?.[0];
      return current ? {
        city,
        temperature: `${current.temp_C}°C`,
        weather: current.weatherDesc?.[0]?.value,
      } : { error: 'Weather data not found.' };
    } catch (e) {
      return { error: 'Failed to fetch weather data.' };
    }
  }
};