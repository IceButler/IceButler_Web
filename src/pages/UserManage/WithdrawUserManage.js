import React, { useEffect, useState, useRef } from 'react';
import './WithdrawUserManage.css'
import axios from 'axios';
import Tr from './UserTr';
import Paging from 'components/Paging.js'

const WithdrawUserManage = () => {
    const [info, setInfo] = useState([]);

    const nextId = useRef(11);

    // 데이터 호출
    useEffect(() => {
        axios.get('/users?active=false')
        // axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setInfo(res.data.data.content))
        .catch(err => console.log(err));
    }, []);

    const handleRemove = (id) => {
        console.log("성공");
        // TODO
    }

    const handleEdit = (id) => {
        console.log("성공2");
        // TODO
    }

    return (
        <div className='page'>
            <div className='withdrawUserManageContainer'>
                <div className='withdrawUserManageTitle'>탈퇴 회원</div>
                <div className ='withdrawUserManageContent'>
                    <div className = 'withdrawUserManageBar'/>
                    <div className = 'withdrawUserManageTable'>
                    <table>
                        <thead>
                            <tr>
                                <th>닉네임</th>
                                <th>이메일</th>
                                <th>신고 누적 횟수</th>
                                <th>이메일 전송</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit}/>
                        </tbody>
                    </table>
                    </div>
                    <div className='withdrawUserManagePaging'><Paging/></div>
                </div>
            </div>
        </div>
    );
};

export default WithdrawUserManage;