import React from 'react';
import './Home.css';
import { Data } from "../../Data/data-ngk";


const Home = () => {
    return (
    <div className='App-header'>
        {Data.map((Home, key) => {
            return(
                <div key ={key}>
                    <h1>{Home.Tittle}</h1>
                    <h2>{Home.SubTittle}</h2>
                    <p>{Home.text}</p>
                    <p>{Home.ngeek}</p>
                </div>
            );
        })}
    </div>
    );
};

export default Home;