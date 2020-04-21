import React from 'react';
import udemy_logo from '../../Logo/udemy_logo.png';

import './header.css';

const Header = (props) => {

    // constr
    return (
        <div>
            <div className='header1' data-test={'header1'}>
                <div >
                    <img src={udemy_logo} alt={"udemy_logo"} data-test={'logo'} height={40} width={120}/>
                </div>
            </div>
        </div>
    );
}

export default Header;