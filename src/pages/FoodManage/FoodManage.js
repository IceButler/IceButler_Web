import React, { useEffect, useState, useRef } from 'react';
import './FoodManage.css'
import Paging from 'components/Paging.js'
import axios from 'axios';
import Tr from './FoodTr';
import foodTrash from "assets/images/food/trash.png";

function FoodManage() {
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
            <div className='foodManageContainer'>
                <div className='foodManageTitle'>식품 관리</div>
                <div className='foodManageContent'>
                    <div className='foodManageBar' />
                    <div className='foodManageTable'>
                        <table className="foodTable">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>아이콘</th>
                                    <th>식품명</th>
                                    <th></th>
                                    <th>아이콘</th>
                                    <th>식품명</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
                            </tbody>
                        </table>
                    </div>
                    <div className='foodManagePaging'>
                        
                        <button className="foodDeleteBtn" value="선택 삭제">
                        <img className='foodDeleteIcon' src={foodTrash} alt = "img icon error"/>선택 삭제</button>
                        <Paging />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodManage;