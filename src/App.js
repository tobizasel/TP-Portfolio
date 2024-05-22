import Header from './components/header';
import Section from './components/Main'
import Acerca from './components/Acerca';
import Conocimientos from "./components/Conocimientos"
import Experiencia from './components/Experiencia';
import './App.css';

function App() {
  return (
    <div className="body">
      <Header/>
      <Section/>
      <Acerca/>
      <Conocimientos/>
      <Experiencia/>
    </div>
  );
}

export default App;
