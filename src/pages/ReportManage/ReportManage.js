import React, { useEffect, useState, useRef } from 'react';
import './ReportManage.css'
import axios from 'axios';
import Tr from './ReportTr';
import Paging from 'components/Paging.js'

function ReportManage() {
    const [info, setInfo] = useState([]);

    const nextId = useRef(11);

    // 데이터 호출
    useEffect(() => {
        // axios.get('https://za8hqdiis4.execute-api.ap-northeast-2.amazonaws.com/dev/dev-ice-bulter-main/admin/users?active=true')
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleRemove = (id) => {
        console.log("성공");
        // TODO
    }

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
                                <Tr info={info} handleRemove={handleRemove} />
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