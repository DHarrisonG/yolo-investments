import React from 'react'

class Nav extends React.Component {
    render() {
        return (
            <div className="menubar">
                <div id="menu">
                    <ul className="menulinks">
                        <li><a href='#company-link'>COMPANY</a></li>
                        <li><a href='#social-link'>SOCIAL</a></li>
                        <li><a href='#about-link'>ABOUT</a></li>
                        <li><a href='#contact-link'>CONTACT</a></li>
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