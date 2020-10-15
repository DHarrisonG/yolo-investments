import React from 'react'

class Social extends React.Component {

    render() {
        return (
            <div className='social-container'>
                <h1>SOCIAL</h1>
                <div className='social-links'>
                    <a href="https://www.linkedin.com/in/dharrisong" target="_blank"><img src="social-links/linkedin-white.png" /></a>
                    <a href="https://www.youtube.com/watch?v=5IXQ6f6eMxQ&ab_channel=onlinefrog" target="_blank"><img src="social-links/youtube-white.png" /></a>
                    <a href="https://twitter.com/coffee_dad?lang=en"><img src="social-links/twitter-white.png" target="blank" /></a>
                    <a href="https://youtu.be/gHjronXyeqI?t=40" target="_blank"><img src="social-links/venmo-white.png" /></a>
                </div>
            </div>
        )
    }
}

export default Social;