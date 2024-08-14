// components/GameGrid.js
const GameGrid = ({ title, games }) => {
    // Check if games array is received and not empty
    if (!games || games.length === 0) {
      return <p className="text-white">No games available in this category.</p>;
    }
  
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {games.map((game) => (
            <div key={game.guid} className="bg-gray-700 p-4 rounded-lg">
              <a href={game.link} target="_blank" rel="noopener noreferrer">
                <img src={game.thumb} alt={game.title} className="rounded-md mb-2" />
                <h3 className="text-white">{game.title}</h3>
              </a>
              <p className="text-gray-400 text-sm">{game.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default GameGrid;
  