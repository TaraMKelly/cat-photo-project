import PhotoContainter from './components/PhotoContainer';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  const [catStuff, setCatStuff] = useState([])

  useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': '0232d07e-024c-4fcb-8066-f393754a81b7'
    }
    fetch('https://api.thecatapi.com/v1/images/search?limit=100', {
      headers: headers
    })
      .then((r) => r.json())
      .then((data) => {
        setCatStuff(data)
      })
  }, [])

  //console.log(catStuff)


  return (
    <div className="App">
      <header className="App-header">
        <p>
          ALL OF THE CATS
        </p>
        <PhotoContainter catStuff={catStuff} />
      </header>
    </div>
  );
}

export default App;
