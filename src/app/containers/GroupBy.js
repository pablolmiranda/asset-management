import React from 'react';
import { connect } from 'react-redux';
import { assetIndexKeys } from '../constants';
import { selectAssetIndex, searchAssetByIndex } from '../actions';
import debounce from 'lodash/debounce';

/**
 * Group by selector component
 * Allow the users to select of type of index they want to use on the UI
 * After change the index the app will render the new asset collection sorted by the index.
 */
class GroupBy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };

        // Debounce the search to avoid the app state to
        // rebuild the query results for every key press
        this.searchIndex = debounce(props.searchIndex, 300);
    }

    render() {
        const {selectedIndex, selectIndex} = this.props;
        return (
            <div className="search">
                <div className="index-selector">
                    <label>Group by:</label>
                    <select value={selectedIndex} onChange={ (evt) => {
                        this.setState({ query: ''});
                        selectIndex(evt.target.value);
                    }}>
                        { assetIndexKeys.map((assetIndex) => {
                            return <option key={assetIndex} value={assetIndex}>{assetIndex}</option>;
                        })}
                    </select>
                </div>
                <div className="query">
                    <input value={this.state.query} type="text" placeholder={'search for a ' + selectedIndex}
                        onChange={ evt => {
                            const query = evt.target.value;
                            this.setState({ query: query });
                            this.searchIndex(selectedIndex, query);
                        }}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedIndex: state.selectedAssetIndex
});

const mapDispatchToProps = (dispatch) => {
    return {
        selectIndex: (index) => {
            dispatch(selectAssetIndex(index));
        },
        searchIndex: (index, query) => {
            dispatch(searchAssetByIndex(index, query));
        }
    };
};

const GroupByContainer = connect(mapStateToProps, mapDispatchToProps)(GroupBy);

export default GroupByContainer;
