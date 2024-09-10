import React, { useState } from 'react';
import './scss/main.scss';
import success from '../wrap/success.png';
import fail from '../wrap/fail.png';
import ModalComponent from './ModalComponent';

export default function MainComponent({ modal, threedaysPageClose }) {
    const [finalResult, setFinalResult] = useState(null);

    React.useEffect(() => {
        if (finalResult !== null) {
            console.log(`최종 결과: ${finalResult === 'success' ? '성공' : '실패'}`);
        }
    }, [finalResult]);

    return (
        <div id="main">
            <div className="container">
                {modal && (
                    <ModalComponent 
                        threedaysPageClose={threedaysPageClose} 
                        setFinalResult={setFinalResult} 
                    />
                )}

                 {/* <ModalComponent 
                    threedaysPageClose={threedaysPageClose} 
                    setFinalResult={setFinalResult} 
                /> */}

                {finalResult !== null && (
                    <div className="final-image">
                        <img src={finalResult === 'success' ? success : fail} alt="Final Result" />
                    </div>
                )}
            </div>
        </div>
    );
}
