import React from "react";
import { shallow } from 'enzyme';

import {findByTestAtrr,checkProps} from "../../Utils";
import SharedButton from "./Button";

describe('Shared Button Component',()=>{

    describe('Checking PropTypes',()=>{
        it('Should Not throw a warning',()=>{
           const ExpectedProps={
               buttonText:'Example button text',
               emitEvent:()=>{

               }
           };

           const propsErrors = checkProps(SharedButton,ExpectedProps);
           expect(propsErrors).toBeUndefined();

        });
    });

    describe('Renders',()=>{

        let wrapper;
        let mockFunc;
        beforeEach(()=>{
            mockFunc = jest.fn();
            const props={
                buttonText:'Example button text',
                emitEvent:mockFunc
            };
            wrapper = shallow(<SharedButton {...props}/>);
        });

        it('Should render a button',()=>{
             const button = findByTestAtrr(wrapper,'ButtonComponent');
             expect(button.length).toBe(1);
        })

        it('Should emit callback on click event',()=>{
            const button = findByTestAtrr(wrapper,'ButtonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })

    })

});