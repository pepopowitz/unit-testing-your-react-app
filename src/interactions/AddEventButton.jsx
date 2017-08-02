import React from 'react';

export default function AddEventButton({ onClick }) {
    return (
        <button onClick={onClick}>
            Add Event <i class="fa fa-plus" />
        </button>
    );
}
