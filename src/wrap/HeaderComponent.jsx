import React from 'react';
import './scss/header.scss'

export default function HeaderComponent ({newPageOpenModal}) {

    const onClickPage = () => {
        newPageOpenModal()
    }
    
    return (
        <div id='header'>
            <div className="container">
                <div className="title">
                    <div className="text">
                        <span>
                        작심삼일
                        </span>
                    </div>
                    <div className="img">
                        <span onClick={onClickPage}>+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};