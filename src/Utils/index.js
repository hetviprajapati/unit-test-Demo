import checkPropTypes from 'check-prop-types';
import {applyMiddleware,createStore} from "redux";
import rootReducer from '../Reducers';
import {middleWares} from "../createStore";


export const findByTestAtrr = (component,attr) =>{
    //find by data-test
    return component.find(`[data-test='${attr}']`);
};

export const checkProps = (component,expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propsErr;
};

export const testStore = (initialState) =>{
    const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
    return createStoreWithMiddleware(rootReducer,initialState);
};