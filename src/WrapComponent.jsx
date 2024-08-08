import React, {useState} from 'react';
import './wrap.scss'
import HeaderComponent from './wrap/HeaderComponent';
import ModalComponent from './wrap/ModalComponent';

export default function WrapComponent () {

    const [state, setState] = useState({
        modal : false
    })

    const ModalClick = () => {
        setState({
            ...state,
            modal:true
        })
    }

    return (
        <div id='wrap'>
            <HeaderComponent />
            {state.modal &&
                <ModalComponent />
            }
        </div>
    );
};