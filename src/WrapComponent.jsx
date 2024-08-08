import React from 'react';
import './wrap.scss'
import HeaderComponent from './wrap/HeaderComponent';
import ModalComponent from './wrap/ModalComponent';

export default function WrapComponent () {
    return (
        <div id='wrap'>
            <HeaderComponent />
            <ModalComponent />
        </div>
    );
};