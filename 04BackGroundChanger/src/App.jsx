import React, { useState } from 'react'; 
import "./App.css"

function App() {
  const [color, setColor] = useState("black");

  return ( 
    <> 
    <h1>BackGround Color Changer- Mini Project</h1>
    <div className="main-div" style={{ backgroundColor: color }}><p>Color Changes To {color}</p></div>  
    <button onClick={()=> setColor("Red")} style={{backgroundColor:"Red"}}>Red</button>   
    <button onClick={()=> setColor("White")} style={{backgroundColor:"white", color:"black"}}>White</button>   
    <button onClick={()=> setColor("Green")} style={{backgroundColor:"Green"}}>Green</button>   
    <button onClick={()=> setColor("Blue")} style={{backgroundColor:"Blue"}}>Blue</button>   
    <button onClick={()=> setColor("Violet")} style={{backgroundColor:"Violet"}}>Violet</button>
    </>
  );
}

export default App;
