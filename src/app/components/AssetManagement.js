import React from 'react';
import Header from './Header';
import GroupBy from '../containers/GroupBy';
import AssetContainer from '../containers/AssetContainer';

class AssetManagement extends React.Component {

    render() {
        return (
            <div className="am-start">
                <Header />
                <GroupBy />
                <AssetContainer />
            </div>
        );
    }

}

export default AssetManagement;
