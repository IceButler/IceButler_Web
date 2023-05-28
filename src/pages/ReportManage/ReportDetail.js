import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import './ReportDetail.css'
import MoreIcon from 'assets/images/moreIcon.png'
import RecipeTr from './RecipeTr';

function ReportManage() {
    let { reportIdx } = useParams();

    const onSubmitHandler = (e) => {
        const inputMemo = e.target.memo.value;
        e.preventDefault();
        axios.post('/admin/' + reportIdx, {
            memo: inputMemo
        }).then((res) => {
            alert("저장되었습니다.")
        }).catch((error) => {
            alert("저장에 실패했습니다.")
        });
    }

    const [info, setInfo] = useState([]);

    // 데이터 호출
    useEffect(() => {
        // axios.get('https://za8hqdiis4.execute-api.ap-northeast-2.amazonaws.com/dev/dev-ice-bulter-main/admin/users?active=true')
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='page'>
            <div className='reportDetailContainer'>
                <p className="reportDetailTitle">신고 상세 내역</p>
                <div className="contentBox">
                    <div className="titleBar">
                        레시피 제목
                        <img src={MoreIcon} alt='more' />
                    </div>
                    <div className='detailContent'>
                        <div className='reportContent'>
                            <div className='reportInfo'>
                                <div className='report-line'>
                                    <span className='span-title'>작성자</span>
                                    <span className='span-info'>작성자</span>
                                </div>
                                <div className='report-line'>
                                    <span className='span-title'>신고사유</span>
                                    <span className='span-info'>작성자</span>
                                </div>
                                <div className='report-line'>
                                    <span className='span-title'>신고자</span>
                                    <span className='span-info'>작성자</span>
                                </div>
                                <div className='report-line'>
                                    <span className='span-title'>신고일자</span>
                                    <span className='span-info'>작성자</span>
                                </div>
                            </div>
                            <div className='reportMemo'>
                                <form method="patch" id="memo-form" onSubmit={onSubmitHandler}>
                                    <div className='memoHeader'>
                                        <span className='span-title'>처리메모</span>
                                        <input type='submit' className='memoBtn' value="저장" />
                                    </div>
                                    <textarea form='memo-form' name='memo'></textarea>
                                </form>
                            </div>
                        </div>
                        <div className='recipeContent'>
                            <div className='recipeTop'>
                                <div className='recipeInfo'>
                                    <img className='mainImg' src={`${process.env.PUBLIC_URL}/logo192.png`} alt='mainImg' />
                                    <div className='recipeDetailInfo'>
                                        <div className='recipeInfo-line'>
                                            <span className='span-title'>카테고리</span>
                                            <span className='span-info'>국/찌개/전골</span>
                                        </div>
                                        <div className='recipeInfo-line'>
                                            <span className='span-title'>분량</span>
                                            <span className='span-info'>1인분</span>
                                        </div>
                                        <div className='recipeInfo-line'>
                                            <span className='span-title'>소요시간</span>
                                            <span className='span-info'>90분</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='recipeFood'>
                                    <span className='span-title'>재료</span>
                                    <ul>
                                        <li>재료 1인분</li>
                                        <li>재료 1장</li>
                                        <li>고춧가루 100g</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료 1인분</li>
                                        <li>재료 1장</li>
                                        <li>고춧가루 100g</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료 1인분</li>
                                        <li>재료 1장</li>
                                        <li>고춧가루 100g</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료 1인분</li>
                                        <li>재료 1장</li>
                                        <li>고춧가루 100g</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료 1인분</li>
                                        <li>재료 1장</li>
                                        <li>고춧가루 100g</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                        <li>재료</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='recipeBottom'>
                                <span className='span-title'>레시피</span>
                                <div className='recipeGrid'>
                                    <RecipeTr info={info} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportManage;