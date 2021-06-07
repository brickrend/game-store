import './products'
import './App.css';
import games from './products';

const gamesList = games.map((game) => 
  <div className ="game-margin" key= {game.id}>
    <img className = "image-List" src = {game.image}/>
    <p className = "text">{game.name}</p>
    <p className = "text">{game.price}</p>
  </div>
)

function App() {
  return (
    <div>
      <h1 className="text">Game Store</h1>
      <h2 className="text">Made by gamers for gamers</h2>
      <img id="image-s" src ="https://tessla.org/wp-content/uploads/2017/06/db3c6932ab7f48aa37911fa229efa7ba-2.jpg"/>

      <div className ="list">
          {gamesList}
      </div>
    </div>
  );
}

export default App;
