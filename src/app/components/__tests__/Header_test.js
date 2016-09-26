import React from 'react';
import Header from '../Header';
import { mount } from 'enzyme';

describe('src/app/components/Header.js', () => {

    it('renders the app name', () => {
        let wrapper = mount(<Header />);

        expect(wrapper.find('h1')).to.have.length(1);
        expect(wrapper.find('h1').text()).to.be.equal('Asset Manager');
    });

});
