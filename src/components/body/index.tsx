import React from 'react';
import './style.css';
import { IProps } from './interface';
import Mission from './components/mission';
import Volunteer from './components/volunteer/index';
import UpcomingEvents from './components/upcomingEvents';
import Press from './components/press';
import Blog from './components/blog';
import Shop from './components/shop';
import Partners from './components/partners';
import Contact from './components/contact';

const Body: React.FC<IProps> = (props) => {

    const [currentSection, setCurrentSection] = React.useState<string>('');

    React.useEffect(() => {
        if(currentSection !== props.section) {
            setCurrentSection(props.section);
        }
    },[props.section])

    console.log('Page: ',currentSection);

    return (
        <div className='body-frame'>
            {currentSection === 'Mission' && <Mission />}
            {currentSection === 'Volunteer' && <Volunteer />}
            {currentSection === 'Upcoming Events' && <UpcomingEvents />}
            {currentSection === 'Press' && <Press />}
            {currentSection === 'Blog' && <Blog />}
            {currentSection === 'Shop' && <Shop />}
            {currentSection === 'Partners' && <Partners />}
            {currentSection === 'Contact' && <Contact />}
        </div>
    )
}

export default Body;