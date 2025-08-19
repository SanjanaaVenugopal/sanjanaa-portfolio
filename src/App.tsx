
import './App.css';
import './index.css';
import { Welcome } from './Components/Welcome/Welcome';
import { CommandBar } from './Components/CommandBar/CommandBar';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <CommandBar />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
