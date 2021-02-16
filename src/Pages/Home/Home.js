import React from 'react';
import './Home.css';
import data from '../../JSONData/data.json';


const Home = () => {

    return (

        <div className='App-header'>
       {
           data.Home.map((home) => {
               return(
                <div className = 'Home'>
                <h1>{home.Tittle1}</h1>
                <h3>{home.Tittle2}</h3>
                <h2>{home.subtittle}</h2>
                <h4>{home.Ngeek}</h4>
                </div>
               );
           })
       }
    </div>
    );
};

export default Home;