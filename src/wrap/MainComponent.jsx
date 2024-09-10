import React, { useState } from 'react';
import './scss/main.scss';
import success from '../wrap/success.png';
import fail from '../wrap/fail.png';


export default function MainComponent({ finalResult, threedaysPageClose }) {
    
    React.useEffect(() => {
        if (finalResult !== null) {
            console.log(`최종 결과: ${finalResult === 'success' ? '성공' : '실패'}`);
        }
    }, [finalResult]);

    return (
        <div id="main">
            <div className="container">
                {finalResult !== null && (
                    <div className="final-image">
                        <img src={finalResult === 'success' ? success : fail} alt="Final Result" />
                    </div>
                )}
            </div>
        </div>
    );
}
