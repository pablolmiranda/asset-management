import React from 'react';

/**
 * Render a section landmark.
 * Helps keep the UI organized under a specific index
 */
const AssetSection = ({ asset, sectionId }) => {
    sectionId = sectionId || 'movieName';
    return (
        <li className="section">
            <h3>{asset[sectionId]}</h3>
        </li>
    );
};

AssetSection.propTypes = {
    asset: React.PropTypes.object.isRequired,
    sectionId: React.PropTypes.string.isRequired
};

export default AssetSection;
