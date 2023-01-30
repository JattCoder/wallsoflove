import React from 'react';
import './style.css';
import { IProps } from './interface';
import Mission from './components/mission';

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
            <Mission />
        </div>
    )
}

export default Body;