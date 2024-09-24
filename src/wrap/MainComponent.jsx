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
                            <li >
                                <div className="gap">
                                    <img src={success} alt="" />
                                </div>
                                    <p>tq</p>
                            </li>
                            <li >
                                <div className="gap">
                                    <img src={success} alt="" />
                                </div>
                                    <p>tq</p>
                            </li>
                            <li >
                                <div className="gap">
                                    <img src={success} alt="" />
                                </div>
                                    <p>tq</p>
                            </li>
                            <li >
                                <div className="gap">
                                    <img src={success} alt="" />
                                </div>
                                    <p>tq</p>
                            </li>
                            <li >
                                <div className="gap">
                                    <img src={success} alt="" />
                                </div>
                                    <p>tq</p>
                            </li>
                            <li >
                                <div className="gap">
                                    <img src={success} alt="" />
                                </div>
                                    <p>tq</p>
                            </li>
                            <li >
                                <div className="gap">
                                    <img src={success} alt="" />
                                </div>
                                    <p>tq</p>
                            </li>
                            <li >
                                <div className="gap">
                                    <img src={success} alt="" />
                                </div>
                                    <p>tq</p>
                            </li>
                            <li >
                                <div className="gap">
                                    <img src={success} alt="" />
                                </div>
                                    <p>tq</p>
                            </li>
                            <li >
                                <div className="gap">
                                    <img src={success} alt="" />
                                </div>
                                    <p>tq</p>
                            </li>
                            <li >
                                <div className="gap">
                                    <img src={success} alt="" />
                                </div>
                                    <p>tq</p>
                            </li>
                        </ul>
                    </div>
                {/* )} */}
            </div>
        </div>
    );
}
