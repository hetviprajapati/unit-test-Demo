import {types} from "../../Action/types";

export default (state=[],action)=>{

    switch (action.type) {
        case types.GET_POST:
            return action.payload;
        default:
            return state;
    }
}