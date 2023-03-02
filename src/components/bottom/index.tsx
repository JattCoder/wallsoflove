import React from 'react';
import './style.css';

const Bottom = () => {

    return (
        <div className='bottom-frame'>
            <div className='bottom-frame1'>
                <div className='bottom-inner1'>
                    <p>© 2018 WALLS OF LOVE{'\n'}{'\n'}Cleveland, Ohio{'\n'}{'\n'}(216) 882-9395</p>
                    <a>wallsoflove216@gmail.com</a>
                    <p>{'\n'}Walls of Love® is a registered trademark{'\n'}and cannot be reused without expressed{'\n'}written permission. All rights are reserved.</p>
                </div>
                <div className='bottom-inner2'>
                    <p className='bottom-p'>INFO</p>
                    <a className='bottom-a'>Mission</a>
                    <a className='bottom-a'>Partners</a>
                    <a className='bottom-a'>Impact</a>
                    <a className='bottom-a'>Upcoming Events</a>
                    <a className='bottom-a'>Press</a>
                    <a className='bottom-a'>Blag</a>
                </div>
                <div className='bottom-inner2'>
                    <p className='bottom-p'>ACTION</p>
                    <a className='bottom-a'>Volunteer</a>
                    <a className='bottom-a'>Contact</a>
                    <a className='bottom-a'>Donate</a>
                </div>
                <div className='bottom-inner1'>
                    <p>Sign up to receive news and updates.</p>
                    <input className='bottom-input' placeholder='Email Address'/>
                    <input type="submit" value="Submit" className='bottom-submit'></input>
                </div>
            </div>
        </div>
    )
}

export default Bottom;