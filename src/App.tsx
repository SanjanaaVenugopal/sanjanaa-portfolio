
import './App.css';
import './index.css';
import { Welcome } from './Components/Welcome/Welcome';
import { CommandBar } from './Components/CommandBar/CommandBar';
import { AboutMe } from './Components/AboutMe/AboutMe';

function App() {
  return (
    <header>
      <div className="App">
        <CommandBar />
        <Welcome />
      </div>
    </header>
  );
}

export default App;
