import React from 'react';
import Header from './Header';
import SearchArea from '../containers/SearchArea';
import AssetContainer from '../containers/AssetContainer';

class AssetManagement extends React.Component {

    render() {
        return (
            <div className="am-start">
                <Header />
                <SearchArea />
                <AssetContainer />
            </div>
        );
    }

}

export default AssetManagement;
