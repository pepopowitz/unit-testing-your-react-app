import React from 'react';

export default function BeerStyle({ beerStyle }) {
    if (!beerStyle) {
        return null;
    }

    return (
        <aside class="beer-style">
            <h1>
                {beerStyle}
            </h1>
        </aside>
    );
}
