import React, {useState} from 'react';
import './wrap.scss'
import HeaderComponent from './wrap/HeaderComponent';
import ModalComponent from './wrap/ModalComponent';
import MainComponent from './wrap/MainComponent';

export default function WrapComponent () {

    const [state, setState] = useState({
        modal : false
    })

    const newPageOpenModal = () => {
        setState({
            ...state,
            modal:true
        })
    }
    const threedaysPageClose = () => {
        setState({
            ...state,
            modal:false
        })
    }

    return (
        <div id='wrap' >
            <HeaderComponent newPageOpenModal={newPageOpenModal}/>
            <MainComponent modal={state.modal}/>
            {state.modal &&
                <ModalComponent threedaysPageClose={threedaysPageClose} />
            }
        </div>
    );
};