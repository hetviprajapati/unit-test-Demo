import React from "react";
import App from "./App";
import { shallow } from 'enzyme';
import {findByTestAtrr,testStore} from "./Utils";

const setUp = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    return wrapper;
}

describe('App Component',()=>{

    let wrapper;
    beforeEach(()=>{
        const initialState= {
            posts: [{
                title: 'Example Title 1',
                body: 'Some text'
            }, {
                title: 'Example Title 2',
                body: 'Some text'
            }, {
                title: 'Example Title 3',
                body: 'Some text'
            }]
        };
        wrapper = setUp(initialState);
    });

    it('Should render without error',()=>{
        const component = findByTestAtrr(wrapper,'appComponent');
        expect(component.length).toBe(1);
    });

    it('exampleMethod_updateState Method should update state as expected',()=>{
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    });

    it('exampleMethod_returnValue Method should return a value',()=>{
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnValue(6);
        expect(newValue).toBe(7);
    })
});