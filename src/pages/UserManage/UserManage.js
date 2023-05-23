import React, { useEffect, useState, useRef } from 'react';
import './UserManage.css'
import axios from 'axios';
import Tr from './UserTr';

const UserManage = () => {
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

    const handleEdit = (id) => {
        console.log("성공2");
        // TODO
    }

    return (
        <div className='page'>
        <div className='withdrawUserManageContainer'>
            <div className='title'>일반 회원</div>
            <div className ='content'>
            <table>
                <thead>
                    <tr>
                        <th>닉네임</th>
                        <th>이메일</th>
                        <th>신고 누적 횟수</th>
                        <th>이메일 전송</th>
                    </tr>
                </thead>
                <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit}/>
            </table>
            </div>
        </div>
        </div>
    );
};

export default UserManage;