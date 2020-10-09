import React from 'react'

class Nav extends React.Component {
    render() {
        return (
            <div className="menubar">
                <div id="menu">
                    <ul className="menulinks">
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div id="logo">
                    <h1>Logo Temp</h1>
                </div>
            </div>
        )
    }
}

export default Nav;