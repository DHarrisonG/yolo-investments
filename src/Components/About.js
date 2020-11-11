import React from 'react'

// test 

class About extends React.Component {

    handleDefaultClick = (el) => {
        el.click()
    }

    openCity = (e, cityName) => {
        // Declare all variables
        let i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = "block";
        e.currentTarget.className += " active";
    }

    render() {

        return (
            <div className='about-container' id="about-link">
                <h1>ABOUT US</h1>
                    <h4>From record-breaking gains <span id="losses">and losses</span>, our services differ from the massive Wall Street institutions 
                        and other large firms who worry more about "legality" and "regulations" to empower <span id="losses">or destroy</span> your future.</h4>


                <div class="tab">
                    <button class="tablinks" onClick={(event) => this.openCity(event, 'Safety')} ref={this.handleDefaultClick} >Safety</button>
                    <button class="tablinks" onClick={(event) => this.openCity(event, 'Market')}>Market</button>
                    <button class="tablinks" onClick={(event) => this.openCity(event, 'Contingencies')}>Contingencies</button>
                </div>

                <div id="Safety" class="tabcontent">
                    <img src="/about-pics/saftey1.jpg" />

                </div>

                <div id="Market" class="tabcontent">
                    <img src="/about-pics/market2.jpg" />
                </div>

                <div id="Contingencies" class="tabcontent">
                    <img src="/about-pics/cont1.jpg" />
                </div>
            </div>
        )
    }
}

export default About;