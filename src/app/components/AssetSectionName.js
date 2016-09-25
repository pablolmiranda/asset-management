import React from 'react';

/**
 * Render a section landmark.
 * Helps keep the UI organized under a specific index
 */
export default ({ asset, sectionId }) => {
    sectionId = sectionId || 'movieName';
    return (
        <li className="section">
            <h3>{asset[sectionId]}</h3>
        </li>
    );
};
