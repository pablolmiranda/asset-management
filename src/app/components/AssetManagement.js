import React from 'react';
import Header from './Header';
import SearchArea from '../containers/SearchArea';
import AssetContainer from '../containers/AssetContainer';

class AssetManagement extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
        this.showAsset = this.showAsset.bind(this);
    }

    componentWillMount() {
        var that = this;
        fetch('/api/movies')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                that.setState({data});
            });
    }

    render() {
        var asset = this.state.asset;
        var assetList = this.state.data;

        return (
            <div className="am-start">
                <Header />
                <SearchArea />
                <AssetContainer
                    asset={asset}
                    assetList={assetList}
                    onClickAsset={this.showAsset}/>
            </div>
        );
    }

    showAsset(asset) {
        this.setState({asset});
    }
}

export default AssetManagement;
