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
            <>
            <div>
                <h1>CONTACT US</h1>
            </div>
            <div class="container">
                <form action="action_page.php">

                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label for="country">Country</label>
                    <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    </select>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>

                    <input type="submit" value="Submit" />

                </form>
            </div>
            </>
        )
    }

}

export default Contact;