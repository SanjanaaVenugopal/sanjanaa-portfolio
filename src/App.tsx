
import './App.css';
import './index.css';
import { Welcome } from './Components/Welcome/Welcome';
import { CommandBar } from './Components/CommandBar/CommandBar';
import { Footer } from './Components/Footer/Footer';
import { Skills } from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <CommandBar />
      <Welcome />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
