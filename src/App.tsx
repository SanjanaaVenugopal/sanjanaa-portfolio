
import './App.css';
import './index.css';
import { Welcome } from './Components/Welcome/Welcome';
import { CommandBar } from './Components/CommandBar/CommandBar';
import { Footer } from './Components/Footer/Footer';
import { Skills } from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <CommandBar />
      <Welcome />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
