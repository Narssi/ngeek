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
                <h1>{home.Welcome}</h1>
                <h3>{home.NgeekReyes}</h3>
                </div>
               );
           })
       }
    </div>
    );

};

export default Home;