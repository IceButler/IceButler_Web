import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import './ReportDetail.css'
import MoreIcon from 'assets/images/moreIcon.png'
import RecipeTr from './RecipeTr';
import RecipeFoodLi from './RecipeFoodLi';
import { removeCookie, getCookie } from 'pages/Login/Login.js';

function ReportManage() {
    const PROXY = window.location.hostname === 'localhost' ? '' : '/recipe_proxy';
    let { recipeReportIdx } = useParams();

    const [info, setInfo] = useState([]);

    const movePage = useNavigate();

    // 데이터 호출
    useEffect(() => {
        const token = getCookie('Authorization');
        if (token == null) {
            movePage('/');
        }
        axios.get(`${PROXY}/reports/` + recipeReportIdx, {
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                if (res.data.statusCode === 200) {
                    setInfo(res.data.data)
                }else if(res.data.statusCode === 404) {
                    alert('토큰이 만료되었습니다. 로그인 화면으로 이동합니다.');
                    removeCookie('Authorization');
                    movePage('/');
                    window.location.reload();
                }
            })
            .catch(err => console.log(err));
    }, [recipeReportIdx]);

    const onSubmitHandler = (e) => {
        const inputMemo = e.target.memo.value;
        e.preventDefault();
        const token = getCookie('Authorization');
        if (token == null) {
            movePage('/');
        }
        axios.patch(`${PROXY}/reports/` + recipeReportIdx, {
            memo: inputMemo
        }, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            if (res.data.statusCode === 200) {
                alert("저장되었습니다.");
            }else{
                alert("저장에 실패했습니다.");
            }
        }).catch((error) => {
            alert("저장에 실패했습니다.");
        });
    }

    const handleHide = (id) => {
        const token = getCookie('Authorization');
        if (token == null) {
            movePage('/');
        }
        setMenuBtnClick(false)
        axios.delete(`${PROXY}/recipes/` + id, {
            headers: {
                Authorization: token
            }
        }
        ).then((res) => {
            if (res.data.statusCode === 200) {
                alert("레시피가 숨김 처리되었습니다.")
            }else{
                alert("숨김 처리에 실패했습니다.")
            }
        }).catch((error) => {
            alert("숨김 처리에 실패했습니다.")
        });
    };

    const handleComplete = (id) => {
        const token = getCookie('Authorization');
        if (token == null) {
            movePage('/');
        }
        setMenuBtnClick(false)
        axios.post(`${PROXY}/reports/` + id, {
            headers: {
                Authorization: token
            }
        }
        ).then((res) => {
            if (res.data.statusCode === 200) {
                alert("신고 완료 처리되었습니다.")
            }else{
                alert("완료 처리에 실패했습니다.")
            }
        }).catch((error) => {
            alert("완료 처리에 실패했습니다.")
        });
    };

    const [menuBtnClick, setMenuBtnClick] = useState(false);
    const outSection = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (outSection.current && !outSection.current.contains(event.target)) {
                setMenuBtnClick(false); // detailMenuBox 외부를 클릭한 경우
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function UseBtnEnbaleByLocation() {
        return useLocation().pathname.includes("completeReportManage")
    }

    return (
        <div className='page'>
            <div className='reportDetailContainer'>
                <p className="reportDetailTitle">신고 상세 내역</p>
                <div className="contentBox">
                    <div className="titleBar">
                        {info.recipeName}
                        <img src={MoreIcon} alt='more' onClick={() => { setMenuBtnClick(true) }} />
                        {
                            menuBtnClick === true
                                ?
                                (<div className='detailMenuBox' ref={outSection}>
                                    <div id='top' className='detailMenu'>
                                        <button onClick={() => handleHide(info.recipeIdx)}>레시피 숨기기</button>
                                    </div>
                                    <div id='bottom' className={UseBtnEnbaleByLocation() ? 'detailMenu enable' : 'detailMenu'}>
                                        <button disabled={UseBtnEnbaleByLocation()}
                                            onClick={() => handleComplete(recipeReportIdx)}>신고 완료 처리</button>
                                    </div>
                                </div>)
                                : null
                        }
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
                                    <textarea form='memo-form' name='memo' defaultValue={info.memo}></textarea>
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
        </div >
    );
}

export default ReportManage;