import React, { useState } from 'react';
import './scss/modal.scss';

// 이미지 불러오기
import sticker1 from '../wrap/success_day.png';
import sticker2 from '../wrap/fail_day.png';
// import sticker3 from './images/sticker3.png';

// 성공하면 100점 실패하면 0점 --> 이틀 성공, 이틀 실패하면 50점임
// 총합 50점부터 성공한 걸로 ㄱㄱ 

const stickersOption = [
    { id: 'sticker1', src: sticker1, alt: '스티커 1' },
    { id: 'sticker2', src: sticker2, alt: '스티커 2' }
    // { id: 'sticker3', src: sticker3, alt: '스티커 3' },
];

export default function ModalComponent({ threedaysPageClose }) {

    const [duration, setDuration] = useState(3); // 기본값은 3일
    const [dates, setDates] = useState([]);
    const [stickers, setStickers] = useState({}); // 날짜별 스티커 상태 관리
    const [isStarted, setIsStarted] = useState(false); // 시작 여부 상태

    const handleDurationChange = (e) => {
        setDuration(Number(e.target.value));
    };

    const calculateDates = () => {
        const today = new Date();
        const dateList = [];
        for (let i = 0; i < duration; i++) {
            const newDate = new Date();
            newDate.setDate(today.getDate() + i);
            const month = newDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
            const day = newDate.getDate();
            dateList.push(`${month}/${day}`);
        }
        setDates(dateList);
    };

    const onClickOutsideModal = (e) => {
        if (e.target.id === 'modal') {
            threedaysPageClose();
        }
    };

    const handleStart = () => {
        calculateDates();
        setIsStarted(true); // 시작 버튼 클릭 시 상태 변경
    };

    const handleStickerChange = (date, stickerId) => {
        setStickers(prevStickers => ({
            ...prevStickers,
            [date]: stickerId
        }));
    };

    const onClickPrevPage = () => {
        setIsStarted(false)
    }
    return (
        <div id='modal' onClick={onClickOutsideModal}>
            <div className="container">
                <div className="title">
                    <input type="text" placeholder='목표 설정하삼' />
                </div>
                <div className="content">
                    {!isStarted ?( //시작되지 않은 경우
                    <div className="duration">
                            <div className="gap">
                                <input type="radio" id='3일' name='작심삼일' value={3} onChange={handleDurationChange} checked={duration === 3} />
                                <label htmlFor="3일">3일</label>
                            </div>
                            <div className="gap">
                                <input type="radio" id='6일' name='작심삼일' value={6} onChange={handleDurationChange} checked={duration === 6} />
                                <label htmlFor="6일">6일</label>
                            </div>
                            <div className="gap">
                                <input type="radio" id='9일' name='작심삼일' value={9} onChange={handleDurationChange} checked={duration === 9} />
                                <label htmlFor="9일">9일</label>
                            </div>
                    </div>
                    ) : ( //시작 버튼이 클릭된 후 
                    <div className="date-list">
                        <ul>
                                {dates.map((date, index) => (
                                    <li key={index}>
                                        {date}
                                        <div className="sticker-selection">
                                            {stickersOption.map(sticker => (
                                                <img 
                                                    key={sticker.id}
                                                    src={sticker.src}
                                                    alt={sticker.alt}
                                                     onClick={() => handleStickerChange(date, sticker.id)}
                                                    // style={{
                                                    //     border: stickers[date] === sticker.id ? '2px solid blue' : 'none'
                                                    // }}
                                                    
                                                />
                                            ))}
                                        </div>
                                        
                                    </li>
                                ))}
                        </ul>
                    </div>
                    )}
                    <div className="button">
                        {!isStarted && (
                            <button onClick={handleStart}><span>시작</span></button>
                        )}
                        {
                            isStarted && (
                            <>
                                <button onClick={onClickPrevPage}><span>이전</span></button>
                                <button><span>다음</span></button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
