import React from 'react';

export default ({ asset, sectionId }) => {
    sectionId = sectionId || 'movieName';
    return (
        <li className="section">
            <h3>{asset[sectionId]}</h3>
        </li>
    );
};
