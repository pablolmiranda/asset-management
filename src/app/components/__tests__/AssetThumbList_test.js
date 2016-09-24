import React from 'react';
import { mount } from 'enzyme';
import AssetThumbList from '../AssetThumbList';
import AssetThumb from '../AssetThumb';

describe('src/app/components/AssetThumbList.js', () => {

    it('renders asset container element', () => {
        const assets = Factory.buildList('asset', 10);
        const wrapper = mount(<AssetThumbList assets={assets} />);

        expect(wrapper.find('.asset-list')).to.have.length(1);
    });

    it('renders the thumbs for the assets collection', () => {
        const assets = Factory.buildList('asset', 10);
        const wrapper = mount(<AssetThumbList assets={assets} />);

        expect(wrapper.find(AssetThumb.name)).to.have.length(10);
    });

});
