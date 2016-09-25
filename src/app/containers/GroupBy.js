import React from 'react';
import { connect } from 'react-redux';
import { assetIndexKeys } from '../constants';
import { selectAssetIndex } from '../actions';

/**
 * Group by selector component
 * Allow the users to select of type of index they want to use on the UI
 * After change the index the app will render the new asset collection sorted by the index.
 */
let GroupBy = ({ selectedIndex, onSelectIndex }) => {
    return (
        <div className="search">
            <label>Group by:</label>
            <select value={selectedIndex} onChange={ (evt) => {
                onSelectIndex(evt.target.value);
            }}>
                { assetIndexKeys.map((assetIndex) => {
                    return <option key={assetIndex} value={assetIndex}>{assetIndex}</option>;
                })}
            </select>
        </div>
    );
};

const mapStateToProps = (state) => ({
    selectedIndex: state.selectedAssetIndex
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectIndex: (index) => {
            dispatch(selectAssetIndex(index));
        }
    };
};

GroupBy = connect(mapStateToProps, mapDispatchToProps)(GroupBy);

export default GroupBy;
