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
                    <input type="text" placeholder='며칠 실행?' />
                </div>
            </div>
        </div>
    );
};