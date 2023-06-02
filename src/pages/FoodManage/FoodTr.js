import React, { useState } from 'react';
import foodEdit from "assets/images/food/edit.png";
import './FoodManage.css'
import axios from 'axios';

const Tr = ({ info, checkHandler, checkedStatusList, handleEdit }) => {
  const rows = [];
  const maxRows = 16;

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedFoodName, setEditedFoodName] = useState('');

  const handleEditClick = (index, foodName) => {
    setEditingIndex(index);
    setEditedFoodName(foodName);
  };

  const handleSave = (item) => {
    axios.patch(`/admin/foods/${item.foodIdx}`, {
      foodCategory: item.foodCategory,
      foodName: editedFoodName,
      foodImgKey: item.foodImgKey
    }).then((res) => {
      alert('성공적으로 수정되었습니다.');
    }).catch((error) => {
      console.error('HTTP 요청 실패:', error);
    });

    // 저장 후 편집 상태 초기화
    setEditingIndex(null);
    setEditedFoodName('');
  };

  const handleTdClick = (index, foodName) => {
    console.log(index)
    setEditingIndex(index);
    setEditedFoodName(foodName);
  };

  const handleInputChange = (e) => {
    setEditedFoodName(e.target.value);
  };

  const handleKeyDown = (e, item) => {
    if (e.key === 'Enter') {
      handleSave(item);
    }
  };


  for (let i = 0; i < maxRows; i = i + 2) {
    const item = info[i];
    const item2 = info[i + 1];
    rows.push(
      <tr key={i}>
        {item ? (
          <>
            <td width="5%"><input type="checkbox" checked={checkedStatusList[i]} onChange={(e) => checkHandler(item.foodIdx, i)} /></td>
            <td width="15%" >
              <img src={item.foodImgUrl} alt="food_img"/>
            </td>
            <td width="15%">
              {item.foodCategory}
              <img className="foodEditImg" src={foodEdit} alt="food_search_img" />
            </td>
            <td width="15%" onClick={() => handleTdClick(item.foodIdx, item.foodName)}>
              {editingIndex === item.foodIdx ? (
                <input
                  type="text"
                  id="editInput"
                  value={editedFoodName}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, item)}
                  autoFocus
                />
              ) : (
              <>
                {item.foodName}
                <img
                  className="foodEditImg"
                  src={foodEdit}
                  alt="food_search_img"
                  onClick={() => handleEditClick(i, item.foodName)}
                // <img className = "foodEditImg" src={foodEdit} alt="food_search_img"/>
                />
              </>
              )}
            </td>
          </>
        ) : (
          <>
            <td width="5%"></td>
            <td width="15%"></td>
            <td width="15%"></td>
            <td width="15%"></td>
          </>
        )}
        {item2 ? (
          <>
            <td width="5%"><input type="checkbox" checked={checkedStatusList[i + 1]} onChange={(e) => checkHandler(item2.foodIdx, i + 1)} /></td>
            <td width="15%">
              <img src={item2.foodImgUrl} alt="food_img" />
            </td>
            <td width="15%">
              {item2.foodCategory}
              <img className="foodEditImg" src={foodEdit} alt="food_search_img" />
            </td>
            <td width="15%" onClick={() => handleTdClick(item2.foodIdx, item2)}>
              {editingIndex === item2.foodIdx ? (
                <input
                  type="text"
                  id="editInput"
                  value={editedFoodName}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyDown(e, item2.foodIdx)}
                  autoFocus
                />
              ) : (
              <>
                {item2.foodName}
                <img
                  className="foodEditImg"
                  src={foodEdit}
                  alt="food_search_img"
                  onClick={() => handleEditClick(i, item2.foodName)}
                // <img className = "foodEditImg" src={foodEdit} alt="food_search_img"/>
                />
              </>
              )}
            </td>
          </>
        ) : (
          <>
            <td width="5%"></td>
            <td width="15%"></td>
            <td width="15%"></td>
            <td width="15%"></td>
          </>
        )}
      </tr>
    );

  }

  return <>{rows}</>;
};

export default Tr;