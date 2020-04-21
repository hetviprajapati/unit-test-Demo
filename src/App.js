import React from 'react';
import {connect} from 'react-redux';

import './App.css';
import Header from "./Component/Header/header";
import Headline from "./Component/Headline/Headline";
import SharedButton from "./Component/Button/Button";
import ListItem from "./Component/ListItem/ListItem";
import {fetchPosts} from "./Action";


const tempArr = [{
    fName:'Hetvi',
    lName:'Prajapati',
    email:'hetvi@gmail.com',
    age:21,
    onlineStatus:true
}];

const initialState = {
    hideBtn:false
};

class App extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            ...initialState
        };
        this.fetch = this.fetch.bind(this);
    }

    fetch(){
        this.props.fetchPosts();
        this.exampleMethod_updatesState();
    }

    exampleMethod_updatesState(){
        const {hideBtn} = this.state;
        this.setState({
            hideBtn:!hideBtn
        })
    }

    exampleMethod_returnValue(number){
        return number+1;
    }
    render() {
        const {posts} = this.props;
        const {hideBtn} = this.state;

        const configButton = {
            buttonText:'Get Posts',
            emitEvent:this.fetch
        };

        return (
            <div data-test={'appComponent'}>
                <Header/>
                <section className={'main'}>
                    <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
                    {
                        !hideBtn && <SharedButton {...configButton}/>
                    }
                    {posts.length > 0 &&
                        <div>
                            {posts.map((post,index)=>{
                                const {title,body}=post;
                                const configListItem = {
                                    title:title,
                                    desc:body
                                }
                                return(
                                    <ListItem key={index} {...configListItem}/>
                                )
                            })}
                        </div>
                    }
                </section>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        posts:state.posts
    }
};

export default connect(mapStateToProps,{fetchPosts})(App);
