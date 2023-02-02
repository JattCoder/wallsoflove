import React from 'react';
import './style.css';
import { IProps } from './interface';

const Blog: React.FC<IProps> = (props) => {

    return (
        <div className='blog-frame'>
            <p>blog</p>
        </div>
    )
}

export default Blog;