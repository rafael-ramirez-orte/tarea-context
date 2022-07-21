import { useContext } from 'react';
import './App.css';
import ComponenteHijo from "./componentes/ComponenteHijo";
import {GlobalContext} from "./context/global/global.context";
import mifoto from '../src/assets/mifoto.jpeg';
import {FaReact, FaAngular, FaCss3, FaNodeJs} from 'react-icons/fa'; 


function App() {
  const { add, substract} = useContext (GlobalContext);
 
  return (
    <div className="App">
      <div className='menu'>
        <nav className='nav'>
           <ul>
            <li><a className='me' href='#'>Home</a></li>
            <li><a className='me' href='#'>Inglés</a></li>
            <li><a className='me' href='#'>Español</a></li>
          </ul>
        </nav>
      </div>
      <div className='img'>
          <img src={mifoto}
        />
        </div>
        <br/>
      <header className="App-header">
        <h1 className='titulo'>Rafael Ramirez Ortega</h1>
        <br/>
        <p className='parrafo'>Soy una persona tranquila, lo que me gusta es ver peliculas de Netflix, 
         acabando mi carrea espero tener un trabajo estable y poder seguir aprendiendo</p>
        <br/> 
        <button  className=' btn'
          style={{
            padding:'2%',
            width: "13vn", 
            backgroundColor:"green", 
            cursor: "pointer",
            margin:"1vn"
            
          }} 
          onClick={add}>Contar vistas</button>
        
        <ComponenteHijo />

      <a className="icon" href="#"><FaReact/></a>
      <a className="icon" href="#"><FaAngular/></a>
      <a className="icon" href="#"><FaCss3/></a>
      <a className="icon" href="#"><FaNodeJs/></a>
            
      </header>
      
    </div>
  );

}



export default App;
