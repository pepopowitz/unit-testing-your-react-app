import React from 'react';

export default function Location({ location }) {
    if (!location) {
        return null;
    }

    return (
        <aside class="location">
            <h1>
                <a href={location.url}>
                    {location.name}
                </a>
            </h1>
        </aside>
    );
}
