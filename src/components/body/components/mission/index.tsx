import React from 'react';
import mission1 from '../../../../assets/images/Mission-1.png';
import mission2 from '../../../../assets/images/Mission-2.png';
import mission3 from '../../../../assets/images/Mission-3.png';
import mission4 from '../../../../assets/images/Mission-4.png';
import mission5 from '../../../../assets/images/Mission-5.png';
import './style.css';
import { IProps } from './interface';

const Mission: React.FC<IProps> = (props) => {

    return ( 
        <div className='mission-frame'>
            <div className='mission-frame1'>
                <div className='mission-inner1'>
                    <h2 className='missionInner1-title'>Our Mission</h2>
                    <p className='missionInner1-p'>The mission is simple but powerful, spread love in the community to support those in need without stigma. {'\n'}{'\n'} 
                    Walls of Love is a nationwide initiative founded in the heart of Cleveland, Ohio by Holly Jackson. 100% of the proceeds and donations to Walls of Love go directly to impact individuals in need. {'\n'}{'\n'}
                    Once homeless herself, Holly has made it her life’s mission to pay it forward to the homeless. By placing items including basic necessities and winter gear on walls within regions of poverty, the Walls of Love volunteers have been able to help an estimated 925,000 individuals. </p>
                    <a className='missionInner1-a' href={'https://https://www.wallsoflove.com/impact.com'}>Learn more about our impact. {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</a>
                </div>
                <div className='missionImg1-frame'>
                    <img className='missionInner1-img' src={mission1} />
                </div>
            </div>

            <div className='mission-frame2'>
                <div className='missionImg2-frame'>
                    <img className='missionInner2-img' src={mission2} />
                </div>
                <div className='mission-inner2'>
                    <p className='missionInner2-p'>"I started Walls of Love because I know what it is like to be in a place where you need help and don't want to ask for  it out of fear of rejection and judgements. I want people to know that there are others that truly care. I strive to make the world better one person at a time.” {'\n'}{'\n'} 
                    — Holly Jackson, Founder of Walls of Love</p>
                </div>
            </div>

            <div className='mission-frame3'>
                <div className='mission-inner3'>
                    <h2 className='missionInner3-title'>Founded in a Moment of Need</h2>
                    <p className='missionInner3-p'>Once pregnant and homeless herself within a domestic violence situation, Walls of Love Founder Holly Jackson knows first hand how defeated and lonely it can feel to be without a home and lacking hope.{'\n'}{'\n'}
                    Despite her own personal struggles, Holly overcame homelessness and poverty.{'\n'}{'\n'}
                    In November 2018, Holly started the Walls of Love campaign to give back to her local community in Cleveland, Ohio and the surrounding neighborhoods. Holly explained, “I only had the intention of doing one wall, but that is not the calling that I ended up receiving. I ended up connecting to the people in my city that needed help on such an emotional and spiritual level that this journey has now led me to my 1934th wall as of November 2022. We have also helped over 925,000 people since November of 2018.  The pride and love that we receive from the homeless and those in need and the hugs and love that they share after previously feeling like they were forgotten by the world truly, both inspires me and breaks my heart at the same time.”{'\n'}{'\n'}
                    Our goal at Walls of Love is to continuously grow in cities throughout the United States touching the lives of as many individuals in need as we possibly can. When not busy supporting the rapidly growing organization, Holly can be found at Cleveland sporting events, concerts, spending time with family or cuddled up with a good book.{'\n'}{'\n'}
                    To join Holly’s mission and become a part of the Walls of Love community of givers, contact us today.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'} </p>
                </div>
                <div className='missionImg3-frame'>
                    <img className='missionInner3-img' src={mission3} />
                </div>
            </div>

            <div className='mission-frame4'>
                <img className='missionInner4-img' src={mission4}/>
                <img className='missionInner4-img' src={mission5}/>
            </div>
        </div>
    )
}

export default Mission;