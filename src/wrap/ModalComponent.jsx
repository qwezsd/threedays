import React from 'react';
import './scss/modal.scss'

export default function ModalComponent ()  {
    return (
        <div id='modal'>
            <div className="container">
                <div className="title">
                    <input type="text" placeholder='목표 설정하삼' />
                </div>
                <div className="content">
                    <div className="gap">
                        <label htmlFor="3일">3일</label>
                        <input type="radio" id='3일' />
                    </div>
                    <div className="gap">
                        <label htmlFor="6일">6일</label>
                        <input type="radio" id='6일' />
                    </div>
                    <div className="gap">
                        <label htmlFor="9일">9일</label>
                        <input type="radio" id='9일' />
                    </div>
                </div>
            </div>
        </div>
    );
};