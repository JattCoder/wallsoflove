import React from 'react';
import './style.css';
import { IProps } from './interface';

const UpcomingEvents: React.FC<IProps> = (props) => {

    return (
        <div className='upcoming-frame'>
            <div className='upcoming-frame1'>
                <h2 className='upcoming-title'>Upcoming Events & Wall{'\n'}Placements</h2>
                <p className='upcoming-subtitle'>
                Long Beach, CA/Los Angeles, CA  5/2023{'\n'}{'\n'}
                Detroit, MI &emsp;&emsp;&emsp; Spring 2023 {'\n'}{'\n'}
                5 yr Anniversary &nbsp; 11/2023{'\n'}{'\n'}
                Portland, ME  &emsp;&emsp; Fall 2023 {'\n'}{'\n'}
                Portland, OR &emsp;&emsp; Spring 2023  {'\n'}{'\n'}
                San Juan, PR &emsp;&emsp; Fall 2023 {'\n'}{'\n'}
                Bismark, ND &emsp;&emsp;&nbsp; Spring 2023 {'\n'}{'\n'}
                Nashville, TN &emsp;&emsp; Fall 2023{'\n'}{'\n'}
                </p>
                {/* 
                &nbsp; 1 space.  
                &ensp; 2 spaces. 
                &emsp; 4 spaces. */}
            </div>
        </div>
    )
}

export default UpcomingEvents;