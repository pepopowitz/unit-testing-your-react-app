import React from 'react';

import Brewery from './Brewery';
import BeerStyle from './BeerStyle';

export default function Beer({ beer }) {
    return (
        <article className="beer">
            <h1>
                {beer.name}
            </h1>

            <Brewery brewery={beer.brewery} />
            <BeerStyle beerStyle={beer.beerStyle} />
        </article>
    );
}
