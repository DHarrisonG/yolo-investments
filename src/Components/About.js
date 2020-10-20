import React from 'react'

class About extends React.Component {

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
            <>
            <div class="tab">
                <button class="tablinks" onClick={(event) => this.openCity(event, 'London')}>London</button>
                <button class="tablinks" onClick={(event) => this.openCity(event, 'Paris')}>Paris</button>
                <button class="tablinks" onClick={(event) => this.openCity(event, 'Tokyo')}>Tokyo</button>
            </div>

            <div id="London" class="tabcontent">
                <h3>London</h3>
                <img src="/test/1.jpg" />

            </div>

            <div id="Paris" class="tabcontent">
                <h3>Paris</h3>
                <img src="/test/2.jpg" />
            </div>

            <div id="Tokyo" class="tabcontent">
                <h3>Tokyo</h3>
                <img src="/test/3.jpg" />
            </div>
            </>
        )
    }
}

export default About;