import {types} from "./types";
import axios from 'axios';

export const fetchPosts = () => async (dispatch) =>{
    await axios.get('http://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((response)=>{
            dispatch({
                type:types.GET_POST,
                payload: response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        })
}