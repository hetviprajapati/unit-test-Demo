import React from "react";
import { shallow } from 'enzyme';

import {findByTestAtrr,checkProps} from "../../Utils";
import ListItem from "./ListItem";


describe('ListItem Component',()=> {

    it('Should Not throw a warning',()=>{
        const ExpectedProps={
            title:'Example title text',
            desc:'Example desc'
        };
        const propsErrors = checkProps(ListItem,ExpectedProps);
        expect(propsErrors).toBeUndefined();

    });

    describe('Renders',()=>{

        let wrapper;

        beforeEach(()=>{
            const props={
                title:'Example title text',
                desc:'Example desc'
            };
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('Should render without error',()=>{
            const component = findByTestAtrr(wrapper,'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title',()=>{
            const title = findByTestAtrr(wrapper,'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a description',()=>{
                const desc = findByTestAtrr(wrapper,'componentDEsc');
            expect(desc.length).toBe(1);
        });
    })

    describe('Should not render',()=>{

        let wrapper;

        beforeEach(()=>{
            const props={
                desc:'Example desc'
            };
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('Component is not rendered',()=>{
            const component = findByTestAtrr(wrapper,'listItemComponent');
            expect(component.length).toBe(0);
        })
    })

});