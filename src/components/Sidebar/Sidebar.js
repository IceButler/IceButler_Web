import React from 'react';
import logo from 'assets/images/logo.png';

function Sidebar(props) {
    return (
        <div>
            냉집사
            <img src={`${process.env.PUBLIC_URL}/logo512.png`} className="logo" alt="logo"></img>
        </div>
    );
}

export default Sidebar;