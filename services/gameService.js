import axios from 'axios';

export async function fetchGamesData() {
  try {
    const response = await axios.get('https://h5games.online/freegames.json');
    console.log("API Response:", response.data); // Log the data
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Re-throw the error to be caught in the Home component
  }
}
