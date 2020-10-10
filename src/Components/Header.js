import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div id='header-img' >
                    <img src='business.jpg' />
                </div>
                <div id='sneaker-img'>
                    <img src='sneaker.png' />
                </div>
            </div>
        )
    }
}

export default Header;