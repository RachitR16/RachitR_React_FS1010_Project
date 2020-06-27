import React, {Component} from 'react';
import './Contact.css';



class Contact extends Component {


    constructor(props) {
        super(props);
        this.state = {  
            username: '',
            email: '',
            message: ''
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleMessageChange = event => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        alert(`${this.state.username} ${this.state.email} ${this.state.message}`)
    }

    render() { 
        return (  
            <div className="contact" id="contact">
            <h1 className="inTouch">Get in Touch</h1>


           <form className="form" method="POST" onSubmit={this.handleSubmit}>
               <input type="text" className="userInfo" name="name" value={this.state.username} onChange={this.handleUsernameChange} autocomplete="off" placeholder="Name" required/>

               <input type="text" className="userInfo" name="email" value={this.state.email} onChange={this.handleEmailChange} autocomplete="off" placeholder="Email" required/>

               <textarea rows="4" cols="50" name="message" value={this.state.message} onChange={this.handleMessageChange} className="userText" placeholder="Enter text here..."></textarea>

               <button className="button">Submit</button>
           </form>


        </div>
        );
    }
}
 
export default Contact;
