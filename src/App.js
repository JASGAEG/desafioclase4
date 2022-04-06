import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola, este es mi proyecto en React" />
      <ItemCount />
      <hr />
      <div>Curso: React JS
      <hr />
        Alumno: Javier Sosa
        </div>
    </>
  );
}

export default App;