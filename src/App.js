
import './App.css';


import { EjemploClase } from './components/EjemploClase/EjemploClase';
import NavBar from './components/NavBar/NavBar';
import Title from './components/EjemploClase/Title';
import ItemListContainer from './container/ItemListContainer';



function App() {

const style ={ backgroundColor: 'grey'}
let title ="soy titulo"
let greeting ="greeting"
  return (
    <>
      <div className ="App" style={style}>

    
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
      <Title title ={title}/>
      <EjemploClase />
      </div>
    </>
  );
}

export default App;
