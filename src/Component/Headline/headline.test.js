import React from "react";
import {shallow} from 'enzyme';


import Headline from "./Headline";
import {findByTestAtrr,checkProps} from "../../Utils";

const setUp = (props={}) =>{
    return shallow(<Headline {...props}/>);
};

describe('Headline Component', () => {

    describe('Checking propTypes',()=>{

        it('Should not throw a warning',()=>{
            const expectedProps = {
                header:'Test Header',
                desc: 'Test desc',
                tempArr:[{
                    fName:'Test fName',
                    lName:'Test lName',
                    email:'test@gmail.com',
                    age:23,
                    onlineStatus:false
                }]
            };
            const propsErr = checkProps(Headline,expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })
    describe('Have Props',()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                header:'Test Header',
                desc:'Test Desc'
            }
            wrapper = setUp(props);
        });

       it('Should render without errors',()=>{
            const component=findByTestAtrr(wrapper,'HeadlineComponent');
             expect(component.length).toBe(1);
        });

        it('Should render a Header',()=>{
            const component=findByTestAtrr(wrapper,'Header');
            expect(component.length).toBe(1);
        });

        it('Should render a description',()=>{
            const component=findByTestAtrr(wrapper,'description');
            expect(component.length).toBe(1);
        });

    });

    describe('Have No Props',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        });

        it('Should render without errors',()=>{
            const component=findByTestAtrr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    });

});