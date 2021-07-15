import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Media from './components/Media'
import Date from './components/Date'
import Title from './components/Title'
import Explanation from "./components/Explanation"


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
      <div className='header'>
        <Title title={nasaData.title}/>
      </div>
      <Media url={nasaData.url} mediaType={nasaData.media_type}/>
      <div className='bottom'>
        <Date date={nasaData.date}/>
        <Explanation explanation={nasaData.explanation}/>
      </div>
    </div>
  );
}

export default App;
