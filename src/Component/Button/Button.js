import React,{Component} from "react";
import PropTypes from 'prop-types';

import './Button.css';

class SharedButton extends Component{

    submitEvent(){
       if(this.props.emitEvent){
           this.props.emitEvent();
       }
    }

    render() {

        const {buttonText} = this.props;

        return(
            <button data-test={'ButtonComponent'} onClick={()=>this.submitEvent()}>
                {buttonText}
            </button>
        )
    }
}
SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent:PropTypes.func
};

export  default SharedButton