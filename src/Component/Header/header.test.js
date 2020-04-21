import React from 'react';
import { shallow } from 'enzyme';
import Header from "./header";
import {findByTestAtrr} from "../../Utils";

const setUp = (props={}) =>{
    return shallow(<Header {...props}/>);
};

describe('Header Component', () => {

    let component;
    beforeEach(()=>{
       component = setUp();
    });

    it('Should render without errors',() => {
        const component = setUp();
        const wrapper = findByTestAtrr(component,'header1');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo',() => {
        const component = setUp();
        const logo = findByTestAtrr(component,'logo');
        expect(logo.length).toBe(1);
    });

})
