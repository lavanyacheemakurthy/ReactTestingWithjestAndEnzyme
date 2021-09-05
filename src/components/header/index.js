import React from 'react'
import './styles.scss';

const Header = (props) => {
    return (
        <header data-test='headerComponent'> 
            <div className='wrap'>
                <div className='logo'>
                    <img data-test='logoImg' src='https://images.unsplash.com/photo-1476293889456-abfb7492a29f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'></img>
                </div>
            </div>
        </header>
    )
}

export default Header
