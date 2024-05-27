import Header from './components/header';
import Section from './components/Main'
import Acerca from './components/Acerca';
import Conocimientos from "./components/Conocimientos"
import Experiencia from './components/Experiencia';
import Recomedacion from './components/Recomendacion';
import Educacion from './components/Educacion'
import Certificaciones from './components/Certificaciones'
import Form from './components/Form'
import Footer from './components/Folder'
import './App.css';

function App() {
  return (
    <div className="body">
      <Header/>
      <Section/>
      <Acerca/>
      <Conocimientos/>
      <Experiencia/>
      <Recomedacion/>
      <Educacion/>
      <Certificaciones/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
