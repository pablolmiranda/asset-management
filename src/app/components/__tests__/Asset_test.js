import React from 'react';
import Asset from '../Asset';
import { mount } from 'enzyme';

describe('src/app/components/Asset.js', () => {

    it('renders a asset correctly', () => {
        const asset = Factory.build('asset');
        let wrapper = mount(<Asset asset={asset} />);

        expect(wrapper.find('.closeBtn')).to.have.length(1);
        expect(wrapper.find('.movieId')).to.have.length(1);
        expect(wrapper.find('.movieName')).to.have.length(1);
        expect(wrapper.find('.imageType')).to.have.length(1);
        expect(wrapper.find('.languageCode')).to.have.length(1);
        expect(wrapper.find('.fullsizeImg')).to.have.length(1);

        expect(wrapper.find('.closeBtn').text()).to.be.equal('Close');
        expect(wrapper.find('.movieId').text()).to.include(asset.movieId);
        expect(wrapper.find('.movieName').text()).to.include(asset.movieName);
        expect(wrapper.find('.imageType').text()).to.include(asset.imageType);
        expect(wrapper.find('.languageCode').text()).to.include(asset.languageCode);
        expect(wrapper.find('.fullsizeImg').props().src).to.be.equal(asset.fullSizeImageUrl);
    });

});
