import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] =  useState(40);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ['Africa, America, Asia, Europe, Oceania']
    useEffect(
        () => {
            if (playOnce) {
            axios
            .get('https://restcountries.com/v3.1/all')
            .then(
             (res) => {setData(res.data);
             setPlayOnce(false);
            });  
            }
             const sortedCountry = () => {
                 const countryObjet = Object.keys(data).map((i) => data[i]);
                 const sortedArray = countryObjet.sort((a,b) => {
                     return b.population - a.population;
                 });
                 sortedArray.length = rangeValue;
                 setSortedData(sortedArray);
                };
             sortedCountry();
        }, [data,rangeValue, playOnce]);
  
    return (
           <div className='countries'>
               <div className='sort-container'>
                    <ul className="radio-container">
                    <input type="range" min='1' max='250'  onChange={ (e) => setRangeValue(e.target.value)} />
                    {radios.map((continent, index) => (
                     <li key={index}>
                    <input
                    type="radio"
                    name="continent"
                    id={continent}
                    checked={continent === selectedRadio}
                    onChange={(e) => setSelectedRadio(e.target.id)}
                    />
                    <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
             </ul>
               </div>
            
                <ul className='countires-list'>
                        {sortedData.map(
                            (country) =>(
                                <Card country={country}  key ={country.name} />
                                )
                        )}
                </ul>
           </div>
    );
};

export default Countries;