import React from 'react';
import './scss/modal.scss'

export default function ModalComponent ({threedaysPageClose})  {

    const onClickOutsideModal = (e) => {

        console.log(e.target)
        if (e.target.id === 'modal') {
            threedaysPageClose();
        }
    };

    return (
        <div id='modal' onClick={onClickOutsideModal}>
            <div className="container">
                <div className="title">
                    <input type="text" placeholder='목표 설정하삼' />
                </div>
                <div className="content">
                    <div className="gap">
                        <input type="radio" id='3일' name='작심삼일' />
                        <label htmlFor="3일">3일</label>
                    </div>
                    <div className="gap">
                        <input type="radio" id='6일' name='작심삼일' />
                        <label htmlFor="6일">6일</label>
                    </div>
                    <div className="gap">
                        <input type="radio" id='9일' name='작심삼일' />
                        <label htmlFor="9일">9일</label>
                    </div>
                </div>
            </div>
        </div>
    );
};