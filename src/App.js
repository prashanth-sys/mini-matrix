// App.js
import {Switch, Route} from 'react-router-dom'
import EmojiGame from './components/EmojiGame'
import MemoryMatrix from './components/MemoryMatrix'
import Home from './components/Home'
import GamingComponents from './components/GamingComponents'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/emoji/game" component={EmojiGame} />
    <Route exact path="/memory/game" component={MemoryMatrix} />
    <Route exact path="/rock/paper/scissor/game" component={GamingComponents} />
  </Switch>
)

export default App
