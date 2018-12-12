import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default class About extends Component {
    render() {
        return (
            <div id='about'>
                <h2>About Me</h2>
                <p>Motivated Front-End Developer with experience in Ruby on Rails, JavaScript, and React. I am a self-starter who enjoys collaborating within a team. I discovered coding through curiosity and building websites for fun for employers. I look for companies that innovate and match my desire to do things differently.</p>

                <h2>Languages</h2>
                <div id='languageIcons'>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-js-square"></i>
                    <i className="fab fa-react"></i>
                    <img className='icon' src={require('../images/ruby.png')} />
                    <img className='icon' src={require('../images/rails.png')} />
                </div>

                <h2>Around the Web</h2>
                <a href='https://www.linkedin.com/in/chelseacrowson/'><i className="fab fa-linkedin-square" /></a>
                <a href='https://github.com/chelsme'><i className="fab fa-github-square" /></a>
            </div>
        )
    }
}