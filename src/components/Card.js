import React from 'react';

const Card = (props ) => {

    const {country} = props;

    const numberFormat = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      };
    return (
        <li className="card">
            <img src={country.flags.png} alt="flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name.common}</li>
                    <li>{country.capital}</li>
                    <p>Pop. {numberFormat(country.population)}</p>
                </ul>
            </div>
        </li>
    );
};

export default Card;