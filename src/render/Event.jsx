import React from 'react';

import Location from './Location';
import Date from './Date';

export default function Event({ event }) {
    return (
        <article className="event">
            <h1>
                {event.name}
            </h1>

            <Date date={event.date} />
            <Location location={event.location} />
        </article>
    );
}
