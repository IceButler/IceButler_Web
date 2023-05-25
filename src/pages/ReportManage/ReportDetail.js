import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import './ReportDetail.css'
import MoreIcon from 'assets/images/moreIcon.png'

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
                                        <span>처리메모</span>
                                        <input type='submit' className='memoBtn' value="저장" />
                                    </div>
                                    <textarea form='memo-form' name='memo'></textarea>
                                </form>
                            </div>
                        </div>
                        <div className='recipeContent'>
                            <span>대표사진</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportManage;