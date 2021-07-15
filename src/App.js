import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Media from './components/Media'


function App() {
  const [nasaData, setNasaData] = useState([])

useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZLHk8WPKa5mUEAwlqtODOQg9bL4ATkak0B5zInQD`)
    .then(res => {
      console.log(res.data)
      setNasaData(res.data)
    })
    .catch(err => console.log(err))
  return () => console.log('Pulling in some data')
},[])

  return (
    <div className="App">
      <div>
        
      </div>
      <div>
        <Media url={`${nasaData.url}?rel=0&amp;autoplay=1&mute=1`}/>
      </div>
      <div>

      </div>
      
    </div>
  );
}

export default App;
