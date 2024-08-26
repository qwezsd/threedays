import React, {useState} from 'react';
import './scss/main.scss'
import success from '../wrap/success.png'
import fail from '../wrap/fail.png'
import ModalComponent from './ModalComponent';

export default function MainComponent ({  modal, threedaysPageClose }) {

    const [finalResult, setFinalResult] = useState(null)

    return (
        <div className="main-container">
            {modal && (
                <ModalComponent 
                    // threedaysPageClose={threedaysPageClose} 
                    setFinalResult={setFinalResult} 
                />
            )}

            {finalResult && (
                <div className="final-image">
                    <img src={finalResult === 'success' ? success : fail} alt="Final Result" />
                </div>
            )}
        </div>
    );
}