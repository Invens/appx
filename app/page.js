// app/page.js
import Layout from '../components/Layout';
import GameGrid from '../components/gameGride';
import { fetchGamesData } from '../services/gameService';

export default async function Home() {
  let data;
  try {
    data = await fetchGamesData();
    console.log("Fetched data:", data); // Confirm the data is fetched correctly
  } catch (error) {
    console.error("Failed to fetch games data:", error.message);
    return (
      <div className="text-white p-4">
        <h1 className="text-2xl font-bold">Error Loading Games</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  const categories = data?.categories || [];
  const games = data?.games || [];

  return (
    <Layout categories={categories}>
      {categories.length > 0 ? (
        categories.map((category) => {
          const categoryGames = games.filter(game => game.category === category.name);
          return categoryGames.length > 0 ? (
            <GameGrid
              key={category.name}
              title={category.name}
              games={categoryGames}
            />
          ) : null;
        })
      ) : (
        <p className="text-white">No categories available</p>
      )}
    </Layout>
  );
}
