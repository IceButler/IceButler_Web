import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ReportManage.css'
import axios from 'axios';
import Tr from './ReportTr';
import Paging from 'components/Paging.js'
import SearchIcon from "assets/images/food/search.png";
import {getCookie } from 'pages/Login/Login.js';

function CompleteReportManage() {
    const PROXY = window.location.hostname === 'localhost' ? '' : '/recipe_proxy';
    const [info, setInfo] = useState([]);
    const [currentPage, setPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);

    const movePage = useNavigate();
    const [searchWord, setSearchWord] = useState("")

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage, searchWord]);

    function writeParams(page) {
        if (searchWord === "")
            return (
                {
                    type: 0,
                    page: page - 1,
                    size: 10
                }
            )
        else
            return (
                {
                    type: 0,
                    nickname: searchWord,
                    page: page - 1,
                    size: 10
                }
            )
    }

    const fetchData = (page) => {
        const token = getCookie('Authorization');
        if (token == null) {
            movePage('/');
        }
        axios.get(`${PROXY}/reports`, {
            params: writeParams(page),
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                if (res.data.statusCode === 200) {
                    setInfo(res.data.data.content);
                    setTotalElements(res.data.data.totalElements);
                }
            })
            .catch(err => console.log(err));
        console.log(page);
    };

    const onSearchClickHandler = (e) => {
        e.preventDefault();
    }

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div className='page'>
            <div className='reportManageContainer'>
                <div className='reportManageTitle'>처리 내역</div>
                <div className='reportManageContent'>
                    <div className='reportSearch'>
                        <button>
                            <img src={SearchIcon} alt='img error' onClick={onSearchClickHandler} />
                        </button>
                        <input type="text" placeholder={"닉네임 검색"} onChange={(e) => {
                            setPage(1)
                            setSearchWord(e.target.value)
                        }
                        } name="searchword" />
                    </div>
                    <div className='reportManageBar' />
                    <div className='reportTable'>
                        <table>
                            <thead>
                                <tr>
                                    <th width="10%">신고 번호</th>
                                    <th width="30%">레시피</th>
                                    <th width="10%">작성자</th>
                                    <th width="20%">신고 사유</th>
                                    <th width="10%">신고자</th>
                                    <th width="20%">신고 일자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Tr info={info} path={'/completeReportManage/'} />
                            </tbody>
                        </table>
                    </div>
                    <div className='reportManagePaging'>
                        <Paging currentPage={currentPage} count={totalElements} handlePageChange={handlePageChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompleteReportManage;