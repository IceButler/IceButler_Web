import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import './ReportDetail.css'
import MoreIcon from 'assets/images/moreIcon.png'
import RecipeTr from './RecipeTr';
import RecipeFoodLi from './RecipeFoodLi';

function ReportManage() {
    let { recipeReportIdx } = useParams();

    const [info, setInfo] = useState([]);

    // 데이터 호출
    useEffect(() => {
        axios.get('/reports/' + recipeReportIdx)
            .then(res => {
                setInfo(res.data.data)
            })
            .catch(err => console.log(err));
    }, [recipeReportIdx]);

    const onSubmitHandler = (e) => {
        const inputMemo = e.target.memo.value;
        e.preventDefault();
        axios.patch('/reports/' + recipeReportIdx, {
            memo: inputMemo
        }).then((res) => {
            alert("저장되었습니다.")
        }).catch((error) => {
            alert("저장에 실패했습니다.")
        });
    }

    return (
        <div className='page'>
            <div className='reportDetailContainer'>
                <p className="reportDetailTitle">신고 상세 내역</p>
                <div className="contentBox">
                    <div className="titleBar">
                        {info.recipeName}
                        <img src={MoreIcon} alt='more' />
                    </div>
                    <div className='detailContent'>
                        <div className='reportContent'>
                            <div className='reportInfo'>
                                <div className='report-line'>
                                    <span className='span-title'>작성자</span>
                                    <span className='span-info'>{info.author}</span>
                                </div>
                                <div className='report-line'>
                                    <span className='span-title'>신고사유</span>
                                    <span className='span-info'>{info.reason}</span>
                                </div>
                                <div className='report-line'>
                                    <span className='span-title'>신고자</span>
                                    <span className='span-info'>{info.reporter}</span>
                                </div>
                                <div className='report-line'>
                                    <span className='span-title'>신고일자</span>
                                    <span className='span-info'>{info.reportDate}</span>
                                </div>
                            </div>
                            <div className='reportMemo'>
                                <form method="patch" id="memo-form" onSubmit={onSubmitHandler}>
                                    <div className='memoHeader'>
                                        <span className='span-title'>처리메모</span>
                                        <input type='submit' className='memoBtn' value="저장" />
                                    </div>
                                    <textarea form='memo-form' name='memo' value={info.memo}></textarea>
                                </form>
                            </div>
                        </div>
                        <div className='recipeContent'>
                            <div className='recipeTop'>
                                <div className='recipeInfo'>
                                    <img className='mainImg' src={info.recipeImgUrl} alt='mainImg' />
                                    <div className='recipeDetailInfo'>
                                        <div className='recipeInfo-line'>
                                            <span className='span-title'>카테고리</span>
                                            <span className='span-info'>{info.recipeCategory}</span>
                                        </div>
                                        <div className='recipeInfo-line'>
                                            <span className='span-title'>분량</span>
                                            <span className='span-info'>{info.quantity}인분</span>
                                        </div>
                                        <div className='recipeInfo-line'>
                                            <span className='span-title'>소요시간</span>
                                            <span className='span-info'>{info.leadTime}분</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='recipeFood'>
                                    <span className='span-title'>재료</span>
                                    <ul>
                                        <RecipeFoodLi info={info.recipeFoods} />
                                    </ul>
                                </div>
                            </div>
                            <div className='recipeBottom'>
                                <span className='span-title'>레시피</span>
                                <div className='recipeGrid'>
                                    <RecipeTr info={info.cookery} />
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