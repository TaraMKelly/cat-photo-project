import PhotoContainter from './components/PhotoContainer';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  const [spaceStuff, setSpaceStuff] = useState([])

  useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': '0232d07e-024c-4fcb-8066-f393754a81b7'
    }
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=100&order=DESC', {
      headers: headers
    })
      .then((r) => r.json())
      .then((data) => {
        setSpaceStuff(data)
      })
  }, [])

  console.log(spaceStuff)


  return (
    <div className="App">
      <header className="App-header">
        <p>
          AYYYOOO WELCOME BACK TK
        </p>
        <PhotoContainter catStuff={spaceStuff} />
      </header>
    </div>
  );
}

export default App;
