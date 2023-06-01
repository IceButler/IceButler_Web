import React, { useEffect, useState, useRef } from 'react';
import './FoodManage.css'
import Paging from 'components/Paging.js'
import axios from 'axios';
import Tr from './FoodTr';
import foodTrash from "assets/images/food/trash.png";
import foodSearch from "assets/images/food/search.png";
import { useNavigate } from "react-router-dom";

function FoodManage() {
    const [info, setInfo] = useState([]);
    const [currentPage, setPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);
    const [size, setSize] = useState(0);
    const movePage = useNavigate();

    const [searchWord, setSearchWord] = useState("")

    // const nextId = useRef(11);

    // 데이터 호출
    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage, searchWord]);


    const fetchData = (page) => {
        if (axios.defaults.headers.common['Authorization'] == null) {
            movePage('/');

        }
        axios.get('admin/foods', {
            params: {
                cond: searchWord,
                page: page - 1,
                size: 16
            }
        })
            .then(res => {
                setInfo(res.data.data.content)
                setTotalElements(res.data.data.totalElements);
                console.log(res.data)
                setSize(16)
            })
            .catch(err => console.log(err))
    };
    const onSearchClickHandler = (e) => {
        e.preventDefault();
    }

    const handleRemove = (id) => {
        console.log("성공");
        // TODO
    }

    const handleEdit = (id) => {
        console.log("성공2");
        // TODO
    }
    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div className='page'>
            <div className='foodManageContainer'>
                <div className='foodManageTitle'>식품 관리</div>
                <div className='foodManageContent'>
                    <div className='foodSearch'>
                        <button>
                            <img src={foodSearch} alt='img error' onClick={onSearchClickHandler} />
                        </button>
                        <input type="text" placeholder={"식품명 검색"} onChange={(e) => {
                            setPage(1)
                            setSearchWord(e.target.value)
                        }
                        } name="searchword" />
                    </div>
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
                            <img className='foodDeleteIcon' src={foodTrash} alt="img icon error" />선택 삭제</button>
                        <Paging currentPage={currentPage} size={size} count={totalElements} handlePageChange={handlePageChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodManage;