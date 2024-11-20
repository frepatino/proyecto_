import React from 'react';
import './App.css';
import Profile from './Profile';



function App(){
    return (
        
        <div className='App'>
            <img className='header_logo' src="https://rupiv.edu.co/wp-content/uploads/2024/02/nuevo-logo-minciencias.png"/>
            
            <h1>FORMULARIO</h1>
           <Profile/>
            
            <form>
         
                <legend>Registrate:</legend>
                <label  for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required/><br></br>
                <label for="email">Correo @ :</label>
                <input type="text" id="correo" name="correo" required/><br></br>
                <label for="email">Contraseña</label>
                <input type="text" id="contraseña" name="contraseña" required/><br></br>
                <button type='submit' value="Aceptar">Aceptar</button>
            </form>
          
        </div>
    );
}


export default App;





