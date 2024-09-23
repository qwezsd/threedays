import React from 'react';
import './scss/main.scss';
import success from '../wrap/success.png';
import fail from '../wrap/fail.png';

export default function MainComponent({ finalResult }) {

    React.useEffect(() => {
        if (finalResult.length > 0) {
            console.log('최종 결과:', finalResult.map((result, idx) => `결과 ${idx + 1}: ${result === 'success' ? '성공' : '실패'}`).join(', '));
        }
    }, [finalResult]);

    return (
        <div id="main">
            <div className="container">
                {/* {finalResult.length > 0 && ( */}
                    <div className="final-image">
                        <ul>
                            {/* {finalResult.map((result, index) => (
                                <li key={index}>
                                    <img src={result === 'success' ? success : fail} alt={`Result ${index + 1}`} />
                                    <p>{`결과 ${index + 1}: ${result === 'success' ? '성공' : '실패'}`}</p>
                                </li>
                            ))} */}
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                            <div className="gap">
                                <li >
                                    <img src={success} alt="" />
                                    <p>성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공성공</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                {/* )} */}
            </div>
        </div>
    );
}
