import React from 'react'

class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    }

    render() {
        return (
            <div className="contact-container">

                    <h1>CONTACT US</h1>

                <div class="container">
                    <form action="action_page.php">

                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label for="lemail">Email</label>
                        <input type="email" id="lemail" name="email" placeholder="Your Email.." />

                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>

                        <input type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        )
    }

}

export default Contact;