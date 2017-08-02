import React from 'react';

export default function Date({ date }) {
    if (!date) {
        return null;
    }
    return (
        <h2 className="event-date">
            {date}
        </h2>
    );
}
