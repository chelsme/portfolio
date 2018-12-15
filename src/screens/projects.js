import React, { Component } from 'react';
import Slider from "react-slick";
import { Player } from 'video-react';

export default class Projects extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <div id='projects'>
                <h2>Projects</h2>
                <Slider {...settings}>
                    <div>
                        <Player
                            autoPlay={false}
                            poster={require('../images/partyhost.png')}
                        >
                            <source src={require('../video/partyhostframe.mov')} />
                        </Player>
                        <div className='usedIcons'>
                            <img className='icon' src={require('../images/react.png')} />
                            <img className='icon' src={require('../images/rails.png')} />
                            <span>|</span>
                            <a target="_blank" href="https://github.com/chelsme/partyHostNative/"><img className='icon' src={require('../images/github-fe.png')} /></a>
                            <a target="_blank" href="https://github.com/chelsme/partyHostRails"><img className='icon' src={require('../images/github-be.png')} /></a>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" href="https://skull-solitaire.herokuapp.com/"><img src={require('../images/mac-skullsolitaire.png')} alt='skullsolitaire' /></a>
                        <div className='usedIcons'>
                            <img className='icon' src={require('../images/js.png')} />
                            <img className='icon' src={require('../images/rails.png')} />
                            <span>|</span>
                            <a target="_blank" href="https://github.com/chelsme/solitaire-fe"><img className='icon' src={require('../images/github-fe.png')} /></a>
                            <a target="_blank" href="https://github.com/chelsme/solitaire-be"><img className='icon' src={require('../images/github-be.png')} /></a>
                            <span>|</span>
                            <div id='login'>
                                <p style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Heroku Login:</p>
                                <p>username: chelsea</p>
                                <p>password: hi</p>
                                <p>stuff stuff stuff stuff stuff stuff </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" href="http://lyndonart.netlify.com/"><img src={require('../images/mac-lyndonart.png')} alt='lyndonart' /></a>
                        <div className='usedIcons'>
                            <img className='icon' src={require('../images/html5.png')} />
                            <img className='icon' src={require('../images/css3.png')} />
                            <span>|</span>
                            <a target="_blank" href="https://github.com/chelsme/lyndonart"><img className='icon' src={require('../images/github.png')} /></a>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" href="http://www.walthamvisioncare.com/"><img src={require('../images/mac-wvc.png')} alt='wvc' /></a>
                        <div className='usedIcons'>
                            <img className='icon' src={require('../images/html5.png')} />
                            <img className='icon' src={require('../images/css3.png')} />
                            <img className='icon' src={require('../images/react.png')} />
                            <span>|</span>
                            <a target="_blank" href="https://github.com/chelsme/WVC"><img className='icon' src={require('../images/github.png')} /></a>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}