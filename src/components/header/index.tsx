import React, { useEffect, useState } from 'react';
import './style.css';
import { IProps, buttons } from './interface';
import MainIcon from '../../assets/icons/main-icon.png';
import SearchIcon from '../../assets/icons/search.png';

const Header: React.FC<IProps> = (props) => {

    const [filteredBtns, setFilteredBtns] = useState<string[]>([]);

    const renderButton = (name: string, index: number): React.ReactNode => {
        return (
            <div onClick={() => props.set(name)} key={index}>
                <p className={`home-nav-button ${filteredBtns.includes(name) && 'nav-hidden'}`}>{name}</p>
            </div>
        )
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            const list = [...filteredBtns];
            if(window.innerWidth > 1170) {
                setFilteredBtns([]);
            }
            if(window.innerWidth <= 570) {
                list.push(buttons[buttons.length - 7]);
                list.push(buttons[buttons.length - 8]);
                list.slice(1, list.length - 8);
                setFilteredBtns(list);
            }
            if(window.innerWidth <= 700) {
                list.push(buttons[buttons.length - 6]);
                list.slice(1, list.length - 7);
                setFilteredBtns(list);
            }
            if(window.innerWidth <= 720) {
                list.push(buttons[buttons.length - 5]);
                list.slice(1, list.length - 6);
                setFilteredBtns(list);
            }
            if(window.innerWidth <= 845) {
                list.push(buttons[buttons.length - 4]);
                list.slice(1, list.length - 5);
                setFilteredBtns(list);
            }
            if(window.innerWidth <= 970) {
                list.push(buttons[buttons.length - 3]);
                list.slice(1, list.length - 4);
                setFilteredBtns(list);
            }
            if(window.innerWidth <= 1070) {
                list.push(buttons[buttons.length - 2]);
                list.slice(1, list.length - 3);
                setFilteredBtns(list);
            }
            if(window.innerWidth <= 1170) {
                list.push(buttons[buttons.length - 1]);
                list.slice(1, list.length - 2);
                setFilteredBtns(list);
            }
        } )
    },[])

    return (
        <div className='home-header'>
            <img onClick={() => props.set('Home')} className='home-icon' src={MainIcon} alt={'Walls of Love'} />
            <div className='home-nav'>
                {buttons.map(renderButton)}
                <div className='home-donate-btn'>
                    <p className='home-donate-txt'>Donate</p>
                </div>
                <div>
                    <img className='home-search' src={SearchIcon} alt='Search' />
                </div>
                <div>
                    <p className='home-cart'>Cart (0)</p>
                </div>
            </div>
        </div>
    )
}

export default Header;