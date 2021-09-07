import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findBytestAtrr,checkProps } from '../../../Utils';

const setup=(props={})=>{
    const comp = shallow(<Headline {...props}/>);
    return comp;
}

describe('Headline Component', () => {
    describe('checking Proptypes', () => {
        it('Should not throw a warning',()=>{
            const expectedProps = {
                header:'Test Header',
                desc:'test desc',
                tempArr:[
                    {
                        firstName:'test fname',
                        lastname:'test lastname',
                        email:'test@email.com',
                        age:20,
                        onlineStatus:false
                    }
                ]
            }
            const propsErr = checkProps(Headline.propTypes,expectedProps,'props',Headline.name);
            expect(propsErr).toBeUndefined();
        })
    })
    
    describe('Have props', () => {
        let wrapper;
        beforeEach(()=>{
            const props={
                header:'Test header',
                desc:'test desc'
            }
            wrapper = setup(props)
        })
        it('Should render without errors',()=>{
            const component = findBytestAtrr(wrapper,'headlineComponent');
            expect(component.length).toBe(1)
        })
        it('Should render H1',()=>{
            const h1 = findBytestAtrr(wrapper,'header');
            expect(h1.length).toBe(1)
        });
        it('Should render a desc',()=>{
            const desc = findBytestAtrr(wrapper,'desc');
            expect(desc.length).toBe(1);
            
        })
        
    });
    describe('have No props', () => {
        let wrapper;
        beforeEach(()=>{
            wrapper=setup()
        })
        it('Should not render',()=>{
            const component  =findBytestAtrr(wrapper,'headlineComponent');
            expect(component.length).toBe(0)
        })
    })
    
    
})
