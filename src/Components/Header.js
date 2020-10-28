import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div id='header-img' >
                    <img src='business.jpg' />
                </div>
                <div id='stonk'>
                    <img src='stonk.png' />
                </div>
            </div>
        )
    }
}

export default Header;