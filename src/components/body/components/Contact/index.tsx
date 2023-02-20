import React from 'react';
import './style.css';
import { IProps } from './interface';
import contact1 from '../../../../assets/images/Contact-1.png';
const Contact: React.FC<IProps> = (props) => {

    return (
        <div className='contact-frame'>
            <div className='contact-frame1'>
                <div className='contact-inner1'>
                    <h2 className='contact-title'>Contact Us</h2>
                    <p className='contact-p'>Suggest a location for a wall. Leave words of encouragement. Donate items. Sponsor a wall. Or ask us how you can be involved.
                    {'\n'}{'\n'}Complete the form below to get in touch. We’d love to hear from you.</p>
                    <a className='contact-a' href={'https://https://.com'}>(216) 882-9395 {'\n'}{'\n'}</a>
                    <a className='contact-a' href={'https://.com'}>wallsoflove216@gmail.com{'\n'}{'\n'}</a>
                </div>
                <div className='contactImg-frame'>
                    <img className='contact-img' src={contact1} />
                </div>
            </div>

            <div className='contact-frame2'>
                <h2 className='contact-title2'>Have an upcoming engagement you need a speaker for? </h2>
                <p className='contact-p'>Contact Walls of Love Founder, Holly Jackson to inspire your guests. </p>
            </div>

            <div className='contact-frame3'>
                <div className='contact-inner3'>
                    <p className='contact-title3'>name *</p>
                    <div className='contactInput-frame1'>
                        <input className='contact-input1' placeholder='First Name'></input>
                        <input className='contact-input1' placeholder='First Name'></input>
                    </div>
                    <p className='contact-title4'>Email Address *</p>
                    <div className='contactInput-frame2'>
                        <input className='contact-input2' placeholder='Email'></input>
                    </div>
                    <p className='contact-title5'>Subject *</p>
                    <div className='contactInput-frame3'>
                        <input className='contact-input3' placeholder='Subject'></input>
                    </div>
                    <p className='contact-title6'>Message *</p>
                    <div className='contactInput-frame4'>
                        <textarea className='contact-input4' placeholder='please enter your message'></textarea>
                    </div>
                    <div className='contact-frame5'>
                        <input type="submit" value="Submit" className='contact-submit'></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;