import React from 'react';
import './style.css';
import { IProps } from './interface';
import volunteer1 from '../../../../assets/images/Volunteer-1.png';
import volunteer2 from '../../../../assets/images/Volunteer-2.png';
import Shop from './../shop'


const Volunteer: React.FC<IProps> = (props) => {

    return (
        <div className='volunteer-frame'>
            <div className='volunteer-frame1'>
                <h2 className='volunteer-title'>Volunteer</h2>
                <div className='volunteer-inner1'>
                    <p className='volunteer-p1'>Want to make a difference in your local community but not sure where to start? Walls of Love is a group of individuals with dramatically different backgrounds all with the same purpose, to improve the lives of those in need one act of service, one wall at a time.{'\n'}{'\n'}
                    Currently, volunteers are needed to set up walls, package wall items, assist with special events and provide wall clean up. {'\n'}{'\n'}
                    To become a  volunteer, complete the form .{'\n'}{'\n'}</p>
                    <img className='volunteer-img' src={volunteer1}/>
                    <img className='volunteer-img' src={volunteer2}/>
                </div>


                <div className='volunteer-inner2'>
                    <a className='volunteer-p1'>Name * </a>
                    <div className='volunteer-multipleInput'>
                        <input className='volunteer-Names' placeholder='First Name'></input>
                        <input className='volunteer-Names' placeholder='Last Name'></input>
                    </div>

                    <a className='volunteer-p1'> {'\n'}Email Address *{'\n'}</a>
                    <input className='volunteer-oneInput'></input>

                    <a className='volunteer-p1'> {'\n'}{'\n'}Phone *</a>
                    <div className='volunteer-multipleInput'>
                        <input className='volunteer-Phone' placeholder='(###)' ></input>
                        <input className='volunteer-Phone' placeholder='###' ></input>
                        <input className='volunteer-Phone' placeholder='####' ></input>
                    </div>

                    <p className='volunteer-p1'>Address *</p>
                    <input className='volunteer-oneInput'></input>
                    <p className='volunteer-p2'>Address 1 {'\n'}{'\n'}</p>
                    <input className='volunteer-oneInput'></input>
                    <p className='volunteer-p2'>Address 2 {'\n'}{'\n'}</p>
                    <div className='volunteer-multipleInput'>
                        <input className='volunteer-MBox'></input>
                        <p className='volunteer-p2'>City {'\n'}{'\n'}</p>
                        <input className='volunteer-MBox'></input>
                        <p className='volunteer-p2'>State/Province {'\n'}{'\n'}</p>
                    </div>
                    <input className='volunteer-MBox'></input>
                    <p className='volunteer-p2'>Zip/Postal Code {'\n'}{'\n'}</p>
                    <input className='volunteer-oneInput'></input>
                    <p className='volunteer-p2'>Country{'\n'}{'\n'}</p>

                    <a className='volunteer-p1'>{'\n'}Language(s) Spoken *</a>
                    <p className='volunteer-p2'>Please select one or more options</p>
                    <div className='volunteer-checkBox'>
                        <input type='checkbox'></input>
                        <label>Arabic {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Chinese {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>English {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>French {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Japanese {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Portuguese {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Russian {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Spanish {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Other {'\n'}{'\n'}</label>
                    </div>

                    <a className='volunteer-p1'>Availability * </a>
                    <p className='volunteer-p2'>Please select one or more options</p>
                    <div className='volunteer-checkBox'>
                        <input type='checkbox'></input>
                        <label>Weekend Workshop {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Weekday Workshop {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Ongoing, Weekday Commitment {'\n'}{'\n'}</label>
                    </div>

                    <p className='volunteer-p1'>How many hours are you willing to volunteer?</p>
                    <textarea className='volunteer-textArea' placeholder='please enter your message'></textarea>

                    <a className='volunteer-p1'> {'\n'}{'\n'} Volunteer Roles *</a>
                    <p className='volunteer-p2'>Please select one or more options</p>
                    <div className='volunteer-checkBox'>
                        <input type='checkbox'></input>
                        <label>Gathering Donations {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Hosting a Wall {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Hanging Walls {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Packaging Items for Upcoming Walls {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Technical Support {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Event Planning {'\n'}</label>
                        <input type='checkbox'></input>
                        <label>Other {'\n'}</label>
                    </div>

                    <p className='volunteer-p1'>Why would you like to volunteer with us? *</p>
                    <textarea className='volunteer-textArea' placeholder='please enter your message'></textarea>

                    <p className='volunteer-p1'>Would you be willing to complete a personal background check if you will be working with children? *</p>
                    <div className='volunteer-checkBox'>
                        <input type="radio" name="choice-radio"/>
                        <label>Yes</label>
                        <input type="radio" name="choice-radio"/>
                        <label>no {'\n'}{'\n'}</label>
                    </div>
                    <input type="submit" value="Submit" className='volunteer-submit'></input>
                </div>
            </div>
            <Shop/>
        </div>
    )
}

export default Volunteer;