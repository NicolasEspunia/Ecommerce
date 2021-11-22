
import './App.css';


import { useEffect, useState } from 'react';
import { EjemploClase } from './components/EjemploClase/EjemploClase';
import NavBar from './components/NavBar/NavBar';
import Title from './components/EjemploClase/Title';
import ItemListContainer from './container/ItemListContainer';






//ejercicio Promise 
const productos =[
  
  {id: 1, name:'monitor',description:'fullHd',price:1000,imagen1:'./components/imagenes/450_1000.jpg',},
  {id: 2, name:'teclado',description:'tecladoRgb',price:500,imagen2:'./components/imagenes/450_1000.jpg',},
  {id: 3, name:'comboGamer',description:'kitGamer',price:1500,imagen3:'./components/imagenes/450_1000.jpg',},
];
const fetchProductos = new Promise((acept,reject)=>{
  setTimeout(()=>{
    if (productos.length> 0){
      acept(productos);
    }else{
      reject('No hay productos');
    }
  },3000);
});



//fin ejercicio Promise



function App() {
  const[productos,setProductos]= useState([])
  const [bool,setBool]=useState(true)
  useEffect(()=>{

    fetchProductos
    .then(data => {
      console.log('llamada a la api')
      setProductos(data)
    })
    .catch(err =>console.log(err))
    .finally(()=> console.log('se ejecuta al final'))
    return () =>{
      console.log('clean')
    }
  })
  

console.log(productos)
// ------    contador....
//   const estado= useState(0)

 
//   useEffect(()=>{
//     console.log('api')
//   },[count])

//   const handlerClick=()=>{ 
//     setCount(count + 1)
//     console.log(count)
//   }


const style ={ backgroundColor: 'grey'}
let title ="soy titulo"
let greeting ="greeting"
  return (
    <>
      <div className ="App" style={style}>

    
      <NavBar/>
      <Title title ={title}/>
      <EjemploClase />
      {/* {count}<button onClick={handlerClick}>Click</button> */}
     
      <ItemListContainer greeting={greeting}/>
    <button onClick={()=> setBool(!bool)}>click</button>
      </div>
      {productos.map((prod) =><div key={prod.id}>
                                <div>{prod.name}</div>
                                <div><img src={prod.imagen1}alt="foto"></img>
                                {prod.price}
                                </div>

      </div> )}

      
    </>
  );
}

export default App;
