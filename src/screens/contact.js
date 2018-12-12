import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default class Contact extends Component {
    render() {
        return (
            <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" required />
                <p><input type="text" name="name" placeholder="Name" required /></p>
                <p><input type="email" name="email" placeholder="Email" required /></p>
                <p><input type="tel" name="phone" placeholder="Phone Number" /></p>
                <p><textarea rows="5" cols="50" name="message" placeholder="Message..."
                    required></textarea></p>
                <button type="submit">Send</button>
            </form>
        )
    }
}