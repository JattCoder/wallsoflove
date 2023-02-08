import React from 'react';
import './style.css';
import { IProps } from './interface';
import contact1 from '../../../../assets/images/Contact-1.png';
const Contact: React.FC<IProps> = (props) => {

    return (
        <div className='contact-frame'>
            <div className='contact-frame1'>
                <div className='contact-inner1'>
                    <h2 className='contactInner1-title1'>Contact Us</h2>
                    <p className='contactInner1-p1'>Suggest a location for a wall. Leave words of encouragement. Donate items. Sponsor a wall. Or ask us how you can be involved. </p>
                    <p className='contactInner1-p2'>Complete the form below to get in touch. We’d love to hear from you. </p>
                    <a className='contactInner1-p3' href={'https://https://.com'}>(216) 882-9395</a>
                    <a className='contactInner1-p4' href={'https://.com'}>wallsoflove216@gmail.com</a>
                </div>
                <div className='contactImg1-frame'>
                    <img className='contactInner1-img' src={contact1} />
                </div>
            </div>

            <div className='contact-frame2'>
                <h2 className='contactInner2-p1'>Have an upcoming engagement you need a speaker for? </h2>
                <p className='contactInner2-p2'>Contact Walls of Love Founder, Holly Jackson to inspire your guests. </p>
            </div>

            <div className='contact-frame3'>
                <div className='contact-inner3'>
                    <p className='contactInner3-title1'>name *</p>
                    <div className='contactInput-frame1'>
                        <input className='contactInner3-1' placeholder='First Name'></input>
                        <input className='contactInner3-2' placeholder='First Name'></input>
                    </div>
                </div>
                <div className='contact-frame4'>
                    <p className='contactInner3-title2'>Email Address *</p>
                    <div className='contactInput-frame2'>
                        <input className='contactInner3-3'></input>
                    </div>
                </div>
                <div className='contact-frame5'>
                    <p className='contactInner3-title3'>Subject *</p>
                    <div className='contactInput-frame3'>
                        <input className='contactInner3-4'></input>
                    </div>
                </div>
                <div className='contact-frame6'>
                    <p className='contactInner3-title4'>Message *</p>
                    <div className='contactInput-frame4'>
                        <textarea className='contactInner3-5'></textarea>
                    </div>
                </div>
            </div>
            <div className='contact-frame7'>
                    <div className='contact-btn'>
                        <p className='contact-submit'>Submit</p>
                    </div>
                </div>
        </div>
    )
}

export default Contact;