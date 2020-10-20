import React from 'react'

class Contact extends React.Component {
    constructor(props){
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
            <div>
                <h1>CONTACT</h1>
                <form action="emailto:dougharrisonaudio@gmail.com">
                    <label for="name">Your Name:</label><br/>
                    <input type="text" id="name" name="name" /><br/>

                    <label for="name">Your Email:</label><br/>
                    <input type="email" id="email" name="email" /><br/>

                    <label for="name">Subject:</label><br/>
                    <input type="text" id="subject" name="subject" /><br/>

                    <label for="name">Message:</label><br/>
                    <textarea id="memssage" name="message" /><br/>
                    <input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }

}

export default Contact;