
import './App.css';
import './index.css';
import { Welcome } from './Components/Welcome/Welcome';
import { CommandBar } from './Components/CommandBar/CommandBar';

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
