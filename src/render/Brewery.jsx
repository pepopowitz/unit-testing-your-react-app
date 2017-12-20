import React from 'react';

export default function Brewery({ brewery }) {
    if (!name) {
        return null;
    }
    return (
        <h2 className="brewery">
            {brewery}
        </h2>
    );
}
