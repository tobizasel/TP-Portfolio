import Header from './components/header';
import Section from './components/Main'
import Acerca from './components/Acerca';
import Conocimientos from "./components/Conocimientos"
import './App.css';

function App() {
  return (
    <div className="body">
      <Header/>
      <Section/>
      <Acerca/>
      <Conocimientos/>
    </div>
  );
}

export default App;
