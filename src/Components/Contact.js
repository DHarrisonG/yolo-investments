import React from 'react'

class Contact extends React.Component {

    
    handleSubmit = (e) => {
        e.preventDefault()
        alert("This is a demo page, contacting is unavailable")
    }

    render() {
        return (
            <div className="contact-container" id="contact-link">

                    <h1>CONTACT US</h1>

                <div class="container">
                    <form action="action_page.php">

                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label for="lemail">Email</label>
                        <input type="email" id="lemail" name="email" placeholder="Your Email.." />

                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>

                        <input type="submit" value="Submit" onClick={this.handleSubmit}/>

                    </form>
                </div>
            </div>
        )
    }

}

export default Contact;