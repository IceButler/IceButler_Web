import React, { useEffect, useState } from 'react';
import './ReportManage.css'
import axios from 'axios';
import Tr from './ReportTr';
import Paging from 'components/Paging.js'

function CompleteReportManage() {
    const [info, setInfo] = useState([]);
    const [currentPage, setPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const fetchData = (page) => {
        axios.get(`/reports?type=0&size=10&page=${page - 1}`)
            .then(res => {
                setInfo(res.data.data.content);
                setTotalElements(res.data.data.totalElements);
            })
            .catch(err => console.log(err));
        console.log(page);
    };

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div className='page'>
            <div className='reportManageContainer'>
                <div className='reportManageTitle'>처리 내역</div>
                <div className='reportManageContent'>
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