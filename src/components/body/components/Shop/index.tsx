import React from 'react';
import './style.css';
import { IProps } from './interface';
import shop1 from '../../../../assets/images/Shop-1.png';


const Shop: React.FC<IProps> = (props) => {

    return (
        <div className='shop-frame'>
            <div className='shop-frame1'>
                <div className='shop-inner'>
                    <h2 className='shop-title'>Shop</h2>
                    <p className='shop-p1'>Support Walls of Love and showcase your passion for our purpose with a Walls of Love shirt. All proceeds from each shirt purchased goes directly back to the communities we serve.</p>
                </div>
                <img className='shop-img' src={shop1}/>
                <p className='shop-p1'>Walls of Love T-shirt - {'\n'} Various Colors & Sizes {'\n'} Available</p>
                <p className='shop-p2'>from $15.00 {'\n'}{'\n'} 100% of the proceeds goes directly {'\n'} back to the communities we serve. {'\n'}{'\n'}</p>
            </div>
        </div>
    )
}

export default Shop;