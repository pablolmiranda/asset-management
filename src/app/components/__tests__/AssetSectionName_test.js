import React from 'react';
import AssetSectionName from '../AssetSectionName';
import { mount } from 'enzyme';

describe('src/app/components/AssetSectionName', () => {

    it('renders the asset section name', () => {
        const asset = Factory.build('asset');
        const wrapper = mount(<AssetSectionName asset={asset}/>);

        expect(wrapper.find('li.section')).to.have.length(1);
        expect(wrapper.find('h3')).to.have.length(1);
        expect(wrapper.find('h3').text()).to.be.equal(asset.movieName);
    });

    it('renders the asset section name based on a sectionId', () => {
        const asset = Factory.build('asset');
        const wrapper = mount(<AssetSectionName asset={asset} sectionId="languageCode"/>);

        expect(wrapper.find('li.section')).to.have.length(1);
        expect(wrapper.find('h3')).to.have.length(1);
        expect(wrapper.find('h3').text()).to.be.equal(asset.languageCode);
    });

});
