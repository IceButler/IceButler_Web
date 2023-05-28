import React, { useEffect, useState } from 'react';
import './ReportManage.css'
import axios from 'axios';
import Tr from './ReportTr';
import Paging from 'components/Paging.js'

function ReportManage() {
    const [info, setInfo] = useState([]);

    ///데이터 호출
    useEffect(() => {
        axios.get('/reports?type=1')
            .then(res => {
                setInfo(res.data.data.content)
                console.log(res.data.data.content)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='page'>
            <div className='reportManageContainer'>
                <div className='reportManageTitle'>신고 내역</div>
                <div className='reportManageContent'>
                    <div className='reportManageBar' />
                    <div className='reportTable'>
                        <table>
                            <thead>
                                <tr>
                                    <th>신고 번호</th>
                                    <th>레시피</th>
                                    <th>작성자</th>
                                    <th>신고 사유</th>
                                    <th>신고자</th>
                                    <th>신고 일자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Tr info={info} />
                            </tbody>
                        </table>
                    </div>
                    <div className='reportManagePaging'>
                        <Paging />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportManage;