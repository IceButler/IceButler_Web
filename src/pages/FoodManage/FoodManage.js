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
        <div className = "page">
            <div className = "foodManageContainer">
                <div className = "foodTitle">식품 회원</div>
                <div className = "foodContent">
                    <table className="foodTable">
                        <thead>
                            <tr>
                                <th>아이콘</th>
                                <th>식품명</th>
                                <th>아이콘</th>
                                <th>식품명</th>
                            </tr>
                        </thead>
                        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
                        <tr className='foodPaging'>
                            {/* <td colSpan="4"><Paging /></td> */}
                        </tr>
                    </table>
                </div>
                {/* <img className='foodDeleteIcon' src={foodTrash} alt = "img icon error"/> */}
                {/* <button className = "foodDeleteBtn" value="선택 삭제">선택 삭제</button> */}
                <div className='paging'><Paging/></div>
            </div>
        </div>
    );
}

export default FoodManage;