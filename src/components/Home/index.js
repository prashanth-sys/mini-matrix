// Home.js
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-container">
    <h1>Games</h1>
    <ul className="card-container">
      <li>
        <Link to="/emoji/game">
          <div className="game-card">
            <h1>Emoji Game</h1>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/memory/game">
          <div className="game-card">
            <h1>Memory Matrix</h1>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/rock/paper/scissor/game">
          <div className="game-card">
            <h1>Rock Paper Scissor</h1>
          </div>
        </Link>
      </li>
    </ul>
  </div>
)

export default Home
