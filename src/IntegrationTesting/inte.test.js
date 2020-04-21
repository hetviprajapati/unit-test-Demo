import moxios from 'moxios';
import {testStore} from "../Utils";
import {fetchPosts} from "../Action";

describe('fetchPosts action',()=>{

    beforeEach(()=>{
       moxios.install();
    });

    afterEach(()=>{
        moxios.uninstall();
    });

    test('Store is Updated correctly',()=>{

        const expectedState = [{
            title:'title 1',
            body:'some text'
        },{
            title:'title 2',
            body:'some text'
        },{
            title:'title 3',
            body:'some text'
        }];

         const store = testStore();

         moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:expectedState
            })
         })

        return store.dispatch(fetchPosts())
            .then(()=>{
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })

    });
});
