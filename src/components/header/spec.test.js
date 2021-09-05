import React from 'react';
import { shallow } from 'enzyme';
import {findBytestAtrr} from '../../../Utils'
import Header from './index';
const setUp=(props={})=>{
    const component = shallow(<Header {...props}/>);
    return component;
}


describe('Header Component', () => {
    let component;
    beforeEach(()=>{
        component = setUp();
    })
    it('Should render without errors',()=>{
        //console.log(component.debug());
        const wrapper = findBytestAtrr(component,'headerComponent');
        expect(wrapper.length).toBe(1)
    })
    it('Should render a logo',()=>{
        const wrapper = findBytestAtrr(component,'logoImg');
        expect(wrapper.length).toBe(1)
    })
    
})
