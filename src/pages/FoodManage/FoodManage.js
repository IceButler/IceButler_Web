import React, { useEffect, useState } from 'react';
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
    const [checkedItems, setCheckedItems] = useState(new Set());
    const [checkedStatusList, setCheckedStatusList] = useState(new Array(16).fill(false));
    const [totalElements, setTotalElements] = useState(0);
    const [size, setSize] = useState(0);
    const [edit, setEdit] = useState(false);
    const movePage = useNavigate();

    const [searchWord, setSearchWord] = useState("")

    // 데이터 호출
    useEffect(() => {
        fetchData(currentPage);
        setEdit(false);
    }, [currentPage, searchWord, edit]);


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
    };

    const setChecked = (id, isChecked) => {
        if (isChecked) {
            checkedItems.add(id);
            setCheckedItems(checkedItems);
        } else if (!isChecked && checkedItems.has(id)) {
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
        }
        // console.log(checkedItems);
    };

    const handleRemove = () => {
        checkedItems.forEach((id) => {
            axios.delete(`/admin/foods/${id}`)
            .then(res => {
                console.log('HTTP 요청 성공');
                alert('성공적으로 삭제되었습니다.');
                fetchData(currentPage);
                checkedItems.clear();
            })
            .catch(err => {
                console.error('HTTP 요청 실패:', err);
            });
            console.log(id);
        })
        checkedItems.clear();
        setCheckedStatusList(new Array(16).fill(false));
    }
    // checkbox
    const checkedItemHandler = (id, isChecked) => {
        setChecked(id, isChecked);
      };
  
    const checkHandler = (id, i) => {
        const updatedCheckedStatusList = [...checkedStatusList];
        if(checkedStatusList[i] === undefined || checkedStatusList[i] === false){
            updatedCheckedStatusList[i] = true;
          }else{
            updatedCheckedStatusList[i] = false;
          }
    
          checkedItemHandler(id, updatedCheckedStatusList[i]);
          setCheckedStatusList(updatedCheckedStatusList);
    };

    const handlePageChange = (page) => {
        setCheckedItems(new Set());
        setCheckedStatusList(new Array(16).fill(false));
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
                                    <th>카테고리</th>
                                    <th>식품명</th>
                                    <th></th>
                                    <th>아이콘</th>
                                    <th>카테고리</th>
                                    <th>식품명</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Tr info={info} checkedItems={checkedItems} checkHandler = {checkHandler} checkedStatusList = {checkedStatusList} setEdit={setEdit} />
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
// export handleRemove;