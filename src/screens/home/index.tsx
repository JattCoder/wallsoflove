import React from 'react';
import './style.css';
import Header from '../../components/header';
import Body from '../../components/body';
import Bottom from '../../components/bottom';

const Home = () => {

  const [section, setSection] = React.useState<string>('Mission')

  return (
    <div className='home-frame'>
      <Header set={setSection} />
      <Body section={section} />
      <Bottom />
    </div>
  )
}

export default Home;
