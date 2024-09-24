import React, { useState } from 'react';
import './wrap.scss';
import HeaderComponent from './wrap/HeaderComponent';
import ModalComponent from './wrap/ModalComponent';
import MainComponent from './wrap/MainComponent';

export default function WrapComponent() {
    
    const [finalResults, setFinalResults] = useState([]);
    const [state, setState] = useState({
        modal: false
    });


    const newPageOpenModal = () => {
        setState({
            ...state,
            modal: true
        });
    };

    const threedaysPageClose = () => {
        setState({
            ...state,
            modal: false
        });
    };

    const handleFinalResult = (result, goal) => {
        setFinalResults(prevResults => [...prevResults, {result, goal}]);
        threedaysPageClose();
    };
    
    return (
        <div id='wrap'>
            <HeaderComponent newPageOpenModal={newPageOpenModal} />
            <MainComponent finalResult={finalResults} threedaysPageClose={threedaysPageClose} />

            {state.modal && (
                <ModalComponent 
                    threedaysPageClose={threedaysPageClose} 
                    setFinalResult={handleFinalResult}  // 누적된 결과를 저장하는 함수 전달
                />
            )}
        </div>
    );
}
