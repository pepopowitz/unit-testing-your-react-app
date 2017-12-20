import React from 'react';

export default function AddBeerButton({ onClick }) {
    return (
        <button onClick={onClick}>
            Add Beer <i class="fa fa-plus" />
        </button>
    );
}
