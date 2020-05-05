import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [data, setData] = useState([]);
const [url, setUrl] = useState(['https://rickandmortyapi.com/api/character/?page=1'])

useEffect( () =>{

  axios.get(url)
  .then( (response) =>{
    console.log(response.data.results);
    setData(response.data.results)
  })
  .catch((err) => {
    console.log(err);
  })
}, [url])




  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map((charItem)=>{
         return (
          <Character 
          image={charItem.image}
          name={charItem.name}
          status={charItem.status}
          species={charItem.species}
          gender={charItem.gender}
          />
         )
      })}

    </div>
  );
}

export default App;
