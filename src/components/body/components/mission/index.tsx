import React from 'react';
import mission1 from '../../../../assets/images/Mission-1.png';
import mission2 from '../../../../assets/images/Mission-2.png';
import mission3 from '../../../../assets/images/Mission-3.png';
import './style.css';
import { IProps } from './interface';

const Mission: React.FC<IProps> = (props) => {

    return (
        <div className='mission-frame'>
            <div className='mission-frame1'>
                <div className='inner1'>
                    <h2 className='inner1-title'>Our Mission</h2>
                    <p className='inner1-p1'>The mission is simple but powerful, spread love in the community to support those in need without stigma.</p>
                    <p className='inner1-p2'>Walls of Love is a nationwide initiative founded in the heart of Cleveland, Ohio by Holly Jackson. 100% of the proceeds and donations to Walls of Love go directly to impact individuals in need.</p>
                    <p className='inner1-p3'>Once homeless herself, Holly has made it her life’s mission to pay it forward to the homeless. By placing items including basic necessities and winter gear on walls within regions of poverty, the Walls of Love volunteers have been able to help an estimated 925,000 individuals. </p>
                    <a className='inner1-p4' href={'https://https://www.wallsoflove.com/impact.com'}>Learn more about our impact.</a>
                </div>
                <div className='img1-frame'>
                    <img className='inner1-img' src={mission1} />
                </div>
            </div>

            <div className='mission-frame2'>
                <div className='img2-frame'>
                    <img className='inner2-img' src={mission2} />
                </div>
                <div className='inner2'>
                    <p className='inner2-p1'>"I started Walls of Love because I know what it is like to be in a place where you need help and don't want to ask for  it out of fear of rejection and judgements. I want people to know that there are others that truly care. I strive to make the world better one person at a time.”</p>
                    <p className='inner2-p2'>— Holly Jackson, Founder of Walls of Love</p>
                </div>
            </div>

            <div className='mission-frame3'>
                <div className='inner3'>
                    <h2 className='inner3-title'>Founded in a Moment of Need</h2>
                    <p className='inner3-p1'>Once pregnant and homeless herself within a domestic violence situation, Walls of Love Founder Holly Jackson knows first hand how defeated and lonely it can feel to be without a home and lacking hope. </p>
                    <p className='inner3-p2'>Despite her own personal struggles, Holly overcame homelessness and poverty.</p>
                    <p className='inner3-p3'>In November 2018, Holly started the Walls of Love campaign to give back to her local community in Cleveland, Ohio and the surrounding neighborhoods. Holly explained, “I only had the intention of doing one wall, but that is not the calling that I ended up receiving. I ended up connecting to the people in my city that needed help on such an emotional and spiritual level that this journey has now led me to my 1934th wall as of November 2022. We have also helped over 925,000 people since November of 2018.  The pride and love that we receive from the homeless and those in need and the hugs and love that they share after previously feeling like they were forgotten by the world truly, both inspires me and breaks my heart at the same time.”</p>
                    <p className='inner3-p4'>Our goal at Walls of Love is to continuously grow in cities throughout the United States touching the lives of as many individuals in need as we possibly can. When not busy supporting the rapidly growing organization, Holly can be found at Cleveland sporting events, concerts, spending time with family or cuddled up with a good book.</p>
                    <p className='inner3-p5'>To join Holly’s mission and become a part of the Walls of Love community of givers, contact us today.</p>
                </div>
                <div className='img3-frame'>
                    <img className='inner3-img' src={mission3} />
                </div>
            </div>

            <div>
                <img/>
                <img/>
            </div>
        </div>
    )
}

export default Mission;