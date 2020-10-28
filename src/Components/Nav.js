import React from 'react'

class Nav extends React.Component {
    render() {
        return (
            <div className="menubar">
                <div id="menu">
                    <ul className="menulinks">
                        <li>SOCIAL</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div id="logo">
                    <img id="yolo" src="yolo.png" />
                    <img id="money-stack" src="money-stack.png" />
                </div>
            </div>
        )
    }
}

export default Nav;