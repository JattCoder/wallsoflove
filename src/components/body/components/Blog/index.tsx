import React from 'react';
import blog1 from '../../../../assets/images/Blog-1.png';
import blog2 from '../../../../assets/images/Blog-2.png';
import blog3 from '../../../../assets/images/Blog-3.png';
import blog4 from '../../../../assets/images/Blog-4.png';
import blog5 from '../../../../assets/images/Blog-5.png';
import blog6 from '../../../../assets/images/Blog-6.png';

import './style.css';
import { IProps } from './interface';

const Blog: React.FC<IProps> = (props) => {

    return (
        <div className='blog-frame'>
            <div className='blog-frame1'>
                <div className='blog-leftHalf'>
                    <img className='blog-img' src={blog1}/>
                    <p className='blog-dates'>August 29, 2021</p>
                    <a className='blog-headLine'>Walls of Love Partners with the Cleveland Indians to do its EPIC 1000th Wall in Cleveland</a>
                    <p className='blog-subtitle'>Event provides essentials, school supplies and hygiene supplies to those in need.</p>
                    <a className='blog-subtitle1'>READ MORE ....</a>
                </div>
                <div className='blog-rightHalf'>
                    <img className='blog-img' src={blog2}/>
                    <p className='blog-dates'>August 29, 2021</p>
                    <a className='blog-headLine'>"What you put out into the universe is what you get back."</a>
                </div>
            </div>
            <div className='blog-frame1'>
                <div className='blog-leftHalf'>
                    <img className='blog-img' src={blog3}/>
                    <p className='blog-dates'>April 27, 2021</p>
                    <a className='blog-headLine'>Walls of Love is Putting Up their 1000th Wall | Why should we come to your city?</a>
                    <p className='blog-subtitle'>Walls of Love is coming up on their 1000th wall and needs to know where it should be placed! Starting April 28th, we will be accepting entries as to why we should come to your city to put up our 1000th wall. We will stop taking entries on May 31, 2021 and announce the winning city on June 14, 2021. Entries can be sent via email to wallsoflove1@gmail.com.</p>
                    <a className='blog-subtitle1'>READ MORE ....</a>
                </div>
                <div className='blog-rightHalf'>
                    <img className='blog-img' src={blog4}/>
                    <p className='blog-dates'>August 21, 2019</p>
                    <a className='blog-headLine'>25 Walls in One Day! Join us in Making a Difference Throughout Northeast Ohio November 9th</a>
                </div>
            </div>
            <div className='blog-frame1'>
                <div className='blog-leftHalf'>
                    <img className='blog-img' src={blog5}/>
                    <p className='blog-dates'>July 6, 2019</p>
                    <a className='blog-headLine'>Walls of Love T-Shirts Now Available</a>
                    <p className='blog-subtitle'>100% of the proceeds from these T-shirts goes directly back to those in need.</p>
                    <a className='blog-subtitle1'>READ MORE ....</a>
                </div>
                <div className='blog-rightHalf'>
                    <img className='blog-img' src={blog6}/>
                    <p className='blog-dates'>May 9, 2018</p>
                    <a className='blog-headLine'>100th Wall Featured on Channel 19 News</a>
                    <p className='blog-subtitle'>This is an example blog post excerpt.</p>
                    <a className='blog-subtitle1'>READ MORE ....</a>
                </div>
            </div>
            <div className='blog-frame1'>
                <div className='blog-leftHalf'>
                    <img className='blog-img' src={''}/>
                    <p className='blog-dates'></p>
                    <a className='blog-headLine'></a>
                    <p className='blog-subtitle'></p>
                    <a className='blog-subtitle1'></a>
                </div>
                <div className='blog-rightHalf'>
                    <img className='blog-img' src={''}/>
                    <p className='blog-dates'></p>
                    <a className='blog-headLine'></a>
                    <p className='blog-subtitle'></p>
                    <a className='blog-subtitle1'></a>
                </div>
            </div>
        </div>
    )
}

export default Blog;